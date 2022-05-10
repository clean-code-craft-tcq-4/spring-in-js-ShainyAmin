module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
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
     return {"min": min,
            "max": max,
            "average":average};

}

