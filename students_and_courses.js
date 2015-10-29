var Student = function(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
};

Student.prototype.name = function() { return this.fname + " " + this.lname };
Student.prototype.hasConflict = function(course) {
  return this.courses.some(function(course2) {
    return course2.conflictsWith(course);
  });
}
Student.prototype.enroll = function(course) {

  if (this.hasConflict(course))
    throw "Can't register for conflicting course";


  if (this.courses.indexOf(course) === -1){
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function() {
  var course_count = {};

  this.courses.forEach(function(course) {

    course_count[course.dept] = (course_count[course.dept] || 0);
    course_count[course.dept]+= course.numCredits;
  });
  return course_count;
};

var Course = function(name, dept, numCredits, days, timeBlock){
  this.name = name;
  this.dept = dept;
  this.numCredits = numCredits;
  this.students = [];
  this.days = days;
  this.timeBlock = timeBlock;
};

Course.prototype.addStudent = function(student){
  this.students.push(student);
};

Course.prototype.conflictsWith = function(course) {
  var daysConflict = this.days.some(function(day) {
    return !(course.days.indexOf(day) === -1);
  });

  return (this.timeBlock === course.timeBlock) && daysConflict;
}
