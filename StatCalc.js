
function ObliczKoszt()
{
	var stata_z=Number($("#stata_z").val());
	var stata_na=Number($("#stata_na").val());
	var stata_mod=Number($("#stata_mod").val());
	var koszt=0;
	if($("#stata_obw").prop('checked'))
	{
		for(i=stata_z+1;i<=stata_na;i++)
		{
			if(i<=1)
			{
				if(stata_mod>0)
					koszt+=5000*(1+0.1*stata_mod);//w przypadku dodatkowego modyfiokatora najpierw trzeba wykyupić tyle jako nowych ile się ma modyfikatora
				koszt+=5000*(1+0.1*stata_mod);//w przypadku ujemnych modyfikatorów początkowe obwody są za darmo
			}
			else
			{
				koszt+=500*i*(1+0.1*stata_mod);
			}
			console.log("i: "+i+", koszt: "+koszt);
		}
	}
	else
	{
		for(i=stata_z+1;i<=stata_na;i++)
		{
			if(i<11)
			{
				koszt+=1000*i*(1+0.1*stata_mod);
			}
			else if(i>10 && i<21)
			{
				koszt+=3000*i*(1+0.1*stata_mod);
			}
			else
			{
				koszt+=9000*i*(1+0.1*stata_mod);
			}
			console.log("i: "+i+", koszt: "+koszt);
		}
	}
	$("#koszt").html(koszt);
}

$(document).ready(function(){
	$("input").change(function(){
		ObliczKoszt();
	});
})