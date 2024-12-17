'use strict'

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
  
const calcAverage = function(arry){
    let sum =0;
    for (let i=0 ;i<arry.length ;i++){
        sum = sum +arry[i];
    }
    return sum/arry.length;
};
 
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  for(let i =0; i<bills.length; i++){

    tips.push((calcTip(bills[i])));

    totals.push(bills[i]+tips[i]);

  }
  const avg  =(calcAverage(totals));
  console.log(`The tips are as following : ${tips}`);
  console.log(`The total amount bill + tip : ${totals}`);
  console.log(`The average of the bill+tip : ${avg}`);
