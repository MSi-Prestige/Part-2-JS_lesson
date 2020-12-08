"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
//              //!  If passTest = true -->> doing hasDriv = true and if hasDriv = true -->console.log .....
// if(hasDriversLicense) {
//     console.log("I can drive :) ");
// }

// console.log(hasDriversLicense);


// function fruitMashin(apple, orange) {
//     console.log(apple,orange);// 5 --- 8 
//     const result = (`${apple} apples + ${orange} orange = very good Juice ! `);
//     // console.log(result);
//     return result;                     //! in to function
// }

// fruitMashin(10, 8);          //!   RESUL PUT IN TO FUNCTION --> fruitMashin
// console.log(fruitMashin(15,8));
// const resultMashine = fruitMashin(5, 8);
// console.log(resultMashine);


// function describeCountry(county, population, capitalCity) {
//    return (`${county} has ${population} million people and capital city is ${capitalCity}`);
// }


// console.log(describeCountry("Finland", 6, "Helsinki"));  // без сохран в переменную

// const taskB = describeCountry("Latvija", 2, "Riga");
// const taskC = describeCountry("Lietuva", 3, "Vilnus");   // with SAFE variables 

// console.log(taskB);
// console.log(taskC);


// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     }

// const descPortugal = describeCountry('Portugal', 10,
// 'Lisbon');
// const descGermany = describeCountry('Germany', 83,
// 'Berlin');
// const descFinland = describeCountry('Finland', 6,
// 'Helsinki');
// console.log(descPortugal);
// console.log(descGermany);
// console.log(descFinland);



// Arrow functions          //! Так что это отлично подходит для простых однострочных функций.

//   const calcAge3 = birthYeah => 2037 - birthYeah;
//   const age3 = calcAge3(1991);
//   console.log(age3);

//   const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
//   };

//   const calcAge33 = () => console.log("hi"); //!  Arrow function without arguments.  
//   calcAge33(); //! call function

// function percentageOfWorld1 (population) {
//     const peopleWorld = 7900;
//      const curentReturnPopul = population / peopleWorld * 100;    //todo : Prercentage of the 7900. 
//      return curentReturnPopul;
//      //! РОВНО >>>>>>>>  return (population / 7900) * 100;
// }

// const procentPopulation = percentageOfWorld1(1441);
// console.log(Math.round(procentPopulation));

// const procentPopulation1 = percentageOfWorld1(800);
// console.log(Math.round(procentPopulation1));

// const procentPopulation2 = percentageOfWorld1(141);
// console.log(Math.round(procentPopulation2));



// const percentOfWorld2 = function (population) { 
//     return (population / 7900) * 100;
// };

// console.log(percentOfWorld2(1441));
// console.log(percentOfWorld2(800));
// const usa = percentOfWorld2(141);
// console.log(usa);


// const percentageOfWorld3 = (population) => population / 7900 * 100;

// const percPortugal3 = percentageOfWorld3(10);
// console.log(percentageOfWorld3(2000));
// console.log(percPortugal3);



//! -------------------------------------------------

// function fruitCompilator(fruits) {
//   return fruits * 2;
// }
// function fruitProcessor(apples, oranges) {
//   let vegetables = 10;
//   let applePieces = fruitCompilator(apples);  // start new function fruitCompilator
//   const orangePieces = fruitCompilator(oranges); // start new function fruitCompilator
//   applePieces = applePieces + vegetables;
//   if (applePieces > 15) {
//     const salt = 2;
//     applePieces = applePieces + salt;
//     console.log(applePieces);
//   } else {
//     applePieces = applePieces - orangePieces;
//     console.log(applePieces);
//   }
//   return `Juice with ${applePieces} pices apples and ${orangePieces} oranges.`;
// }
// console.log(fruitProcessor(3, 4));
// console.log(fruitCompilator);


// const ageOld = function (birthYeah) {
//   return 2037 - birthYeah;

// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const retirement = 65 - ageOld(birthYeah);
//   if ( retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return -1;
//   }

// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1973, 'Bob'));



// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const calcAverage2 = (a, b, c) => (a + b + c) / 3;
// const averagePoints = function (pointsA, pointsB, pointsC) {
//     return calcAverage(pointsA, pointsB, pointsC);
// };
// const averagePoints2 = function (pointsA, pointsB, pointsC) {
//    return calcAverage2(pointsA, pointsB, pointsC);
// };
// const finalAveragePointsDolp = averagePoints(85,54,41);
// const finalAveragePointsKoala = averagePoints(23,34,27);

// const checkWinner = function (finalAveragePointsDolp, finalAveragePointsKoala) {
//      if (finalAveragePointsDolp > finalAveragePointsKoala && finalAveragePointsDolp > finalAveragePointsKoala * 2) {
//        console.log(`Dolphin WINNER ${finalAveragePointsDolp} `);
// }else if (finalAveragePointsDolp < finalAveragePointsKoala && finalAveragePointsDolp * 2 < finalAveragePointsKoala ) {
//   console.log(`KOALA WINNER ${finalAveragePointsKoala}`);
// }else{
 
//   console.log("NO WINNER");
// }
// };
// // TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// checkWinner(finalAveragePointsDolp,finalAveragePointsKoala);

// console.log(finalAveragePointsDolp);
// console.log(finalAveragePointsKoala);
// console.log(calcAverage(1,2,3));


const calcAverage = (a, b, c) => (a + b + c) / 3;

     
let scoreDolphins = calcAverage(244, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function ( avgDolphins , avgKoalas) {
      if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin is WIN  (${avgDolphins} 🍷 vs. ${avgKoalas})`);
      }else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphin is WIN  (${avgKoalas} 🥇 vs. ${avgDolphins})`);
      }else {
        console.log("no team wins....");
      }
};

checkWinner(scoreDolphins,scoreKoalas);
checkWinner(576, 111);   //!   kak primer 

scoreDolphins = calcAverage(4, 23, 71);
scoreKoalas = calcAverage(5, 154, 49);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);