$(document).ready(function(){
	switch(window.location.protocol) {
	case 'http:':
		break;
	case 'https:':
		alert("Strona została otwarta z lokalizacji stosującej https, domena hostująca skrypty serwerowe i bazę danych nie hostuje https, więc pozwól swojej przeglądarce na MixedContent, lub pobierz sobie lokalnie całą stronę z repozytorium, lub skożystaj z hosingu z http");
		break;
	case 'file:':
		break;
}
})