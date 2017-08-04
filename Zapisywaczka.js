/*
 * funkcje odpowiedzialne za zapisywanie i wczytywanie danych karty postaci
*/

fieldColector=new Array();

function zapisz(nazwa, wartosc){
	localStorage.setItem(String(nazwa), String(wartosc));
	console.log(String(nazwa)+":"+String(wartosc));
	//$("#debug_ids"+strona,).append(String(nazwa)+" TEXT, ");
	//tu moze pojawić się jakiś ajax
	fieldColector[strona][String(nazwa)]=String(wartosc);
	localStorage.setItem('fieldColector', JSON.stringify(fieldColector));
}

function wczytaj(nazwa){
	return localStorage.getItem(String(nazwa));
}

function zapiszPostacDoBazy(){
	$("#debug_div").append("zalogowany: "+sessionStorage.LoggedIn);
	$("#debug_div").append("<br>login: "+sessionStorage.uname);
	$("#debug_div").append("<br>hasło: "+sessionStorage.upswd);
	$("#debug_div").append("<br>obiekt: "+JSON.stringify(fieldColector));
	$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/zapiszDanePostaci.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: {
				fields: JSON.stringify(fieldColector),
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

$(document).ready(function(){
	var i=0;
	var myOuter="";
	if($("#actual_page").length)
		myOuter="#actual_page ";
	console.log(myOuter);
	console.log('strona: '+strona);
	
	fieldColector=JSON.parse(localStorage.getItem("fieldColector"));
	if(fieldColector==null)
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
		//console.log(this.id);
		//fieldColector.push(this.id);
	});
	
	if(localStorage['zapisane'+strona]==="true")
	{
		console.log(localStorage.zapisane);
		$(myOuter+"input").each(function(){
			this.value=wczytaj(this.id);//wczytanie wszystkich wartości
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
		$.post({
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
		});
		localStorage['zapisane'+strona]="true";
	}
	
	$(myOuter+"input").change(function(){
		zapisz(this.id, this.value);//zapis pojedyńczej zmienionej wartości
	});
});