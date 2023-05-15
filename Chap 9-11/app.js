// Exercise # 1
        // var cityName = prompt("Please enter your city");

        // if (cityName == "Karachi"){
        //     alert("Welcome to city of lights");
        // }
        // else {
        //     alert("Welcome to city of " + cityName);
        // }

 // Exercise # 2;
        // var gender = prompt( " Enter your gender here ");
        // if (gender == "Male" ) {
        //     alert (" Good Morning Sir!");
        // } else if ( gender == "Female") {
        //     alert ( "Good Morning Ma'am! ")
        // }

  // Exercise # 3;
        // var signalColor = prompt("Please enter road traffic signal color");

        // if (signalColor == "red"){
        //     alert(" Must Stop.");
        // }
        // else if(signalColor == "yellow"){
        //     alert(" Ready to move.");
        // }
        // else if (signalColor == "green"){
        //     alert(" Move now.");
        // }

  // Exercise # 4;
       //var remainingFuel = prompt("Please enter remaining fuel in car (in litres)");

        // if (remainingFuel < 0.25) {
        //     console.log("Please refill the fuel in your car");
        // };

  // Exercise # 5; Run this script, & check whether alert message would be displayed or not. Record the outputs.
     
     //a.
        // var a = 4;
        //  if (++a === 5){
        //      alert("given condition for variable a is true");
        //     }; 
          // It is true;

     //b.
        //   var b = 82;
        //   if (b++ === 83){
        //     alert("given condition for variable b is true");
        //  };
        // It is not true;

     //c.
        //    var c = 12;
        //         if (c++ === 13){
        //         alert("condition 1 is true");
        //      }
        //        if (c === 13){
        //         alert("condition 2 is true");
        //     }
        //        if (++c < 14){
        //         alert("condition 3 is true");
        //     }
        //         if(c === 14){
        //         alert("condition 4 is true");
        //     };

        //     Only  Condition 2 and 4 are true;

     //d. 
        //   var materialCost = 20000;
        //   var laborCost = 2000;
        //   var totalCost = materialCost + laborCost;
        //       if (totalCost === laborCost + materialCost){
        //         alert("The cost equals");
        //      }
             // It is true;

     // e. 
            //  if (true){
            // alert("True");
            // }
            // if (false){
            // alert("False");
            // }
           // It is true;

    //f. 
        // if("car" < "cat"){
        // alert("car is smaller than cat");
        // }
    //    It is true;

  // Exercise # 6;Show the total marks, marks obtained, percentage, grade & remarks:
        // var marksObtainedSubject1 = +prompt("Please enter marks obtained for subject 1 (out of 100)");
        // var marksObtainedSubject2 = +prompt("Please enter marks obtained for subject 2 (out of 100)");
        // var marksObtainedSubject3 = +prompt("Please enter marks obtained for subject 3 (out of 100)");

        // let totalMarks = 300;

        // let percentage = ((marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) / totalMarks) * 100;

 
        // if (percentage >= 80){
        //     document.write("<h1>Marks Sheet</h1>\n\n");
        //     document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
        //     document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
        //     document.write("Percentage : " + percentage);
        //     document.write("<br> Grade : A-one");
        //     document.write("<h2>Remarks : Excellent</h2>");
        // }
        // else if(percentage >= 70){
        //     document.write("<h1>Marks Sheet</h1>\n\n");
        //     document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
        //     document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
        //     document.write("Percentage : " + percentage);
        //     document.write("<br> Grade : A");
        //     document.write("<h2>Remarks : Good</h2>\n");
        // }
        // else if(percentage >= 60){
        //     document.write("<h1>Marks Sheet</h1>\n\n");
        //     document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
        //     document.write("<h2>Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "</h2>\n");
        //     document.write("Percentage : " + percentage);
        //     document.write("\n Grade : B");
        //     document.write("<h2>Remarks : You need to improve</h2>\n");
        // }
        // else
        // {
        //     document.write("<h1>Marks Sheet</h1>\n\n");
        //     document.write("<h2>Total marks : " + totalMarks + "</h2>\n");
        //     document.write("Marks obtained : " + (marksObtainedSubject1 + marksObtainedSubject2 + marksObtainedSubject3) + "\n");
        //     document.write("Percentage : " + percentage);
        //     document.write("<br> Grade : Fail\n");
        //     document.write("<h2>Remarks : Sorry</h2>\n");
        // }
        

  // Exercise # 7; Guess game:            
            // var secretNum = 6;
            // var guessUser = +prompt( "Guess number from 1 to 10");
            // if (guessUser == secretNum) {
            //     alert( " Bingo! Correct answer");                
            // } 
            // else if((guessUser == secretNum - 1) || (guessUser == secretNum + 1) )
            // {
            //     alert("Close enough to the correct answer");
                
            // }
            // else
            // {
            //     alert(" Sorry! Incorrect");
            // }


  // Exercise # 8; Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
            // is divisible by 3.

            // var number = prompt("Enter a number:");
            // if (number % 3 === 0) {
            // alert (number + " is divisible by 3");
            // } else {
            // alert (number + " is not divisible by 3");
            // }


  // Exercise # 9; Whether the given input is an even number or an odd number.

        //   var number = prompt("Enter a number:");
        //         if (number % 2 === 0) {
        //         alert (number + " is an even number");
        //     } 
        //     else {
        //        alert (number + " is an odd number");
        //     }


  // Exercise # 10; Write a program that takes temperature as input and shows a message;
        
            // var temperature = prompt("Enter the temperature:");
            // if (temperature > 40) {
            // console.log("It is too hot outside.");
            // } else if (temperature > 30) {
            // console.log("The Weather today is Normal.");
            // } else if (temperature > 20) {
            // console.log("Today's Weather is cool.");
            // } else if (temperature > 10) {
            // console.log("OMG! Today's weather is so Cool.");
            // } else {
            // console.log("The temperature is below 10 degrees.");
            // }


  // Exercise # 11;
        // var firstNumber = prompt("Enter the first number:");
        // var secondNumber = prompt("Enter the second number:");
        // var operation = prompt("Enter the operation (+, -, *, /, %):");

        // var result;
        //         if (operation === "+") {
        //         result = firstNumber + secondNumber;
        //         }
        //              else if (operation === "-") {
        //              result = firstNumber - secondNumber;
        //              }
        //              else if (operation === "*") {
        //              result = firstNumber * secondNumber;
        //             }
        //             else if (operation === "/") {
        //             result = firstNumber / secondNumber;
        //             } 
        //             else if (operation === "%") {
        //             result = firstNumber % secondNumber;
        //             }
                    
        //         else {
        //         console.log("Invalid operation");
        //         }
        //          if (result !== undefined) {
        //         console.log("The result is: " + result);
        //         }



