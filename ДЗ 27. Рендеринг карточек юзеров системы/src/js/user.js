import {users,userTypes} from './script.js';

export class Users {
  constructor(roles, gradations) {
    this.info = {
      roles: roles,
      gradations: gradations
    }
  }

  //забрали данные 
  static async getUsers(file) {
    //делаем запрос на получение файла
    let request = await fetch(file),
      //ответ получим в response
      data = await request.json();

    Users.createUsers(data);
  }

  //сделали новый массив с roles и gradation объеденили в info
  static async createUsers(data) {
    //весь массив data.json
    console.log(data);
    //новый массив
    let users = new Users(data.roles, data.gradation);
    users.users = data.users;

    console.log(users);
    //сделали новый массив с roles и gradation объеденили в info
    users.createSingleUser();
  }

  //сделали новый массив, напр Studend{info;..  name:.. age: .. и т д}
  //и передали его в Render
  createSingleUser() {
    //новый массив с roles и gradation объеденили в info
    // console.log(this);
    let allUsers = this,
      //массив всех users
      users = allUsers.users;
    // console.log(users);
    // console.log(allUsers.info);

    for (let key in users) {
      let currentUser = users[key];
      // console.log(currentUser);

      let currentUserWithClass = userTypes[currentUser.role] && userTypes[currentUser.role](allUsers.info);
      // console.log(currentUserWithClass);

      for (let key in currentUser) {
        currentUserWithClass[key] = currentUser[key];
      }
      // console.log(currentUserWithClass);
      currentUserWithClass.renderUser();
    }
  }

  renderUser() {
    let user = this;
    console.log(user);
    let users = document.querySelector('.users');
    let userDiv = document.createElement('div');

    userDiv.classList.add('user');
    userDiv.innerHTML = `<div class="user__info">
                                <div class="user__info--data">
                                    <img src="${user.img}" alt="${user.name}" height="50">
                                    <div class="user__naming">
                                        <p>Name: <b>${user.name}</b></p>
                                        <p>Age: <b>${user.age}</b></p>
                                    </div>
                                </div>
                                <div class="user__info--role ${user.role}">
                                    <img src="${user.info.roles[user.role]}" alt="${user.role}" height="25">
                                    <p>${user.role}</p>
                                </div>
                          	</div>
                          	${user.renderCourses()}
                          	`;
    users.append(userDiv);
  }

  renderCourses() {
    let courses = [];
    if (this.courses) {
      console.log(this.courses);
      courses = this.courses.map((course) => {
        let title = course.title;
        console.log(title);
        
      });
    }
  }

  // renderGradation(){
  //   if(this.courses){
  //    let gradation = [[0,20],[20,55],[55,85],[85,100]];
  //     for(let key in gradation){}
  //   }
  // }
  
  
}