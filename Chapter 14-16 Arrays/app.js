   //---------------------- Chap 15 -17 Arrays; Adding and removing elements ----------------//


//Task # 1; Declare an empty array using JS literal notation.

    // let studentsName = [];

//Task # 2; Declare an empty array using JS object notation.
    
    //  let  emptyArray = new Array();
     
//Task # 3. Declare and initialize a strings array.

    // let $tring = [ "I" , "am", "Farhana."] ;
    // document.write( "<b>String Array</b>" + $tring + "<br>");

//Task # 4 Declare and initialize a numbers array.

    // let numArray = [ 1, 20, 300, 4000, 50000];
    // document.write( "<b> Numbers Array </b>" + numArray + "<br>");

//Task # 5 Declare and initialize a boolean array.

    //  let boolean =[ true, false, true];
    //  document.write("<b> Boolean Array </b>" + boolean + "<br>");


//Task # 6 Declare and initialize a mixed array.

    // let mixed = [ 1, true, 2, "is not", false];
    // document.write("<b> Mixed Array</b>" + mixed + "<br>");

//Task # 7; Declare and Initialize an array and store qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD) 
// Show the listed qualifications in your browser.
/*
       let qualificationsInPk = ["SSC", "HSC",  "BCS"," BS", "BCOM", "MS", "M. Phil.", "PhD"];
        document.write(" <h1> Qualification </h1>" );

        document.write("<ol>");
        for (var i=0 ; i < qualificationsInPk.length ; i++ ) {
            document.write("<li>" + qualificationsInPk[i] + "</li>");
        }
        document.write("</ol>");
*/
                 
//Task # 8; Store 3 student names in an array.Take another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores & percentages of students.
   /*
      let students= ["Ayesha", "Duaa", "Farhana" ]; 
      let scores = [ 320, 230, 489]; totalMarks = 500;
      let percentage1 = ( scores[0] / totalMarks) * 100;
      let percentage2 = ( scores[1] / totalMarks) * 100;
      let percentage3 = ( scores[2] / totalMarks) * 100;
         document.write('Score of  '+students[0]+' is  '+scores[0]+' . Percentage: '+percentage1+' % '+'<br>');
        document.write('Score of  '+students[1]+' is  '+scores[1]+' . Percentage: '+percentage2+' % '+'<br>');
        document.write('Score of  '+students[2]+' is  '+scores[2]+' . Percentage: '+percentage3+' % '+'<br>');
   */
    // Or we can use Loop method also;
    /*  
          var studentPercentages = [];
            for (var i = 0; i < scores.length; i++) {
            var percentage = ( scores[i] / totalMarks) * 100;
            studentPercentages.push(percentage); }       
                    // Display scores and percentages
                    for (var i = 0; i < students.length; i++) {
                    document.write("Student Name: " + students[i] + "<br>");
                    document.write("Score: " + scores[i] + "<br>");
                    document.write("Percentage: " + studentPercentages[i] + "%<br><br>");
                    }
     */

//Task # 9;    
    //a. Ask the user what color she wants to add to the beginning & add that color to the beginning of the array.
        // let beforeColor = [" Purple" , " Blue" ];  
        // let usercolor = prompt( "What color you want to add to the beginning of Array?" , "Red");
        //   beforeColor.unshift(usercolor);
        // document.write( beforeColor);


    //b. Ask the user what color she wants to add to the end & add that color to the end of the array.
        // let _color = [" Blue", " Black" ];
        // let  userEndColor= prompt ( "What color you want to add to the end of Array? " , "Gray");
        //  _color.push(userEndColor) ;
        // document.write(_color);

    //c. Add two more color to the beginning of the array. Display the updated array in your browser.
            // let twoColors = [ "Red", "Pink", "Grey"];
            // document.write( "<h3> Colors before addition </h3>" + twoColors);
            // twoColors.unshift("Brown,Orange");
            // document.write( "<h3> Colors after addition </h3>" );
            // document.write(twoColors);


    //d. Delete the first color in the array. Display the updated array in your browser.
            // let firstColorDel = [" Blue", " Black" , " Pink"];
            // document.write( "<h3>Colors before <br></h3> " + firstColorDel + "<br>" );
            // firstColorDel.shift(); 
            // document.write( "<h3>Colors After Delete <br></h3>" );
            // document.write(firstColorDel);

    //e. Delete the last color in the array. Display the updated array in your browser.
            // let  lastColor= ["Red", " Blue", " Purple ", " Indigo" ]; 
            // document.write("<h3>Colors before lastone delete</h3><br>" + lastColor);
            // lastColor.pop;
            // document.write("<h3>Colors after deleting last one</h3>");
            // document.write(lastColor);

    //f. Ask the user at which index she wants to add a color & color name. Then add the color to desired 
    //position/index. Display the updated array in your browser.
            
            //      let _color = [" Blue", " Black" ];
            //     let userIndex = +prompt ( "Which index no you want to add your color ? ");    
            //    var userColorAdd = prompt( "Also tell me which Color?");
            //    _color.splice( userIndex, 0, userColorAdd);
            //     document.write("<h2>User Colors Array</h2>" + _color + "<br>");
        

    //g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined
    //position/index. Display the updated array in your browser.    
    
        //    let _color2 = [" Blue", " Black", "Red", " Purple ", " Indigo" ];
        //   index = +prompt(" At which index you want to delete color?" );
        //         var deleteCount = +prompt(" How many colors do you want to delete?");
        //     _color2.splice(index,deleteCount);
        //     document.write( "<h4><br> User deleted colors array:</h4>" + _color2 + "<br>");
            

// Task # 10. Write a program to store student scores in an array &  sort the array in ascending order.

        //   let studentScore = [320, 230, 480, 120]; 
        //     document.write("<h3>Scores of Students : " + studentScore + "</h3>");   
        //     document.write("<h3>Ordered Scores of Students : " + studentScore.sort() + "</h3>");


// Task # 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

        //    let citiesNames = [ "Karachi" , "Quetta" , " Peshawar", "Swat"," Izlo"]; 
        //    document.write( "<h4>CitiesList:" + citiesNames + "<br></h4>");
        //      let selectedCities = citiesNames.slice(2,5);
        //      document.write("<h4>Selectedcities List :" + selectedCities +"<br></h4>");

// Task # 12. Write a program to create a single string from mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];

            // var arrayCat = ["This",  "is","my", "cat"];
            // document.write("<br> Array:" + "<br>" + arrayCat + "<br>");
            //  var line = arrayCat.join(' ');
            //  document.write( " String :" + "<br>" + line);


// Task # 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out).


        // var devices = ["keyboard", "mouse", "printer", "monitor"];
        // var out;
        // document.write("Devices : " + devices + "<br>");
        // out = devices.shift();
        // document.write("Out" + "<br>" + out + "<br>");
        // out = devices.shift();
        // document.write("Out" + "<br>" + out + "<br>");
        // out = devices.shift();
        // document.write("Out" + "<br>" + out + "<br>");
        // out = devices.shift();
        // document.write("Out" + "<br>" + out + "<br>");


// Task # 14. Create a new array. Store values one by one in such a way  that you can access the values in reverse order. (Last In First Out)

            // var devices = ["keyboard", "mouse", "printer", "monitor"];
            // var reverseOrder = [];

            // for (var i = devices.length - 1; i >= 0; i--) {
            // reverseOrder.push( "OUT <br>"  + devices[i]);
            // }
            // document.write("Devices : " + devices + "<br>");
            // document.write("<ul>");
            // for (var j = 0; j < reverseOrder.length; j++) {
            // document.write("<li>" + reverseOrder[j] + "</li>");
            // }
            // document.write("</ul>");


// Task # 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method.
       
        // var phoneCompanies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        //     document.write('<select>');
        //     for (var i = 0; i < phoneCompanies.length; i++) {
        //     document.write('<option>' + phoneCompanies[i] + '</option>');
        //     }
        //     document.write('</select>');
        
        
