// ------------------------------------------ Chapter 26 to 30; -----------------------------------------------------------------------------

    // Q no.1; Write a program that takes a positive integer from user & display the following in your browser.
                // a. number
                // b. round off value of the number
                // c. floor value of the number
                // d. ceil value of the number

                const num = +prompt( "Enter a number. ","3.45214");
                console.log("Number:",num);
                console.log("Round off value:",Math.round(num) );
                console.log("floor value:", Math.floor(num) );
                console.log("ceil value:", Math.ceil(num) );

    // 2. Write a program that takes a negative floating point number from user & display the following in your browser.
                // a. number
                // b. round off value of the number
                // c. floor value of the number
                // d. ceil value of the number

                const num2 = +prompt("Enter a negative number " ,-2.673);
                console.log("Number:",num2);
                console.log("Round off value:", Math.round(num2));
                console.log("Floor value:",Math.floor(num2));
                console.log("Ceil value:", Math.ceil(num2));

    // 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

                console.log("Absolute value of", -4, "is", Math.abs(-4));
                 document.write("Absolutevalue of", -4, "is", Math.abs(-4));

    // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

                 console.log("Random dice value:",Math.floor(Math.random() *6 ) );
                 console.log("Random dice value:", Math.floor(Math.random()*5) );

                 document.write("Random dice value:",Math.floor(Math.random() *6 ) );
                document.write("<br>");
                document.write("Random dice value:", Math.floor(Math.random()*5) );
                 

    // 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

              document.write( Math.floor(Math.random()*5 ));
                document.write("<br>random coin value: Heads <br>");
                document.write(Math.floor(Math.random()*10 ));
                document.write("<br>random coin value: Tails <br>");
                 
    // 6. Write a program that shows a random number between 1 and 100 in your browser.
            
            console.log("random number between 1 & 100:", Math.floor(Math.random()*100));
            document.write("random number between 1 & 100:", Math.floor(Math.random()*100));

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
            //  a. 50         b. 50kgs
            // c. 50.2kgs    d. 50.2kilograms

            const userWeight = +prompt("Enter your weight", "50.2kgs"); 
            const parse = parseFloat(userWeight);
            document.write("The weight of user is", parse.toFixed(1), "kilograms");
     
// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
        
        const secretNum = Math.floor(Math.random() * 10) +1;
        const askUser = parseInt(prompt("Guess the secret number between 1 and 10:"));
        if (secretNum === askUser) {
            console.log("Congrats! You guessed it correctly.");
            document.write("Congratulations! You guessed the secret number.");
        }
        else{
            console.log("Wrong! Try again later.");
          document.write("Sorry, the secret number was " + secretNum + ". Try again!");
        }




