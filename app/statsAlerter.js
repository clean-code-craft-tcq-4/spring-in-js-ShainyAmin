 module.exports = {  StatsAlerter: StatsAlerter }

function StatsAlerter(maxThreshold,alerters){
   
        this.maxThreshold = maxThreshold;
        this.alerters = alerters;
       
    
         function checkAndAlert(numbers){
            
             numbers.forEach((num) =>{
             if( num > this.maxThreshold) {
                this.alerters[0].emailSent();
                this.alerters[1].ledGlows();
             }
             })
            
        }
    }
