//$.getScript("raphael.min.js");

KregiMagii={
	
InitializeRaphael: function(){
	try{
		scriptLoaded=$.when();
		r=Raphael("canvas", 600, 600);
	}
	catch(err)
	{
		console.log("złapany błąd: "+err);
		scriptLoaded=$.when($.getScript("raphael.min.js", function( data, textStatus, jqxhr ) {
			//console.log( data ); // Data returned
			console.log( textStatus ); // Success
			console.log( jqxhr.status ); // 200
			console.log( "Load was performed." );
			r=Raphael("canvas", 600, 600);
		}));
	}
},
	
DrawKregiMagii: function(){
	
	c0=r.circle(300,300,250);
	//c0.attr("fill", "#f00")
	c0.attr({	stroke: 'gold',
				'stroke-width': 8});
	cW=r.circle(300,200,120);
	cW.attr({	stroke: 'lime',
				'stroke-width': 3});
	cAO=r.circle(387,350,120);
	cAO.attr({	stroke: 'cyan',
				'stroke-width': 3});
	cM=r.circle(213,350,120);
	cM.attr({	stroke: 'orange',
				'stroke-width': 3});
	t1=r.text(450,200,"1");
	t1.attr({'font-size':28});
	t2=r.text(300,470,"2");
	t2.attr({'font-size':28});
	t3=r.text(150,200,"3");
	t3.attr({'font-size':28});
	t4=r.text(390,200,"4");
	t4.attr({'font-size':28});
	t5=r.text(420,270,"5");
	t5.attr({'font-size':28});
	t6=r.text(340,420,"6");
	t6.attr({'font-size':28});
	t7=r.text(260,420,"7");
	t7.attr({'font-size':28});
	t8=r.text(180,270,"8");
	t8.attr({'font-size':28});
	t9=r.text(210,200,"9");
	t9.attr({'font-size':28});
	tA=r.text(380,250,"A");
	tA.attr({'font-size':28});
	tB=r.text(330,285,"B");
	tB.attr({'font-size':28});
	tC=r.text(300,400,"C");
	tC.attr({'font-size':28});
	tD=r.text(300,340,"D");
	tD.attr({'font-size':28});
	tE=r.text(220,255,"E");
	tE.attr({'font-size':28});
	tF=r.text(270,285,"F");
	tF.attr({'font-size':28});
	tX=r.text(300,300,"X");
	tX.attr({'font-size':28});
	l39=r.path(["M", t3.getBBox().x+20, t3.getBBox().y+15, "L", t9.getBBox().x-4, t9.getBBox().y+15]);
	l39.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l94=r.path(["M", t9.getBBox().x+20, t9.getBBox().y+15, "L", t4.getBBox().x-4, t4.getBBox().y+15]);
	l94.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l41=r.path(["M", t4.getBBox().x+20, t4.getBBox().y+15, "L", t1.getBBox().x-4, t1.getBBox().y+15]);
	l41.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l38=r.path(["M", t3.getBBox().x+8, t3.getBBox().y+30, "L", t8.getBBox().x+4, t8.getBBox().y+4]);
	l38.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l87=r.path(["M", t8.getBBox().x+8, t8.getBBox().y+30, "L", t7.getBBox().x+4, t7.getBBox().y+4]);
	l87.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l72=r.path(["M", t7.getBBox().x+8, t7.getBBox().y+30, "L", t2.getBBox().x-4, t2.getBBox().y+15]);
	l72.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l26=r.path(["M", t2.getBBox().x+20, t2.getBBox().y+15, "L", t6.getBBox().x+8, t6.getBBox().y+30]);
	l26.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l65=r.path(["M", t6.getBBox().x+8, t6.getBBox().y+4, "L", t5.getBBox().x+8, t5.getBBox().y+30]);
	l65.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l51=r.path(["M", t5.getBBox().x+8, t5.getBBox().y+4, "L", t1.getBBox().x+8, t1.getBBox().y+30]);
	l51.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l9E=r.path(["M", t9.getBBox().x+8, t9.getBBox().y+30, "L", tE.getBBox().x+4, tE.getBBox().y+4]);
	l9E.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lEF=r.path(["M", tE.getBBox().x+20, tE.getBBox().y+15, "L", tF.getBBox().x-4, tF.getBBox().y+15]);
	lEF.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lFX=r.path(["M", tF.getBBox().x+8, tF.getBBox().y+20, "L", tX.getBBox().x+4, tX.getBBox().y+15]);
	lFX.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lXB=r.path(["M", tX.getBBox().x+16, tX.getBBox().y+15, "L", tB.getBBox().x+4, tB.getBBox().y+24]);
	lXB.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lBA=r.path(["M", tB.getBBox().x+20, tB.getBBox().y+15, "L", tA.getBBox().x, tA.getBBox().y+20]);
	lBA.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lA4=r.path(["M", tA.getBBox().x+12, tA.getBBox().y+4, "L", t4.getBBox().x+8, t4.getBBox().y+30]);
	lA4.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l8E=r.path(["M", t8.getBBox().x+15, t8.getBBox().y+15, "L", tE.getBBox().x, tE.getBBox().y+15]);
	l8E.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lA5=r.path(["M", tA.getBBox().x+20, tA.getBBox().y+15, "L", t5.getBBox().x-4, t5.getBBox().y+15]);
	lA5.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lXD=r.path(["M", tX.getBBox().x+10, tX.getBBox().y+25, "L", tD.getBBox().x+10, tD.getBBox().y+4]);
	lXD.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lDC=r.path(["M", tD.getBBox().x+10, tD.getBBox().y+28, "L", tC.getBBox().x+10, tC.getBBox().y+4]);
	lDC.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lC2=r.path(["M", tC.getBBox().x+10, tC.getBBox().y+28, "L", t2.getBBox().x+8, t2.getBBox().y+4]);
	lC2.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	l7C=r.path(["M", t7.getBBox().x+15, t7.getBBox().y+15, "L", tC.getBBox().x, tC.getBBox().y+15]);
	l7C.attr({	stroke: '#6699ff',
				'stroke-width': 5});
	lC6=r.path(["M", tC.getBBox().x+20, tC.getBBox().y+15, "L", t6.getBBox().x-4, t6.getBBox().y+15]);
	lC6.attr({	stroke: '#6699ff',
				'stroke-width': 5});
},

MagiaLogic: function (thatObject)
{
	console.log("MagiaLogic triggerd!: this: ");
	console.log(this);
	console.log("thatObject:");
	console.log(thatObject);
	switch(thatObject.id){
		case "magia":
			var tmp=c0;
			thatObject.checked?tmp.g=tmp.glow({color: tmp.attr('stroke'), width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "W":
			var tmp=cW;
			thatObject.checked?tmp.g=tmp.glow({color: tmp.attr('stroke'), width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "AO":
			var tmp=cAO;
			thatObject.checked?tmp.g=tmp.glow({color: tmp.attr('stroke'), width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "M":
			var tmp=cM;
			thatObject.checked?tmp.g=tmp.glow({color: tmp.attr('stroke'), width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "1":
			var tmp=t1;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "2":
			var tmp=t2;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "3":
			var tmp=t3;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "4":
			var tmp=t4;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "5":
			var tmp=t5;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "6":
			var tmp=t6;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "7":
			var tmp=t7;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "8":
			var tmp=t8;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "9":
			var tmp=t9;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "A":
			var tmp=tA;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "B":
			var tmp=tB;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "C":
			var tmp=tC;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "D":
			var tmp=tD;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "E":
			var tmp=tE;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "F":
			var tmp=tF;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		case "X":
			var tmp=tX;
			var rc=r.rect(tmp.getBBox().x-6,tmp.getBBox().y,28,28);
			rc.attr({opacity: 0});
			thatObject.checked?tmp.g=rc.glow({fill: true,color: '#ccccff', width: 30}):((tmp.g)?tmp.g.remove():0);
			break;
		
	}
	var tmp=l39;
	if($("#3").prop('checked') || $("#9").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l94;
	if($("#9").prop('checked') || $("#4").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l41;
	if($("#4").prop('checked') || $("#1").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l38;
	if($("#3").prop('checked') || $("#8").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l87;
	if($("#8").prop('checked') || $("#7").prop('checked')){
	if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l72;
	if($("#7").prop('checked') || $("#2").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l26;
	if($("#2").prop('checked') || $("#6").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l65;
	if($("#6").prop('checked') || $("#5").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l51;
	if($("#5").prop('checked') || $("#1").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l9E;
	if($("#9").prop('checked') || $("#E").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l8E;
	if($("#8").prop('checked') || $("#E").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lEF;
	if($("#E").prop('checked') || $("#F").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lFX;
	if($("#F").prop('checked') || $("#X").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lXB;
	if($("#X").prop('checked') || $("#B").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lBA;
	if($("#B").prop('checked') || $("#A").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lA4;
	if($("#A").prop('checked') || $("#4").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lA5;
	if($("#A").prop('checked') || $("#5").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lXD;
	if($("#X").prop('checked') || $("#D").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lDC;
	if($("#D").prop('checked') || $("#C").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lC2;
	if($("#C").prop('checked') || $("#2").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=lC6;
	if($("#C").prop('checked') || $("#6").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	var tmp=l7C;
	if($("#7").prop('checked') || $("#C").prop('checked')){
		if(!!tmp.g)tmp.g.remove();
		tmp.g=tmp.glow({color: '#6699ff', width: 30});
	}
	else{
		if(!!tmp.g)tmp.g.remove();
	}
	
}
}

$(document).ready(function(){
	setTimeout(function(){
		try{
			KregiMagii.InitializeRaphael();
			scriptLoaded.done(function(){
				console.log("promise accomplished!");
				KregiMagii.DrawKregiMagii();
				$(".glowable").change(function(){
					KregiMagii.MagiaLogic(this);
				});
				$(".glowable").each(function(){
					KregiMagii.MagiaLogic(this);
				});
			});
		}
		catch(err)
		{
			console.log("złapany błąd: "+err);
		}
	}, 100);
});