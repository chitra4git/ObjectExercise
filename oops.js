//Video 3 in The Net Ninja - youtube Channel

var userOne= {
    email: "hi@gmail.com",
    name: 'hi',
    login(){  // creating method
        console.log(this.email,'has logged in');
    },
    logout(){
        console.log(this.email,'has logged out');
    }
}

console.log(userOne.name);

userOne.age = 25

userOne.name = 'hello';

console.log(userOne);

var userTwo= {
    email: "two@gmail.com",
    name: 'hitwo',
    login(){
        console.log(this.email,'two has logged in');
    },
    logout(){
        console.log(this.email,'two has logged out');
    }
}

var userThree= {
    email: "three@gmail.com",
    name: 'hithree',
    login(){
        console.log(this.email,'three has logged in');
    },
    logout(){
        console.log(this.email,'three has logged out');
    }
}

//CLASS 'created to avoid rewriting mannualy the repeated block -video 5

class User{
    constructor(email, name){  //creating a new empty object
        this.email = email;  //sets the value of this to be the new empty object
        this.name = name;
        this.score = 0
    }

    userLogin(){        //creating method in the class
        console.log(this.email,'this email one logged in');
        return this;  //called method chaining to call the method in one line
    }
    userLogout(){
        console.log(this.email,'this email one logged out');
        return this;
    }

    updateScore(){
        this.score++;  //each time we call score will increase by 1
        console.log(this.email, 'now the score is ',this.score);
        return this;


    }
}

var firstUser = new User('hi@gmail.com','hi'); // new keyward and set the property value
var secondUser = new User('hitwo@gmail.com','hitwo');

console.log(firstUser.name);
console.log(secondUser);

firstUser.userLogin();
secondUser.userLogout();
console.log(firstUser);

firstUser.userLogin().updateScore().userLogout().updateScore(); //this is method Chaining

//Class inhertance (inhertis (extends) the previous class)

class Admin extends User {
    deleteUser(user){
        users = users.filter(u =>{  //filtering the user
            return u.email != user.email;  //matching the email of the user and delete if matches
        })

    }

}

var admin = new Admin ('admin@gmail.com', 'adminAni');
var users = [firstUser,secondUser,admin];

admin.deleteUser(firstUser);    

console.log(users);

//Prototype method without class (befor the class model introduced in javascript)
//constructore under the hood, video 8

function Userwithoutclass (email,name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email,'has logged in');
    }
}

var firstUserHood = new Userwithoutclass('hihood1@gmail.com','hood one'); 
var secondUserHood = new Userwithoutclass('hihood2@gmail.com','hood two');

console.log(firstUserHood);
secondUserHood.login();









