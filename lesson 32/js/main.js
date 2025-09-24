// var input = document.getElementById('input_id');
// var button = document.getElementById('btn_id');
// var text  = document.getElementById('text_id')

var input = document.querySelector('input_id');
 var button = document.querySelector('btn_id');
 var text  = document.querySelector('text_id');



button.onclick = function () {
    text.innerHTML = input.value
}




var text = "Digital school";
var result = text.search("Digital school");    
document.getElementById("result1").innerHTML = result;











var text = "Digital school";
var result = text.search(/school/);    
document.getElementById("result2").innerHTML = result;











var text = "Digital school";
var result = text.search(/Digital school/);    
document.getElementById("result3").innerHTML = result;






var text = "acdef";
var regex = new RegExp('abc')
document.getElementById("result4").innerHTML = regex.test(text);

var text = "My school is the  best school in the world! ";
var regex = /school/g;
document.getElementById('result4 ') .innerHTML = text.mach(regex)







var text = "My school is the  best school in the world! ";
var regex = /i/g;
document.getElementById('result5').innerHTML = text.mach(regex)








var text = "My school is the  best school in the world! ";
var regex = /(top|best|school)/g;
document.getElementById('result6').innerHTML = text.mach(regex)





















