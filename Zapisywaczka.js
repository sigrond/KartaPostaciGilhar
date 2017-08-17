/*
 * funkcje odpowiedzialne za zapisywanie i wczytywanie danych karty postaci
*/

fieldColector=new Array();

function zapisz(nazwa, wartosc){
	//localStorage.setItem(String(nazwa), String(wartosc));
	console.log(String(nazwa)+":"+String(wartosc));
	//$("#debug_ids"+strona,).append(String(nazwa)+" TEXT, ");
	//tu moze pojawić się jakiś ajax
	fieldColector[strona][String(nazwa)]=String(wartosc);
	localStorage.setItem('fieldColector', JSON.stringify(fieldColector));
}

function wczytaj(nazwa){
	//return localStorage.getItem(String(nazwa));
	var val=fieldColector[strona][String(nazwa)];
	if(val==undefined)
		return "";
	return val;
}

function zapiszPostacDoBazy(){
	$("#debug_div").append("zalogowany: "+sessionStorage.LoggedIn);
	$("#debug_div").append("<br>login: "+sessionStorage.uname);
	$("#debug_div").append("<br>hasło: "+sessionStorage.upswd);
	$("#debug_div").append("<br>obiekt: <code>"+JSON.stringify(fieldColector)+"</code><br>");
	$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/zapiszDanePostaci.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: {
				fields: JSON.stringify(fieldColector),
				hash: MD5(JSON.stringify(fieldColector)),
				name: sessionStorage.uname,
				pswd: sessionStorage.upswd
				},
			success: function (json) {
				console.log(json);
				var myStr=String("");
				$.each(json,function(i,v){
					myStr+=i+": "+v+", ";
				})
				$("#debug_response1").html(myStr);
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
				console.log(responseData);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
}

function sprawdzSynchronizacje(){
	$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/sprawdzSynchronizacje.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: {
				name: sessionStorage.uname,
				pswd: sessionStorage.upswd
				},
			success: function (json) {
				//console.log(json);
				$.each(json,function(i,v){
					console.log(i);
					if(i==='hash')
					{
						if(v==MD5(JSON.stringify(fieldColector)))
							$("#sync_status").addClass('w3-green').removeClass('w3-yellow').removeClass('w3-red').removeClass('w3-orange').addClass('w3-spin').delay(3000000).removeClass('w3-spin');
						else
							$("#sync_status").addClass('w3-red').removeClass('w3-yellow').removeClass('w3-green').removeClass('w3-orange');
					}
				});
				
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
				console.log(responseData);
				console.log(textStatus);
				console.log(errorThrown);
				$("#sync_status").addClass('w3-orange').removeClass('w3-yellow').removeClass('w3-red').removeClass('w3-green');
			}
		});
}

function wczytajPostacZBazy(){
	$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/wczytajDanePostaci.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: {
				fields: JSON.stringify(fieldColector),
				name: sessionStorage.uname,
				pswd: sessionStorage.upswd
				},
			success: function (json) {
				//console.log(json);
				var myStr=String("");
				$.each(json,function(i,v){
					console.log(i);
					myStr+=i+": "+JSON.stringify(v)+", ";
					if(i==='fields')
					{
						console.log(JSON.stringify(v));
						fieldColector=v;
						console.log(fieldColector);
						localStorage.setItem('fieldColector', JSON.stringify(fieldColector));
						$(myOuter+"input").each(function(){
							this.value=wczytaj(this.id);//wczytanie wszystkich wartości
							if(this.type=="checkbox")
							{
								if(this.value=="on")
									$(this).prop('checked', true);
								else
									$(this).prop('checked', false);
							}
						});
					}
				});
				sprawdzSynchronizacje();
				//console.log(myStr);
				//$("#debug_response1").html(myStr);
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
				console.log(responseData);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
}



$(document).ready(function(){
	var i=0;
	myOuter="";
	if($("#actual_page").length)
		myOuter="#actual_page ";
	console.log(myOuter);
	console.log('strona: '+strona);
	updated=localStorage["myVersion"]!=$("#myVersion").html();
	
	fieldColector=JSON.parse(localStorage.getItem("fieldColector"));
	if(updated)
	{
		localStorage["myVersion"]=$("#myVersion").html();
		console.log("myVersion updated");
		localStorage["fieldColector"]=null;
		for(var i_strona=1;i_strona<=13;i_strona++)
		localStorage['zapisane'+i_strona]=false;
	}
	if(fieldColector==null || updated)
	{
		fieldColector={};
		fieldColector[strona]={};
	}
	if(fieldColector[strona]==undefined)
	{
		fieldColector[strona]={};
	}
	$(myOuter+"input").each(function(){
		if(!this.id)
			this.id="myGenericID"+strona+"s"+i++;//tworzenie id dla pól które ich nie mają
		if(this.type=="checkbox")
		{
			if(this.value=="on")
				$(this).prop('checked', true);
			else
				$(this).prop('checked', false);
		}
		//console.log(this.id);
		//fieldColector.push(this.id);
	});
	
	sprawdzSynchronizacje();
	
	if(localStorage['zapisane'+strona]==="true" && !updated)
	{
		console.log(localStorage.zapisane);
		$(myOuter+"input").each(function(){
			this.value=wczytaj(this.id);//wczytanie wszystkich wartości
			if(this.type=="checkbox")
			{
				if(this.value=="on")
					$(this).prop('checked', true);
				else
					$(this).prop('checked', false);
			}
		});
	}
	else
	{
		var myObj={};
		$(myOuter+"input").each(function(){
			zapisz(this.id, this.value);//pierwszy zapis wszystkich wartości
			myObj[String(this.id)]=String(this.value);
		});
		console.log(myObj);
		console.log("strona: "+strona);
		/*$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/zapiszDanePostaci'+strona+'.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: myObj,
			success: function (json) {
				console.log(json);
				var myStr=String("");
				$.each(json,function(i,v){
					myStr+=i+": "+v+", ";
				})
				$("#debug_response1").html(myStr);
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
				console.log(responseData);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});*/
		//zapiszPostacDoBazy();
		//wczytajPostacZBazy();
		localStorage['zapisane'+strona]="true";
	}
	
	$(myOuter+"input").change(function(){
		if(this.type=="checkbox")
		{
			if(this.checked)
				this.value="on";
			else
				this.value="off";
		}
		zapisz(this.id, this.value);//zapis pojedyńczej zmienionej wartości
		sprawdzSynchronizacje();
	});
});