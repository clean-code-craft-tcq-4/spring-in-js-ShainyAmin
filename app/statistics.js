// const numbers = process.argv.slice(2);
    //implement the computation of statistics here

 module.exports = {
    
     
      getStatistics
  }
  

function getStatistics(numbers) {
    var min = numbers[0];
    var max = numbers[0];
    var total = 0;
  if(numbers.length != 0) {
        numbers.forEach((ele) =>
     {
                    if(ele > max){
                        max = ele;
                         }
                        
                        
                    if(ele < min) {
                    min = ele;
                    }
                   
                   total += ele;
                    })

    }
    else {
        max = NaN;
        min = NaN;
        }
    
     var average = total/(numbers.length);
    if(average == 0)
        average = NaN;
   return {"min": min,
            "max": max,
            "average":average};

}


// function StatsAlerter(maxThreshold,alerters){
   
//         this.maxThreshold = maxThreshold;
//         this.alerters = alerters;
       
    
//          function checkAndAlert(numbers){
            
//              numbers.forEach((num) =>{
//              if( num > this.maxThreshold) {
//                 this.alerters[0].emailSent();
//                 this.alerters[1].ledGlows();
//              }
//              })
            
//         }
//     }




 
