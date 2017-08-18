
function ObliczObrazenia()
{
	var Obwody=Number($("#Obwody").val());
	var SpecMnoznik=Number($("#SpecMnoznik").val());
	var Ogien=Number($("#Ogien").val());
	var Woda=Number($("#Woda").val());
	var Piorun=Number($("#Piorun").val());
	var Powietrze=Number($("#Powietrze").val());
	var Ziemia=Number($("#Ziemia").val());
	var Lod=Number($("#Lod").val());
	var MocElem=0;
	if(Powietrze>=1)
	{
		MocElem=2.5*Ogien+2.5*Woda+2.5*Piorun+0.5*Powietrze+2.5*Ziemia+2.5*Lod;
	}
	else
	{
		MocElem=1.5*Ogien+1*Woda+2.5*Piorun+0.5*Powietrze+1.5*Ziemia+2*Lod;
	}
	var obrazenia=0;
	obrazenia=Obwody*SpecMnoznik*MocElem;
	$("#Obrazenia").html(obrazenia);
}

function ObliczPT()
{
	var Elementy=Number($("#Elementy").val());
	var Formy=Number($("#Formy").val());
	var PT="0";
	if(Elementy+Formy<=6)
	{
		PT="I";
	}
	else if(Elementy+Formy<=12)
	{
		PT="II";
	}
	else
	{
		PT="III";
	}
	$("#PT").html(PT);
	var utrudnienie=-5*(Elementy-Formy*2);
	utrudnienie=utrudnienie>0?0:utrudnienie;
	$("#utrudnienie").html(utrudnienie);
}

$(document).ready(function(){
	$("input").change(function(){
		ObliczObrazenia();
		ObliczPT();
	});
})