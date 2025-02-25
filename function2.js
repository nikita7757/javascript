
/* CREATE A FUNCTION USING THE 'FUNCTION' KEYWORD THAT TAKES A STRING AS AN ARGUMENT
AND  RETURNS THE NUMBER OF VOVELS IN THE STRING */

const myfun = (str) =>{
    let count =0;
    for(let char of str){
        if(char ==='a'||char ==='e'||char ==='i'||char ==='o'||char ==='u'){
            count++;
        }
    }
    console.log('total vovels in the strings =',count);
}


