var months = ['Jan',  'march', 'April', 'June','July']

// add or remove elment from an array?
// 1. add dec at the last of the array 
// 2. what is the return valur=e of the splice method?
// 3. up[date march to march(update)?
// 4. delete June from the array

// sol1:
// var NewMonths= months.splice(months.length,0,"Dec")
// console.log(months)

// sol2:
// console.log(NewMonths)//show s empty array ////show only deleted datasets

// sol3:
// var NewMonths= months.splice(1,1,"March")
// //first delete march////then insert March at that index
// console.log(months)

//sol3 : alternative :
console.log(months)
var indexOfMounth = months.indexOf('march')
if (indexOfMounth>0) // or (indexOfMounth != -1) 
{ 
    var NewMonths= months.splice(indexOfMounth,1,"March")
    console.log(months)
    console.log(NewMonths)// shows deleted data 
    var NewMonths= months.splice(indexOfMounth,Infinity,"March")//deleted all index
    console.log(months)
    console.log(NewMonths)// shows deleted data
}else{
    console.log("No such data found")
}


