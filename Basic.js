// Book Array    
let BookStore = [['Book Id', 'Book Title', 'Author', 'Price', 'Quantity'],    
[001, 'Javascript is the best', 'Nour Almohammed', 666,41],    
[002, 'PNU Stars', 'Nour Almohammed', 333, 42]];    
 
// User Array    
let BookWoner = [['UserId', 'UserName', 'UserBalance'],    
                [1, 'Nour', 1000],    
                [2, 'Abdullah', 2000],  
                [3, 'Sedra', 0]];      
//  search function  
function search(Array,input){  
for(let i = 1 ;i < Array.length ;i++){    
for(let j = 0 ;j < Array[i].length ; j++){    
if(Array[i][j]== input){    
    // console.log(`full data abaut your book:${Array[i]}`);  
    return Array[i];   
}}}}  
 
function sell(input,id,Quantity){  
arr = search(BookStore,input);  
let price= arr[3] * Quantity;  
let bookQuantity=arr[4];  
arr1=search(BookWoner,id);  
let balance = arr1[2]; 
    if(bookQuantity > Quantity && price < balance){   
console.log(`billing info:  
Customer id ${arr1[0]}  
Book title: ${arr[1]}  
Price: ${price}`); }  
else if (price > balance){  
console.log("Your balance is not enough");}  
else if (Quantity>= bookQuantity){ console.log("The book isnot available");}}  
 
 
 
 
console.log(`full data abaut your book:`+ search(BookStore,001));  
sell(001,1,1);  
sell(001,1,66);
