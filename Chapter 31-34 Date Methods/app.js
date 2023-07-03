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
            const dateBack = new Date('December 31, 2020');
            document.write(dateBack); 













