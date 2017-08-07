


$(document).ready(function(){
	$("#rejestracja_button").click(function(){
		$.post({
			url: 'http://projektgil.cba.pl/KartaPostaciGilhar/serverScripts/rejestracja.php',
			crossDomain: true,
			dataType: 'json',
			contentType: "application/x-www-form-urlencoded",//bo czemy niby application/json miało by poprawnie działać z POST jak opisano w standardzie
			data: {
				name: $("#uname").val(),
				pswd: String(MD5($("#upswd").val())),
				mail: $("#umail").val()
				},
			success: function (json) {
				console.log(json);
				//var myStr=String("");
				$.each(json,function(i,v){
					console.log(i);
					//myStr+=i+": "+JSON.stringify(v)+", ";
					if(i==='dbq1s')
					{
						console.log(JSON.stringify(v));
						$("#r3J35TR4CJ4").html("Witaj "+$("#uname").val()+" ! Rejestracja prawdopodobnie się udała. Spróbuj się zalogować.");
					}
					if(i==='status' && v==='LOGINALREADYEXISTS')
					{
						$("#myRefuse").html("Spróbuj inny login!");
					}
				});
				//console.log(myStr);
				//$("#debug_response1").html(myStr);
			},
			error: function (responseData, textStatus, errorThrown) {
				alert('POST failed.');
				console.log(responseData);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	});
})