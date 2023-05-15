//Q : 1;
  var num =  5;
  var num1 = num + 5;
  var resultNum=  num1;
document.write("Sum of " + num + " and " + num1 + " is " + resultNum );


  //Q : 2;
  //Subtraction ;
  // let resultSubtract= 10 - num;
  // document.write( "<br> Subtraction Result is: " + resultSubtract);

//Multiplication;
  // let resultMultiple = 5 * num;
  // document.write(" <br> Multiplication result is:" + resultMultiple );

//Division;
  // var resultDivision = 10 / 3;
  //  document.write(" <br> Division result is:" + resultDivision);

//Modulus;
  // var resultRemainder= 5 % 10;
  // document.write(" <br> Modulus result is:" + resultRemainder);


//Q : 3;
  //a)
  // var city;
  // console.log(city); 
  //b)
  // document.write ("<br> Value after variable declaration is " + city +  "<br>"  );
//c)
//  let initial= 4;
//  console.log(initial);
// //d)
//  document.write( "<br> Initial value: "+ initial + "<br>");
// //e)
//  var increase = 5;
//  console.log( ++increase);
// // //f)
// var increment = ++increase;
//  document.write( "Value after increment is : "+ increment  + "<br>") ;
// g)
//   var add = 5+7;
//   console.log(add);
// //h)
// document.write("Value after addition is  " + add + "<br>");
//i)
  // var decrease= 5;
  // console.log(--decrease);
//j)
//   var decrement = --decrease;
//   document.write("Value after decrement is " + decrement + "<br>"); 
// //k)
  // var remainder= initial % 3;
  // document.write("The remainder is " + remainder );


//Q : 4;
var costOf1 = 600 ;
 var costOf5 = costOf1 * 5 ;
document.write("<br> Total cost to buy 5 Tickets to a movie is " + costOf5 + "PKR <br>" + "<br>") ;

//Q : 5 table ;
  let tableNum = 10;
     for  ( let i = 1; i < 11; i++){
      document.write( tableNum  + "x " + i + "=" + tableNum * i + "<br>" );
      }  


//Q : 6 temperature;
  var tempCelcius = 25; tempFahrenheit= 70;
 
   document.write("<h4>" + tempCelcius + "&#8451; is " + ((tempCelcius * 9/5) + 32) + "&#8457;</h4>");

   document.write("<h3>" + tempFahrenheit + "&#8457; is " + ((tempFahrenheit -32) * 5/9) + "&#8451;</h3>");



 //Q: 7 
  document.write("<h1> Shopping Cart </h1>");
  //   let item1 = 650;
  //   let quantity1 = 3;
  //   let totalItem1 = item1 * quantity1; 
  //   let item2 = 100;
  //   let quantity2 = 7;
  //   let totalItem2 = item2 * quantity2;
  //   let charges = 100;
  //   let totalCost= totalItem1 + totalItem2 + charges;
  // document.write("<br> Price of item 1 is " + item1 +
  //   " <br> Quantity of item 1 is " + quantity1 + 
  //   " <br> Price of item 2 is" + item2 +
  //   " <br> Quantity of item 2 is " + quantity2 +
  //   " <br> Shipping Charges" + charges );

  // document.write( "<br> <br> Total cost of your order is " + totalCost  );

//Q :8 ;
 let totalMarks = 550;
 let obtainMarks = 445;
 let percent = obtainMarks / totalMarks ;
   document.write("<h1> MarkSheet </h1> " );
   document.write ( "Total marks: " + totalMarks + "<br> Marks Obtained: " + obtainMarks + 
          "<br> Percentage: " + percent); 


//Q: 9;
   document.write("<h1> Currency in PKR </h1>");

    var dollar = 104.80 ;
    var riyal = 28 ;
    var totalCurrency = (dollar * 10 ) + ( riyal * 25 );
    document.write( " Toal Currency in PKR: " + totalCurrency );

//Q:10; Arithmetic;
    var number = 6 + 5 * 10 / 2  ;
    console.log(number);
    
 // Q: 11; Age Calculator;
    document.write("<h1> Age Calculator </h1>");

    let currentYear = 2023;
    let birthYear = 1995 ;
    let calulate =  currentYear -  birthYear;
    document.write ( " Current year: " + currentYear + "<br> Birth Year "+ birthYear +
    "<br>Your Age is: " +  calulate);

//Q: 12; Geometrizer;
    document.write("<h1>The Geometrizer</h1>");
    var radius = 20;
    document.write("Radius of a circle : " + radius + "<br>");
    document.write("The circumference is : " + (2 * 3.142 * radius) + "<br>");
    document.write("The area is : " + 3.142 * (radius * radius) );


// Q:13; 
    document.write("<h1> LifeTime Supply Calulator </h1>");

    var favSnack = " <b>Ramyeon Noodles 라면 </b>";  currentAge = 25;
    var maximumAge = 60;  perDay = 2 ;
    var remainingYears = maximumAge - currentAge;
    var totalSnacks = remainingYears * 365 * perDay;
     document.write("Favourite Snack" + favSnack + "<br> Current Age  " + currentAge + 
    "<br> Maximum Age" + maximumAge + "<br> Estimated amount per day " + perDay);

       document.write("<br> You will need " + totalSnacks + favSnack  + 
         " to last you until the ripe old age of " + maximumAge );

  



    
  
  




