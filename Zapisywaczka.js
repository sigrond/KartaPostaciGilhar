/*
 * funkcje odpowiedzialne za zapisywanie i wczytywanie danych karty postaci
*/

function zapisz(nazwa, wartosc){
	localStorage.setItem(String(nazwa), String(wartosc));
	console.log(String(nazwa)+":"+String(wartosc));
	//tu moze pojawić się jakiś ajax
}

function wczytaj(nazwa){
	return localStorage.getItem(String(nazwa));
}

$(document).ready(function(){
	var i=0;
	$("input").each(function(){
		if(!this.id)
			this.id="myGenericID"+i++;
//		else
//			this.value=wczytaj(this.id);
	});
	$("input").change(function(){
		zapisz(this.id, this.value);
	});
});