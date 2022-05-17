 module.exports = {  StatsAlerter: StatsAlerter }
var EmailAlert  = require("./emailAlert");
var LEDAlert   = require("./ledAlert");

function StatsAlerter(maxThreshold,alerters){
   
        this.maxThreshold = maxThreshold;
        this.alerters = alerters;
       
    
          this.checkAndAlert = function(numbers){
            
             numbers.forEach((num) =>{
             if( num > this.maxThreshold) {
                this.alerters[0].emailSent = true;
                this.alerters[1].ledGlows = true;
             }
             })
            
        }
    }
