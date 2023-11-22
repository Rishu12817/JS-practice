var yr = 2100;

debugger;

if(yr%4==0){
    if (yr%100==0) {
        if (yr%400==0) {
            console.log(yr + " is a leap year");            
        }else{
            console.log(yr + " is not a leap year");
        }
        
    }else{
        console.log(yr +" is a leap year");
    }
}else{
    console.log(yr+" is not a leap year");
}