// condition ? true_value : false_value;
/* Trong đó condition là biểu thức điều kiện, 
true_value là giá trị trả về khi điều kiện đúng 
và false_value là giá trị trả về khi điều kiện sai. */
var course = {
    name: 'Javascript',
    coin: 250
}
var result = course.coin > 0 ? `${course.coin} coin` : 'Miễn phí'
console.log(result);
var number = 100
var currency = (number % 2 == 0) ? 'Số chẵn' : 'Số lẻ'
console.log(currency)
// Làm bài
function getCanVoteMessage(age){
    return (age >= 18) ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}
// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'