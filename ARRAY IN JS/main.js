// Cách khởi tạo mảng
var language = ['Javascript', 'PHP', 'Ruby','C#'];
console.log(typeof language)
//var language = new Array();
console.log(Array.isArray(language))
//2 truy xuất mảng
// đo độ dài của mảng
console.log(language.length)
// lấy phần tử theo index
console.log(language[0])
console.log(language[1])
console.log(language[2])
console.log(language[3])
// LÀM VIỆC VỚI ARRAY
//1 ToString
var languages = ['Javascript', 'PHP', 'Ruby','C#'];
console.log(typeof languages.toString())
//2. join
console.log(languages.join(' '))
//3. pop: Xóa phần tử cuối cùng khỏi mảng và trả về phần tử đó.
console.log(languages.pop())
//4. push: Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
//console.log(languages.push('CSS','JAVA','HTML'))
console.log(languages)
//5. shift: Xóa phần tử đầu tiên khỏi mảng và trả về phần tử đó.
//console.log(languages.shift())
// 6. unshift:Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
console.log(languages.unshift('C++','Java'))
console.log(languages)
//7. splice: Thêm, xóa hoặc thay thế các phần tử trong mảng.
languages.splice(1,2,'Dart')
console.log(languages)
// 8. concat: Kết hợp hai hoặc nhiều mảng thành một mảng mới. 
var languages2 = ['HTML','CSS','Node JS'] 
console.log(languages2.concat(languages))
// 9. slice: Trả về một phần (cắt) của mảng từ vị trí bắt đầu đến vị trí kết thúc (không bao gồm vị trí kết thúc).
console.log(languages.slice(1,3))