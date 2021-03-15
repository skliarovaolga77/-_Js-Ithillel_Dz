import {User} from './user.js';

class Admin extends Users {
  constructor(info) {
    super();
    this.info = info;
  }

  renderCourses() {
    if(this.courses){
      //console.log(this.courses);
      let renderCourses = this.courses.map((course) => {
        if(course.score >= 0 && course.score <= 20){
          course.score =`excellent`;
        }else if(course.score > 20 && course.score <= 55){
          course.score = `very-good`;
        }else if(course.score > 55 && course.score <= 85){
          course.score = `good`;
        }else if(85 < course.score <= 100){
          course.score = `satisfactory`;
        }
        return `<div class="user__courses--course admin">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Admin's score: <span class="${course.score}">${course.score}</span></p>
                    <p>Lector: <b>${course.lector}</b></p>
                </div>`;
      });
      return `<div class="user__courses admin--info">${renderCourses.join('')}</div>`;
    }
  }
}