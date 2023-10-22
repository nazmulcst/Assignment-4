function cubeNumber(number){
     if(typeof number === "number"){
     return Math.pow(number,3);
     }else{
     return 'please give me number type parameter';
     }
     }
     function matchFinder(string1, string2) {
     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
     return "please give as a parameter string type";
     }
     if (string1.includes(string2)) {
     return true;
     } else {
     return false;
     }
     }
     function sortMaker(arr) {
     if(arr[0] > 0 && arr[1] > 0){
     if(typeof arr[0] ==='number' && typeof arr[1] ==='number'){
     if(arr[0] === arr[1]){
     return 'equal'
     }
     if(arr[0] > arr[1]){
     return arr;
     }
     else{
     let newArray = []
     const first = arr[1]
     const second = arr[0]
     newArray.push(first,second);
     return newArray;
     }
     }
     else{
     }
     }
     else{
     return 'Invalid Input';
     }
     }
     function findAddress(inputObject) {
     let output = "";
     if ('street' in inputObject) {
     output += inputObject.street;
     } else {
     output += "__";
     }
     output += ",";
     if ('house' in inputObject) {
     output += inputObject.house;
     } else {
     output += "__";
     }
     output += ",";
     if ('society' in inputObject) {
     output += inputObject.society;
     } else {
     output += "__";
     }
     return output;
     }
     function canPay(changeArray, totalDue) {
     let sum = 0;
     if(changeArray[0] !== '' && changeArray[0] !==' '){
     for (let i = 0; i < changeArray.length; i++) {
     sum = sum + changeArray[i]
     }
     if(sum > totalDue){
     return true;
     }
     else{
     return false;
     }
     }
     else{
     return 'please give us number type array';
     }
     }