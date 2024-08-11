/* given an array  with marks  [85,97,44,37,76,60] . find average marks of the entire class*/


 let marks = [85,97,44,37,76,60];

 let sum = 0;

 for(let value of marks){
   sum = sum + value;
 }

  let avg = sum/marks.length;
  console.log('average marks of class  =  ${avg}');
