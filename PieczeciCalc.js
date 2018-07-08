
function ObliczObrazenia()
{
	var Elementy=Number($("#Elementy").val());
	var Moc=Number($("#Moc").val());
	var Mocwymagana=Number($("#MocWymagana").val());
	var Obwody=Number($("#Obwody").val());
	var SpecMnoznik=Number($("#SpecMnoznik").val());
	var Ogien=Number($("#Ogien").val());
	var Woda=Number($("#Woda").val());
	var Piorun=Number($("#Piorun").val());
	var Powietrze=Number($("#Powietrze").val());
	var Ziemia=Number($("#Ziemia").val());
	var Lod=Number($("#Lod").val());
	var Magia=Number($("#Magia").val());
	var MocElem=0;
	MocElem=1+0.2*Ogien+0.1*Woda+0.3*Piorun-0.1*Powietrze+0.2*Ziemia+0.2*Lod-0.1*Magia;
	var obrazenia=0;
	obrazenia=Moc*SpecMnoznik*MocElem;
	$("#Obrazenia").html(obrazenia);
	var czas=0.0;
	czas=Mocwymagana/Obwody;
	$("#czas").html(czas);
	if(Elementy==Ogien+Woda+Piorun+Powietrze+Ziemia+Lod+Magia)
	{
		$("#w_elementy").addClass('w3-green').removeClass('w3-red');
	}
	else
	{
		$("#w_elementy").addClass('w3-red').removeClass('w3-green');
	}
}

function ObliczPT()
{
	var Elementy=Number($("#Elementy").val());
	var Formy=Number($("#Formy").val());
	var Tier=Number($("#Tier").val());
	var Piorun=Number($("#Piorun").val());
	var Powietrze=Number($("#Powietrze").val());
	var PT="0";
	if(Tier<=2)
	{
		PT="I";
	}
	else if(Tier<=4)
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
	utrudnienie=utrudnienie-3*Piorun+Powietrze
	$("#utrudnienie").html(utrudnienie);
}

$(document).ready(function(){
	try{
		$("input").change(function(){
			ObliczObrazenia();
			ObliczPT();
		});
		ObliczObrazenia();
		ObliczPT();
	}
	catch(err)
	{
		console.log("złapany błąd: "+err);
	}
})