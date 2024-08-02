// 1. using square bracket way:
// simple array

let myfriendname : string [] =["Sherry", "Aqsa" , "Iqra", "Ayesha"]; // array
       // length of array        1          2        3        4
       // index of array         0          1        2        3

       console.log(myfriendname[1]);
       console.log(myfriendname);
       console.log(myfriendname.length);
       


       // multi type array

let myfriendname1: (string | number)[] = ["Iqra" , "Maryam", 1, "Laiba", "Jiya"];
console.log(myfriendname1[0]);


// array of arrays.....
// Multidimensional Array.....

let matrix: number[][] = [ [1 , 2 , 3, 4],[3,4,4,7],[6,7,7,]];

// indexex                     0       ,      1     ,    2

console.log(matrix[0][0]);


// tuple Array.....    is me fix number hoty hen

let tuplearray: [number , string] = [1 , "Sherry" ];

console.log(tuplearray[0]);
console.log(tuplearray);

//////////////////////////////////////////////////

//2. using the generic;
// <>
let myfriendname2: Array<string> = ["Koji" , "Sherry" , "Iqra" , `Laiba`];

console.log(myfriendname2);
console.log(myfriendname2.reverse());







       
       
       