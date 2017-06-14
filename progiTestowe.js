/*
 * Wyliczanie progów testowych
*/

function progTestowy(prog, stata)
{
	var stataN=Number(stata);
	switch(prog){
		case 1:
			stataN=Number(stata)+10;
			break;
		case 2:
			if(stataN>10)
				stataN=stata;
			else
				stataN=0;
			break;
		case 3:
			if(stataN>20)
				stataN=stata-10;
			else
				stataN=0;
			break;
	}
	if(stataN<0)
		stataN=0;
	return stataN;
}

$(document).ready(function(){
	$(".stataG").each(function(){
		$("#"+this.id+"T1").val(progTestowy(1,this.value));
		$("#"+this.id+"T2").val(progTestowy(2,this.value));
		$("#"+this.id+"T3").val(progTestowy(3,this.value));
	});
	$(".stataG").change(function(){
		$("#"+this.id+"T1").val(progTestowy(1,this.value));
		$("#"+this.id+"T2").val(progTestowy(2,this.value));
		$("#"+this.id+"T3").val(progTestowy(3,this.value));
	});
});