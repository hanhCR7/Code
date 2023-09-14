var date = 5;
if (date == 3){
  console.log('hôm nay là thứ 3!')
}
else if (date == 8) {
  console.log('hôm nay là chủ nhật!')
}
else {
 console.log('hôm nay là thứ không biết!')
}
function run(a) {
 
 if(a%15==0){
  return 3;
 }
 else if(a%5==0){
  return 2;
}
else if(a%3==0){
 return 1;
}
 
}




// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3