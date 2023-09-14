// cách khai báo
var milliom = 10000000;
var tien = 1e8;
var money = 4e8;
// Đối tượng Number
//Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript.
// 1.Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
console.log(Number.isFinite(2/0))
console.log(Number.isFinite(20/5))
// 2.Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
console.log(Number.isInteger(324324))
console.log(Number.isInteger(4.341221))
// 3.Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
console.log(Number.parseFloat('10')) 
console.log(Number.parseFloat('10.00'))
console.log(Number.parseFloat('238,21'))
console.log(Number.parseFloat('237.22')) 
// 4.Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
console.log(Number.parseInt('10'))
console.log(Number.parseInt('238,21'))
console.log(Number.parseInt('34 56 78'))
console.log(Number.parseInt('18 is my age'))
// 5. Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
var numberObject = 1234.56789;
console.log(numberObject.toFixed())
console.log(numberObject.toFixed(1))
console.log(numberObject.toFixed(5))
console.log(numberObject.toFixed(7))
// 6. Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
console.log((11).toString())
console.log((18).toString())
console.log((17.3).toString())

