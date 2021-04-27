/*Convert an array of integers into an array of strings representing the phonetic equivalent of the
integer */

let numWithWords = new Map([[0, 'Zero'], 
[1, 'One'], [2, 'Two'], [3, 'Three'], [4, 'Four'],
[5, 'Five'], [6, 'Six'], [7,'Seven'], [8,'Eight'], [9, 'Nine']]);

function solution(array) {
var i;
var string="";
for (i = 0; i < array.length; i++) {
 if (array[i]<10){
     string+=numWithWords.get(array[i]);
     if(i!=array.length-1){
        string+=',';
     }
 }
 else{
    string+=geTenConToStr(array[i]);
    if(i!=array.length-1){
        string+=',';
     }
 }
 
}
return string;
}
/*Return the phonetic equivalent of an integer greater than 10.*/
function geTenConToStr(int){
    if(int<10){
        return numWithWords.get(int);
    }
    return geTenConToStr(Math.floor(int/10))+numWithWords.get(int%10);
}
