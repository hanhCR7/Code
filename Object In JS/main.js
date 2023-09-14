//1. khởi tạo 1 object
var emailKey = 'email';
var myInfo = {
 name: 'Hanh Do',
 age: 20,
 address: 'Ha Noi, VN',
 [emailKey]: 'hanhdo@gmail.com',
 getName: function(){
  return this.name;
 }
};
// Function --> phương thức/ method
// others --> thuộc tính/ property


//myInfo.email = 'hanhdo@gmail.com'
//var myKey = 'address';
console.log(myInfo);
console.log(myInfo.getName());
//console.log(myInfo[myKey]);
// Object Constructor : Xây dựng đối tượng
function User(firstName, lastName, avatar){
 this.firstName = firstName;
 this.lastName = lastName;
 this.avatar = avatar;
 this.getFullName = function(){
   return `${this.firstName} ${this.lastName}`; 
 }
}
// khởi tạo Constructor 
var author = new User('Hanh','Do','avatar');
var user = new User('Hanh','Tran','avatar');

console.log(author.getFullName());
console.log(user.getFullName())

//Object prototype
//Prototype là một đối tượng chứa các thuộc tính và phương thức mà các đối tượng khác có thể kế thừa từ nó
function User1(firstName, lastName, avatar){ 
 this.firstName = firstName;
 this.lastName = lastName;
 this.avatar = avatar;
 this.getFullName = function(){
   return `${this.firstName} ${this.lastName}`; 
 }
}
User1.prototype.className = 'D1';
User1.prototype.getClassName = function(){
 return this.className;
}
var user1 = new User1('Hanh','Do','avatar');
var user2 = new User1('Hanh','Tran','avatar');
console.log(user1.className);
console.log(user2.getClassName());