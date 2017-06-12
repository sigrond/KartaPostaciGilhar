/** \file: Postac_Gilhar.js
 * funkcje tworzące obiekty reprezentujące aspekty postaci Gilhara zawarte na karcie postaci
**/
/**
 * funkcje tworzące przydatne obiekty z karty postaci
**/
function Umiejetnosc(nazwa, poziom){
	var umiejetnosc={Nazwa: nazwa, Poziom: poziom};
	return umiejetnosc;
}
function BronBiala(nazwa, ranga, atak, obrazenia, czas, wAtak, zasieg, zmeczenie, inne, opis){
	var bron={	Nazwa: nazwa,
				Ranga: ranga, 
				Atak: atak,
				Obrazenia: obrazenia,
				Czas: czas, 
				WAtak: wAtak, 
				Zasieg: zasieg, 
				Zmeczenie: zmeczenie, 
				Inne: inne, 
				Opis: opis};
	return bron;
}
function BronDystansowa(nazwa, ranga, amunicja, maga, ene, szybk, sila, zasieg, inne, opis){
	var bron={	Nazwa: nazwa, 
				Ranga: ranga, 
				Amunicja: amunicja, 
				Maga: maga, 
				Ene: ene, 
				Szybk: szybk, 
				Sila: sila, 
				Zasieg: zasieg, 
				Inne: inne, 
				Opis: opis};
	return bron;
}
function SzkolaWalki(nazwa, poziomMistrzostwa, bronie){
	szkolaWalki={Nazwa: nazwa, PoziomMistrzostwa: poziomMistrzostwa, Bronie: bronie};
}
/**
 * funkca tworząca główny obiekt karty postaci
**/
function Postac(){
	
	var postac={
	imie:"test",
	rasa:"czlowiek",
	SF:1,
	WYT:1
	ZRE:1,
	INT:1,
	PER:1,
	CHA:1,
	WOL:1,
	OBW:0,
	WIT:1,
	EZyc:3,
	Kon:10,
	umiejetnosci: [],
	zdolnosci: [],
	F: 20,
	P: 20,
	M: 20,
	szkolyWalki: [],
	magie: [],
	arkana: [],
	bronie: [],
	ekwipunek: [],
	zloto: 0,
	pDuchoweCalosc: 0,
	pDuchoweWolne: 0};
	return postac;
}
/**
 * funkcje pomagające wyliczyć koszty zakupów za PD
**/
function KosztAtrybutuGlownego(z, na, mod){
	return 0;
}
function KosztAtrybutuPobocznego(z, na, mod){
	return 0;
}
function KosztUmiejetnosci(z, na){
	return 0;
}
function KosztMistrzostwa(z, na){
	return 0;
}