// Math.PI
console.log(Math.PI);
// Math.round(): làm tròn số
var number = 5.5;
console.log(Math.round(number));
// Math.abs(): lấy giá trị tuyệt đối
console.log(Math.abs(-6));
//Math.ceil(): làm tròn lên lấy phần nguyên lớn nhất
console.log(Math.ceil(4.000000));
console.log(Math.ceil(4.0000001));
//Math.floor(): làm tròn xuống 
console.log(Math.floor(4.43));
//Math.radom(): lấy một số ngẫu nhiên từ 0 đến 1 (không bao gồm 1)
console.log(Math.random());
//tạo dãy số ngẫu nhiên có 6 chữ số
console.log(Math.floor(Math.random() * 1000000));
// ứng dụng
var random = Math.floor(Math.random() * 7);
var bonus = [
 '10 RP',
 '20 RP',
 '50 RP',
 '100 RP',
 '200 RP',
 '500 RP',
 '1000 RP',
];
console.log(bonus[random]);
//ứng dụng trong làm game
var random = Math.floor(Math.random() * 100);
if(random < 10){
 console.log('NÂNG CẤP THÀNH CÔNG!')
}
//Math.min() - Math.max(): tìm số nhỏ, lớn nhất
console.log(Math.min(3, 2, 4, 9, 1, -4));
console.log(Math.max(3, 2, 4, 9, 1, -4));