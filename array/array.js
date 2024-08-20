// Iterate Over an Array  string and map using for…of Loop


let arr = [12,15,14,16];
let str = 'NIKITA';
const map =new Map([
    
        ["name","NIKITA"],
        ["salary", "125000"],
        ["location","PUNE"]
    ]);

for(let item of arr){
    console.log(item);
}
for(let char of str){
    console.log(char);
}
for(let [key, value] of map){
   console.log(`${key}: ${value}`);
   
}