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

function percentageOfWorld1 (population) {
    const peopleWorld = 7900;
     const curentReturnPopul = population / peopleWorld * 100;    //todo : Prercentage of the 7900. 
     return curentReturnPopul;
     //! РОВНО >>>>>>>>  return (population / 7900) * 100;
}

const procentPopulation = percentageOfWorld1(1441);
console.log(Math.round(procentPopulation));

const procentPopulation1 = percentageOfWorld1(800);
console.log(Math.round(procentPopulation1));

const procentPopulation2 = percentageOfWorld1(141);
console.log(Math.round(procentPopulation2));



const percentOfWorld2 = function (population) { 
    return (population / 7900) * 100;
};

console.log(percentOfWorld2(1441));
console.log(percentOfWorld2(800));
const usa = percentOfWorld2(141);
console.log(usa);


const percentageOfWorld3 = (population) => population / 7900 * 100;

const percPortugal3 = percentageOfWorld3(10);
console.log(percentageOfWorld3(2000));
console.log(percPortugal3);