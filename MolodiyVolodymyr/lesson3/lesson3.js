var total=0;
var SPACE=" ";

for(var i=0; i<15;i++){
  var first = Math.floor((Math.random() * 6) + 1); 
  var second = Math.floor((Math.random() * 6) + 1); 
   total+=first+second;
   document.getElementById("result").innerHTML += "Первая кость:" + SPACE + first + SPACE + "Вторая кость:"+ SPACE + second + "<br>";
        if (first==second ){
	    document.getElementById("result").innerHTML += "Выпал дубль. Число" + SPACE + first+ "<br>"
		if(first==second && (first==1 || first==6)){
		document.getElementById("result").innerHTML += "Две" +SPACE+first+SPACE+"<br>"
	    }
		}
    };
(total>100)? document.write("Победа, вы набрали"+SPACE+total+SPACE+"очков<br>"):document.write("Вы проиграми, у вас"+ SPACE+total + SPACE+ "очков.<br>");
