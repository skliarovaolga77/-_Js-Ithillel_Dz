

//const ROLES
export const userTypes = {
  student: info => new Student(info),
  admin: info => new Admin(info),
  lector: info => new Lector(info)
}


// Users.getUsers('data.json');

import {User} from './user.js';
import {Student} from './user.js';
import {Admin} from './user.js';
import {Lector} from './user.js';

User.createUsers(users);