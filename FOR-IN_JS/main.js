// for- in
var myInfo = {
    name: 'Hanh',
    age: 20,
    address: 'Ha Noi, Vn',
};
for(var key in myInfo) {
    console.log(key, myInfo[key]);
}
var language = [
    'javascript',
    'php',
    'ruby',
    'dart',
];
for(var key in language) {
    console.log(key, language[key]);
}
var chuoi = 'javascript';
for(var key in chuoi) {
    console.log(key, chuoi[key]);
}
function run(object) {
   var arr = [];
   for (var key in object) {
    arr.push('Thuộc tính '+ key +' có giá trị ' + object[key]);
   }
   return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));