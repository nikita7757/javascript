/* FOR A GIVER ARRAY OF NUMMBERS ,PRINT THE SQUARE OF EACH VALUE USING THE FOR EACH LOOP*/

let arr = [2,8,12,14,15];

arr.forEach(function square(val){
    val = val*val;
    console.log(val);
})