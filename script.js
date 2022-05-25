// Write a “person” class to hold all the details.

// class Person { 
//     constructor (FirstName, SecondName, Age, Gender, Location) { 
//     this.FirstName = FirstName;
//     this.SecondName = SecondName;
//     this.Age = Age;
//     this.Gender = Gender;
//     this.Location = Location;
// }

// PersonInfo() {
//     return `
//     FirstName : ${this.FirstName}
//     SecondName : ${this.SecondName}
//     Age : ${this.Age}
//     Gender : ${this.Gender}
//     Location : ${this.Location}`;
// }
// }

// var Person1 = new Person("Pradeep", "Raj", "25", "Male", "India");
// console.log(Person1.PersonInfo());


// Class - Movie

class Movie {
    constructor (Title, Studio, Rating) {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating;
    }
    
    getPG() {
        return `
        Title : ${this.Title}
        Studio : ${this.Studio}
        Rating : ${this.Rating}`;
    }
}

var Movie1 = new Movie ("Casino Royale", "Eon Productions", "PG­13");
console.log(Movie1.getPG());

// Uber

class Uber {
    constructor (Name, StartingPoint, EndPoint, Distance, ChargeperKm, BillFare) {
        this.Name = Name;
        this.StartingPoint = StartingPoint;
        this.EndPoint = EndPoint;
        this.Distance = Distance;
        this.ChargeperKm = ChargeperKm;
        this.BillFare = (Distance * ChargeperKm);

    }

    getFare () {
        return `
        Name : ${this.Name}
        StartingPoint = ${this.StartingPoint}
        EndPoint = ${this.EndPoint};
        Distance = ${this.Distance};
        ChargeperKm = ${this.ChargeperKm};
        BillFare = ${this.Distance * this.ChargeperKm}`;
    }
}

var Uber1 = new Uber ("Pradeep", "Chennai", "Bangalore", "750", "22.5");
console.log(Uber1.getFare());