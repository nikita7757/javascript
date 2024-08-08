
/* PROMT THE USER TO ENTER THEIR FULL NAME. GENERATE USER NAME FOR THEM BASED ON I/P. START USER NAME 
WITH  @,FOLLOWED BY THEIR FULL NAME AND ENDING WITH THE FULLNAME LENGTH.*/

let fullname = prompt("Enter your full name");

let user_name = '@' + fullname + fullname.length;
console.log(user_name);
