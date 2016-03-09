var Person = function(name) {

    var fullName = name;
    var arr = name.split(" ");
    var firstName = arr[0];
    var lastName = arr[1];

    this.getFirstName = function () {return firstName;};
    this.getLastName = function () {return lastName;};
    this.getFullName = function () {return firstName + " " + lastName;};
    this.setFirstName = function (x) {firstName = x;};
    this.setLastName = function (y) {lastName = y;};
    this.setFullName = function (z) {
      temp = z.split(" ");
      firstName = temp[0];
      lastName = temp[1];
    };
   
};

var bob = new Person('Bob Ross');
bob.getFullName();