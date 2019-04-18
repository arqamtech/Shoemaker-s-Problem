var readline = require('readline-sync');

var numJobs = readline.question("Enter Number of Jobs \n");


var jobs = [];
var jobsdISCOUNT = [];
console.log("Enter Number of days and  discount of each job \n");



for (let i = 0; i < numJobs; i++) {
    let x = new Object();
    let jobNO = i + 1;
    x.id = jobNO;
    x.days = readline.question("No of days for Job " + jobNO + "  : ");
    x.discount = readline.question("Discount per Day  for Job " + jobNO + "  : ");
    jobs.push(x);


    let totDiscount = parseInt(x.discount / x.days);
    jobsdISCOUNT.push(totDiscount);
}

console.log(jobs)

jobs.sort(function (a, b) {
    if (b.discount / b.days != a.discount / a.days) {
        return b.discount / b.days > a.discount / a.days;
    }
})
console.log(jobs)
jobs.forEach(snap => {
    console.log(snap.id)
})
