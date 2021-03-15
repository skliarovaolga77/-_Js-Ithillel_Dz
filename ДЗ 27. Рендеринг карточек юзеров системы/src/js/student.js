import {Users} from './user.js';

export class Student extends Users {
  constructor(info) {
    super();
    this.info = info;
  }

  renderCourses() {
    if(this.courses){
      console.log(this.courses);
      let renderCourses = this.courses.map((course) => {

        if(course.mark >= 0 && course.mark <= 20){
          course.mark =`excellent`;
        }else if(course.mark > 20 && course.mark <55){
          course.mark = `very-good`;
        }else if(course.mark > 55 && course.mark <= 85){
          course.mark = `good`;
        }else if(85 < course.mark <= 100){
          course.mark = `satisfactory`;
        }
      
        return `<p class="user__courses--course student">
                    ${course.title} <span class="${course.mark}">${course.mark}</span>
                </p>`;
      });
      return `<div class="user__courses">${renderCourses.join('')}</div>`;
    }
  }

}