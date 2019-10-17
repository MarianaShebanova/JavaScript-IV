// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age; 
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function (element) {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);        
    }
}

class ProjectManagers extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37
});


const bob = new Instructor({
    name: 'Jek',
    location: 'Bedrock',
    age: 37,
    previousBackground: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jack = new Student({
    name: "Jek",
    location: "Bedrock",
    age: 37,
    favLanguage: "JavaScript",
    className: "Front-end",
    favSubjects: ["Don't forget the homies", "Aga"]
});

const lola = new ProjectManagers({
    name: 'Lola',
    location: 'Bedrock',
    age: 37,
    previousBackground: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: "gread",
    favInstructor: "Jack"
});

fred.speak();

bob.demo("string");
bob.speak();
bob.grade(jack, "String");

jack.speak();
jack.listsSubjects();
jack.PRAssignment("subject");
jack.sprintChallenge("subject");

lola.demo("string");
lola.speak();
lola.grade(jack, "string");
lola.standUp("chanel");
lola.debugsCode(jack, "subject");



