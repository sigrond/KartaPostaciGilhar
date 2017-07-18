/*
 * funkcje odpowiedzialne za zapisywanie i wczytywanie danych karty postaci
*/

function zapisz(nazwa, wartosc){
	localStorage.setItem(String(nazwa), String(wartosc));
	console.log(String(nazwa)+":"+String(wartosc));
	$("#debug_ids"+strona,).append(String(nazwa)+" TEXT, ");
	//tu moze pojawić się jakiś ajax
	
}

function wczytaj(nazwa){
	return localStorage.getItem(String(nazwa));
}

$(document).ready(function(){
	var i=0;
	var myOuter="";
	if($("#actual_page").length)
		myOuter="#actual_page > ";
	console.log(myOuter);
	$(myOuter+"input").each(function(){
		if(!this.id)
			this.id="myGenericID"+i++;//tworzenie id dla pól które ich nie mają
	});
	
	if(localStorage.zapisane==="true")
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
		localStorage.zapisane="true";
	}
	
	$(myOuter+"input").change(function(){
		zapisz(this.id, this.value);//zapis pojedyńczej zmienionej wartości
	});
});