// ---------------- Chapter 17-20 LOOPS --------------------

// Task # 1.Declare and initialize an empty multidimensional array.(Array of arrays)
            // var multiArray = [
            //     [],
            //     [],
            // ];
            // console.log(multiArray);


// Task # 2.. Declare and initialize a multidimensional array  representing the following matrix:
 /*         var matrix = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ];
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    document.write(matrix[i][j] + " ");
                }
                document.write("<br>");
            }
*/

// Task # 3. Write a program to print numeric counting from 1 to 10.
        // for(var i = 1; i <= 10; i++){
        //     document.write(i + "<br>");
        // }


// Task # 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.    

            // let userTable = +prompt("Enter the number for which you want to print the multiplication table" , "5");
            // let userLen = +prompt("Enter the length of the multiplication table:?" , "15");
            // for( let i = 1; i <= userLen; i++){
            //     document.write(userTable + "x"+ i + "=" + ( i * userTable ) + "<br>");
            // }


//Task # 5.Write a program to print items of the following array using for loop: fruits = ["apple”, “banana”, “mango”, “orange”,“strawberry”]

/*
        let fruits = [ "apple", "banana" , "mango" , "orange" , "strawberry"];
            for (let i = 0; i < fruits.length; i++){
                document.write(fruits[i] + "<br>");
            }
            document.write( "<br>" + "Element at index 0 " + fruits[0]  + "<br>");
            document.write("Element at index 1 " + fruits[1]  + "<br>");
            document.write("Element at index 2 " + fruits[2]  + "<br>");
            document.write("Element at index 3 " + fruits[3]  + "<br>");
            document.write("Element at index 4 " + fruits[4]  + "<br>");
     */  

//Task # 6. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
 
        // document.write("<br>COUNTING <br>");
        //         for (var i = 0; i <= 15 ; i++){
        //             document.write(i);
        //         }

//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
               
            // document.write("<br>REVERSE COUNTING <br>");
            //         for (var j = 10; j > 0 ; j--){
            //         document.write(j);
            //     }

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

                // document.write("<br>EVEN NUMBERS<br>");
                //    for (let i = 2; i <=20 ; i+= 2){
                //       document.write(i);
                // }

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

                //     document.write("<br>ODD NUMBERS<br>");
                // let flag = true;
                //     for (let i = 1; i < 20 ; i++ ){
                //         if (flag){
                //             document.write(i);
                //         }
                //     flag = !flag; 
                //     }

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k , 20k

                //  document.write("<br>SERIES<br>");              
                // for ( let i = 2; i <= 20; i++){
                //     document.write(i + "K" );
                // }
                
    
// Task # 7.You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program to enable “search by user input” in an array.
 // After searching, prompt the user whether the given item is found in  the list or not.
/*
        let A2 = ["cake", "apple pie", "cookie", "chips", "patties"];
        let userOrder = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
        let flag = false;
        for(let i = 0; i < A2.length; i++) {
        if (userOrder.toLowerCase() === A2[i]) {
            flag = true;
            break;
        }
        }
        if (flag) {
        alert("It is on the list.");
        } else {
        alert("Not on the list.");
        }
 
 */

 // Task # 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]
/*
                  let $A = [24, 53, 78, 91, 12];  
                   console.log("Array items:" + $A);                
                   let large = Math.max(...$A);
                    console.log("Largest no:" + large);

*/

// Task # 9. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]
/*
            let A_ = [24, 53, 78, 91, 12];                  
                console.log("Array items:" + A_);                
                 let smallNo = A_[0];
            for ( let i = 1; i < A_.length; i++){
                    if (A_[i] < smallNo){
                        smallNo = A_[i];
                    }
            }
            console.log( "Smallest no:" + smallNo);
*/

 //Task # 10. Write a program to print multiples of 5 ranging 1 to 100. 

                //   document.write("<br> Multiples of 5 are:")
                //     for ( let i = 1; i <= 100; i ++){
                //         if (i % 5 === 0){
                //             document.write(i);
                //         }   
                //     }
