function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let months = 0;
    let secondMonth = false;
    let savedMoney = 0;
    let percents =  percentLossByMonth;

    function percentLoss(value){   
        return value - (value / 100 * percents);
    };

    function timeLeft(startOld, startNew, savedMoney ) {
         if(secondMonth){
           percents += ((0.5 * 10) / 10);
         };
     
        if(startOld + savedMoney >= startNew){
            savedMoney += startOld - startNew;
            return [months, Math.round(savedMoney)];
        };
       secondMonth = !secondMonth;
       months++;
       return timeLeft(percentLoss(startOld), percentLoss(startNew), savedMoney += savingperMonth);
    };
    return timeLeft(startPriceOld, startPriceNew, savedMoney);
  }

 let a = nbMonths(1500 ,2900 ,1000 ,1.5);
 console.log(a);
 
  