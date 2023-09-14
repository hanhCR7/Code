// LAM VEC VOI CHUOI
//1. lENGTH : DO DO DA CUA CHUOI
var myString = 'KEYWORLD JS STRING METHOD JS JS JS JS'
console.log(myString.length)
//2. Find index: tìm kí tự trong chuỗi
var myString = 'KEYWORLD JS STRING METHOD'
console.log(myString.indexOf('WORLD'))
//console.log(myString.lastIndexOf('WORLD'))
console.log(myString.search('JS'))
//3. cut string: cắt chuỗi
var myString = 'KEYWORLD JS STRING METHOD'
console.log(myString.slice(-6))
//4. Replace
var myString = 'KEYWORLD JS STRING METHOD JS JS JS JS'
console.log(myString.replace(/JS/g,'JAVASCRIPT'))
//5. Viết hoa tấ cả các chữ có trong chuỗi
var myString = 'tôi yêu em từ kiếp trước!'
console.log(myString.toUpperCase())
//6. viết thường tất cả các chữ có trong chuỗi
var myString = 'KEYWORLD JS STRING METHOD'
console.log(myString.toLowerCase())
//7. Trim(): Trả về một chuỗi mới với các khoảng trắng đầu và cuối chuỗi đã bị loại bỏ.
var myString = '     KEYWORLD JS STRING METHOD       '
console.log(myString.trim())
//8.Split(): Tách một chuỗi thành một mảng các chuỗi con dựa trên bộ phân cách được chỉ định.
var chuoi = 'C#,C++,JS,PHP'
console.log(chuoi.split(','))
//9.charAt(index): Trả về ký tự ở vị trí chỉ định trong chuỗi.
var myString = 'KEYWORLD JS STRING METHOD'
console.log(myString.charAt(15))
console.log(myString[1])
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
 return str.split(', ');
}
 
// Expected results
console.log(strToArray(coursesStr)) 