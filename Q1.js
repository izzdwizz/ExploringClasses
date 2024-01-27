
class Student{

  constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  static height = "6'0";
  static ethnicity = "African American";

  getGrade(){
    return this.grade
  } 

  setGrade(newGrade){
   return this.grade = newGrade
  }

  static setHeight(newHeight){
    return Student.height = newHeight
  }
  static getEthnicity(){
    return Student.ethnicity;
  }
}

//instantiating the class student
let student1 = new Student("Jack", 14, 9);

//for an instance of the class
console.log(student1, Student.height, Student.ethnicity)

//For private properties
console.log(Student.setHeight(`7'0`), Student.getEthnicity())
//Student { name: 'Jack', age: 14, grade: 9 } 6'0 African American
//7'0 African American
