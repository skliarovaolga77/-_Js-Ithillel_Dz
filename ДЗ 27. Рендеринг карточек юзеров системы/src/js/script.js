export let users = [
	{
		type: 'student'
	},
	{
		type: 'admin'
	},
  {
		type: 'lector'
	}
];
// console.log(users);

//const ROLES
export const userTypes = {
  student: info => new Student(info),
  admin: info => new Admin(info),
  lector: info => new Lector(info)
}


import {Users} from './user.js';
import {Student} from './student.js';
import {Admin} from './admin.js';
import {Lector} from './lector.js';

Users.getUsers('data.json');