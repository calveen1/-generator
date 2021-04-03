function ageInDays(){
    var bithYear = prompt('what is your birth year?');
    var ageInDayss = (2021 - bithYear) * 360;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are' + ' '+ ageInDayss + ' '+ 'in days');

    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}


function catGenerator(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/48r.gif";
    div.appendChild(image);
}
/*
let hour = prompt('what is the time?');
if ((hour >= 6) && (hour <= 12)){
   result = 'good morning';
}else{
    result = 'good afternoon';
}
console.log(result);*/