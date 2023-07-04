// ------------------------------------- Chapter 31 to 34------------------------------------- 

    // Q no.1; Write a program that displays current date and time in your browser.
            document.write( new Date );
            document.write("<br>");

    // 2. Write a program that alerts the current month in words. For example December.

        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const d = new Date("12.2.2022");
        let month = months[d.getMonth()];
        document.write("Current Month: " ,month);
        document.write("<br>");

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

        const days =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
        const date2 = new Date();
        const day = days[date2.getDate( )+ 1];
        document.write("Today is ", day.slice(0,3));
         alert("Today is "+ day.slice(0,3));


    //  4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
        
        const msg = "It's Fun day";
        const today = new Date( );
        const dayss =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
        const $day = dayss[today.getDay( )];
        if ( $day === "Sunday" || $day === "Saturday"  ) {
            alert(msg); 
        }
        else{
            alert( "No Fun today");

        }

   // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”

          const dateToday = new Date();
          const d = dateToday.getDate();
          if ( d< 16 ){
              document.write("First Fifteen days of the month")
          } else{
              document.write("Last days of the month");
          }

  //    6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
            const currentDate = new Date();
            const min = currentDate.getTime();
            document.write('Current Date:', currentDate, "<br>");
            document.write('ELasped milliseconds since January 1,1970 :' ,  min ,'<br>');
            document.write("Elapsed minutes since January 1, 1970: ", min/(1000*60), "<br>");

//   7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
            const x = new Date();
            const hour =   x.getHours();
            if (hour < 12 ){
                alert( "It's Am")
            } 
            else {
                alert("It's Pm" )
            }

    //  8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
            const dateNew = new Date();
            const laterDate = new Date('December 31, 2020');
            document.write( 'Later'  , laterDate); 


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//  Note: 1st Ramadan was on June 18, 2015

            const ramzanDate = new Date("June 18, 2015");
            const date = new Date( );
            const milllisec = date.getTime() - ramzanDate.getTime() ;
            const daysPass = Math.floor(milllisec /(24 * 60 *60 *1000) ) ;
            document.write(daysPass , ' days have passed since Ist Ramadan,2015');


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
        document.write('<br>')
          
             const now = new Date();
            const referDate = new Date('Janurary 1, 2015');
            const difference = (now.getTime() - referDate.getTime() )/ 1000; 
            document.write('On reference date: ',now,',<br>' , difference , 'seconds had passed since beginning of 2015');

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
            document.write('<br>'); 
               let  today = new Date();
               let hourAgo = today.getHours();
                 hourAgo = hourAgo-1;
               document.write('current date:' , today,'<br>' );
               today.setHours(hourAgo);
               document.write('1 hour ago, it was ', today);
               document.write('<br>'); 


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
            document.write('<br>'); 
                    var currentDate = new Date();
                    var hundredYearsBack = currentDate.getFullYear() - 100;                
                    document.write("current date: " ,currentDate , "<br>");
                    currentDate.setFullYear(hundredYearsBack);
                    document.write("100 years back, it was " , currentDate);
                    document.write('<br>'); 

//  13 Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
          document.write('<br>'); 
            // const userAge = parseInt(prompt( "Please enter your age:") );
                    const currentYear = new Date().getFullYear();
                    const birthYear = currentYear - userAge ;
                    document.write('Your age is ' , userAge , '<br>', 'Your Birth Year is', birthYear);

//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
//  Display the following fields: a. Customer Name b. Current Month  c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date)
// Where, // Net Amount Payable (within Due Date) = Number of units * Charges per unit // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

        document.write('<br>'); 

        document.write('<h3>  K-Electric Bill </h3>' );
        const nameUser = " Farhana"; today= new Date( ) ;
        const month = today.toLocaleString('default', { month: 'long' });
         document.write('Customer Name:',nameUser ,'<br>','Current Month: ' ,month ,'<br>' );
         const units = 410 ; perUnit = 16 ;
        document.write('Number of units:',units ,'<br>' ,'Charges per unit:',perUnit ,'<br>');
        const netAmount = units * perUnit; lastCharge = 350;
        document.write('Net Amount Payable (within Due Date):', netAmount ,'<br>' ,'Late Payment Surcharge:',lastCharge,'<br>');
       const afterDue = netAmount + lastCharge;
        document.write( 'Gross Amount Payable (after Due Date):', afterDue );




    













