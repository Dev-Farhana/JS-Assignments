// ------------------------ Chapter 21 to 25; ---------------- 

    // Q no.1; Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

       /*       let user1 =  prompt( "Enter your First Name! ", "Hanaa");
                let user2 = prompt("Enter your Last Name! " , " Omar ");
                let fullName = user1 + user2 ;
                console.log( "Hello Here!" + fullName );
                document.write( "Hello Here!" + fullName );
         */
 
    //Q no.2  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
        
       /*         let userFavMob = " Samsung Galaxy S6 Edge Plus";
                console.log("My Fav Mobile is: " + userFavMob );
                console.log("The length of String: " + userFavMob.length );
                document.write("My Fav Mobile is: " + userFavMob );
                document.write("The length of String: " + userFavMob.length );
       */
        
    //Q no.3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

                // let word = "Pakistani";
                // console.log(" Sting: ".concat(word));
                // console.log(" Index of 'n': " + word.indexOf('n') );
                

    //Q no.4 Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
        
                // let letter = "Hello World" ;
                // console.log("String: " + letter );
                // console.log("Last index of 'l': " + letter.lastIndexOf('l') ) ;

    // Q no.5 Write a program to find the character at 3rd index in the word “Pakistani” and display the resut in your browser.

                // let $word = "Pakistani" ;
                // console.log("String: ".concat($word));
                // console.log("Character at index 3: " + $word.charAt(3) );

    // Q no.6  Repeat Q1 using string concat() method.

        /*       let user_1 =  prompt( "Enter your First Name! ", "Hanaa");
                let user_2 = prompt("Enter your Last Name! " , " Omar ");
                let fullName = user_1 + user_2 ;
                console.log( "Hello Here!".concat(fullName) );
                document.write( "Hello Here!".concat(fullName) );
         */
    
    // Q no.7 Write a program to replace the “Hyder” to “Islam” in the  word “Hyderabad” and display the result in your browser.

                // let word3 = "Hyderabad";
                // let wordReplace = "Islam";
                // console.log("City: ".concat(word3));
                // console.log("After Replacement: " + word3.replace("Hyder", "Islam") );
            
    // Q no.8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

                // var message = "Ali and Sami are best friends. They play cricket and football together.";
                // console.log(message.replace(/and/g, "&"));

    // Q no.9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

            //     let strValue = "472";
            //  console.log("Value: " + strValue);
            //  console.log("Type: " + typeof strValue);
            //  let numValue = Number(strValue);
            //  console.log("Value: " + numValue);
            //  console.log("Type: " + typeof numValue );

    // Q no.10 Write a program that takes user input. Convert and show the input in capital letters.

                // let user$ = "peanuts";
                // console.log("User Input: ".concat(user$));
                // console.log("Upper case: " + user$.toUpperCase() ) ;

    //Q no.11 Write a program that takes user input. Convert and show the input in title case.
                // let user_ = "javascript";
                // console.log("User input: ".concat(user_));
                // console.log("Title case: " + user_.toUpperCase() );

    //Q no.12 Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

                // var num = 35.36;
                // var numdot = num.toString().replace(".","");
                // console.log("Number: " + num);
                // console.log("Result: " + numdot);

   //Q no.13 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@.

        /*
            let username = prompt( "Enter a username.","cm@d");             
             if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!') ) {
                alert("Please enter a valid username without special symbols [@, ., !]");
                } else {
                console.log("Username: " + username);
                }
        */              

    //Q no.14 You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 
      
        /*     
                let A = [ "cake", "apple pie", "cookie", "chips", "patties"];
                let search =  prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?") ;
                search = search.toLowerCase();
                let flag = A.includes(search);
                if ( flag ) {
                    document.write( search + " is available at index " + A.indexOf(search) + " in our bakery" );
                    console.log(search + " is available at index " + A.indexOf(search) + " in our bakery" );
                }
                else {
                    document.write("We are Sorry" + search +  " is not available in our bakery.")
                    console.log(" We are Sorry" + search +  " is not available in our bakery.");
                }
        */    

    //Q no.15 Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers, b. It should not start with a number, c. It must at least 6 characters long.If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

           /*    
                   let password = prompt("Enter a password:", "123cmad");
                 let charFirst = password.charCodeAt(0);
                 let containsOnly = /[a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]/.test(password);
                 let atLeastSixChar = password.length >= 6;

                    if (containsOnly && charFirst >= 65 && charFirst <= 122 && atLeastSixChar) {
                    console.log("Valid password");
                    document.write("Valid password");
                 } else {
                    console.log("Password cannot begin with a number");
                    console.log(" Please enter a valid password");
                   
                    document.write("Password cannot begin with a number");
                    document.write(" Please enter a valid password");
                }
            */
    
    //Q no.16 Write a program to convert the following string to an array using string split method. var university=“University of Karachi”; Display the elements of array in your browser.
         /*   
            var university = "University Of Karachi"; 
            for ( var i = 0 ; i < university.length ; i++) {
                console.log(university[i] );
                document.write(university[i] +"<br>" );
            }
        */

    //Q no.17 Write a program to display the last character of a user input.

                    // let lastWord = "Pakistan";
                    // console.log( `User input: ${lastWord}` );
                    // console.log(`Last Character of input: ${lastWord.slice(-1)}` ); 

    //Q no.18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

        /*        
           var paraText = "The quick brown fox jumps over the lazy dog";
                let counter = 0;
                for (var i = 0; i < paraText.length; i++) {
                    if (paraText.substring(i, i + 3).toLowerCase() === "the") {
                        counter += 1;
                    }
                }
                console.log("Text:" + paraText);
                console.log(`There are ${counter} occurrence(s) of word 'the' ` );
                
        */
