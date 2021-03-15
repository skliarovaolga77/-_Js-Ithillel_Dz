import {User} from './user.js';

class Lector extends Users {
  constructor(info) {
    super();
    this.info = info;
  }

   renderCourses() {
    if(this.courses){
      //console.log(this.courses);
      let renderCourses = this.courses.map((course) => {
         if(course.score >= 0 && course.score <= 20 || course.studentsScore >= 0 && course.studentsScore <= 20){
          course.score =`excellent`;
          course.studentsScore =`excellent`;
        }else if(course.score > 20 && course.score <= 55 || course.studentsScore > 20 && course.studentsScore <= 55){
          course.score = `very-good`;
          course.studentsScore = `very-good`;
        }else if(course.score > 55 && course.score <= 85 || course.studentsScore > 55 && course.studentsScore <= 85){
          course.score = `good`;
          course.studentsScore = `good`;
        }else if(85 < course.score <= 100 || 85 < course.studentsScore <= 100){
          course.score = `satisfactory`;
          course.studentsScore = `satisfactory`;
        }
        
        return `<div class="user__courses--course lector">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Lector's score: <span class="${course.score}">${course.score}</span></p>
                    <p>Average student's score: <span class="${course.studentsScore}">${course.studentsScore}</span></p>
                </div>`;
      });
      return `<div class="user__courses admin--info">${renderCourses.join('')}</div>`;
    }
  }

}