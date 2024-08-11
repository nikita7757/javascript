/* CREATE AN ARRAY TO STORE COMPANIES -> bloomberg', 'microsoft', 'uber','google','ibm','netflix'
A. REMOVE THE FIRST COMPANY FROM ARRAY
B. REMOVE UVER AND ADD OLA IN ITS PLACE
C. ADD AMAZON AT TH END*/


let companies = ['bloomberg', 'microsoft', 'uber','google','ibm','netflix'];
console.log(companies);

companies.splice(2,1,'ola');
console.log(companies);

 companies.shift();
 console.log(companies);

companies.push('amazon');
console.log(companies);