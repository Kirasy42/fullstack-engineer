import {users} from "./data.js";

function index(){
    for (const user of users){
        console.log(`Name: ${user.name}, Age: ${user.age}, Married: ${user.isMarried}`);
    }
}

export {index};