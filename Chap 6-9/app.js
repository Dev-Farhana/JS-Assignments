     //Q: 1;            
            //    var a = 10;
            //     document.write("Result:<br> The value of a is:  " + a );
            //     document.write("<br>_____________________________________ <br>");

            //     var a1 = ++a ;
            //     document.write("The value of ++a is: " + a);
            //     document.write("<br> Now the value of a is " + a );
            //     document.write("<br>  <br>");                
                
            //     var a2 = a++;
            //     document.write("<br> The value of a++ is: " + a2);
            //     document.write("<br> Now the value of a is:  " + a); 
            //     document.write("<br>  <br>");

            //     var a= --a;
            //     document.write("The value of --a is: " + a);
            //     document.write("<br> Now the value of a is " + a );
            //     document.write("<br>  <br>");

            //     var a4 = a--;
            //     document.write("The value of a-- is: " + a4);
            //     document.write(" <br> Now the value of a is " + a);
            //     document.write("<br>  <br>");

        //2.  What will be the output in variables a, b & result after execution of the following script:
            //     var a = 2, b = 1;
            //     var result = --a - --b + ++b + b--;
            //     document.write( "a is " + a + "<br>" + " b is " + b + "<br>" + " result is " + result);
             
             // Explain the output at each stage:
             // --a;   It subtracts 1 from (a). So, a becomes 1.

             // --a - --b;  (--a) subtracts 1 from (a) (resulting in 0) and (--b) subtracts 1 from (b) 
             //(resulting in 0). So it becomes 0 - 0, which is 0. 
        
             // --a - --b + ++b; It becomes 0 - 0 + 1, which equals 1. (++b) adds 1 to b (resulting in 1). 

            // --a - --b + ++b + b--; In this final step, we have the post decrement operator (--) applied to b. 
             //The value of b (which is 1) in the above step, and then it is decremented by 1.
             // It becomes 0 - 0 + 1 + 1, which equals 2.
                  
        
        //Q:3  Take input a name from user & greet the user.
            //  var userName= prompt("What's your Beautiful Name?" );
            //  var userName= alert(" Welcome! Back " + userName + " ," +  "Good To SEE You!");
            

        //Q:5;Write a program to take input a number from user; table of 5 should be displayed by default; 
            //   var userinput= +prompt( 'Enter your numbr', "5")
            //    for ( var i = 1; i< 11 ; i++){
            //        document.write( userinput + "x" + i + "=" + userinput*i  + "<br>")
            //    }


        // Q:6 ; 
               //a: Take three subjects names from  user;
            //    var subjectName1 = prompt ( " Enter a subject Name 1" );
            //    var subjectName2 = prompt ( " Enter a subject Name 2" );
            //    var subjectName3 = prompt ( " Enter a subject Name 3" );

            //  b: Total marks for each subject;
            //  var totalMarks = 100;
            
            //  c: Take obtained marks for the first subject from the user;
                // var obtainMarksSubject1 = prompt("Enter obtained marks for " + subjectName1 + ":");

            //  d: Take obtained marks for the remaining 2 subjects;
                // var obtainMarksSubject2 = prompt("Enter obtained marks for " + subjectName2 + ":");
                // var obtainMarksSubject3 = prompt("Enter obtained marks for " + subjectName3 + ":");
        
            // e: Calculate total marks and percentage
                // var totalObtainedMarks = obtainMarksSubject1 + obtainMarksSubject2 + obtainMarksSubject3;
                // var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

                //     document.write("<b>Result</b> <hr>");
                //     document.write("<table>");
                //     document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
                //     document.write("<tr><td>" + subjectName1 + "</td><td>" + totalMarks + "</td><td>" + obtainMarksSubject1 + "</td></tr>");
                //     document.write("<tr><td>" + subjectName2 + "</td><td>" + totalMarks + "</td><td>" + obtainMarksSubject2 + "</td></tr>");
                //     document.write("<tr><td>" + subjectName3 + "</td><td>" + totalMarks + "</td><td>" + obtainMarksSubject3 + "</td></tr>");
                //     document.write("</table>");
                //     document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
                //     document.write("<p>Percentage: " + percentage + "%</p>");
