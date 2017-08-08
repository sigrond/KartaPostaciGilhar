function createTables(){
	fieldColector=JSON.parse(localStorage.getItem("fieldColector"));
	$("#debug_div").append("zalogowany: "+sessionStorage.LoggedIn);
	$("#debug_div").append("<br>login: "+sessionStorage.uname);
	$("#debug_div").append("<br>hasło: "+sessionStorage.upswd);
	$("#debug_div").append("<br>obiekt: "+JSON.stringify(fieldColector));
	$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/createTables.php',
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
				});
				$("#create_table_results").html(myStr);
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
				console.log(responseData);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
}

function getGracze()
{
	$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/getGracze.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: {
				name: sessionStorage.uname,
				pswd: sessionStorage.upswd
				},
			success: function (json) {
				console.log(json);
				$.each(json,function(i,v){
					if(i==='data')
					{
						var myStr="";
						$.each(v, function(ind, dat){
							//$("#tab_gracze").append("<tr>");
							myStr+="<tr>";
							$.each(dat, function(index, value){
								//$("#tab_gracze").append("<td>");
								myStr+="<td>";
								//$("#tab_gracze").append(value);
								myStr+=String(value);
								//$("#tab_gracze").append("</td>");
								myStr+="</td>";
							});
							//$("#tab_gracze").append("</tr>");
							myStr+="</tr>";
						});
						$("#tab_gracze").append(myStr);
					}
				});
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
	$("#create_table_button").click(function(){
		createTables();
	});
	getGracze();
})