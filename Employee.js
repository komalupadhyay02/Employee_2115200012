//UC1

const IS_ABSENT = 0


let empCheck = Math.floor(Math.random()*10) % 2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
    return ;

}else 
{
    console.log("Employee is PRESENT");
}
// UC 2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

// UC 3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);
/ UC 4
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);

// UC 5
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
// UC 6 Arrays

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 – Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);


            empWage);



            // Array Helper Functions
// UC 7A – Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A – Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7A – Emp Wage with reduce: " +
            empDailyWageArr.reduce(totalWages, 0));
            // UC 7B – Show the Day along with Daily Wage using Array map helper function
            let dailyCntr = 0;
            function mapDayWithWage(dailyWage) {
                dailyCntr++;
                return dailyCntr + " = " + dailyWage;
            }
            
            let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
            console.log("UC7B – Daily Wage Map");
            console.log(mapDayWithWageArr);
            

// UC 7C – Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C – Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D – Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC 7D – First time Fulltime wage was earned on Day: " + 
    mapDayWithWageArr.find(findFulltimeWage));


    // UC 7E – Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC 7E – Check All Elements have Full Time Wage: " + 
    fullDayWageArr.every(isAllFulltimeWage));


    // UC 7F – Check if there is any Part Time Wage
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    
    console.log("UC 7F – Check If Any Part Time Wage: " + 
        mapDayWithWageArr.some(isAnyPartTimeWage));
    
    
        // UC 7G – Find the number of days the Employee Worked
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0) return numOfDays + 1;
        return numOfDays;
    }
    
    console.log("UC 7G – Number of Days Emp Worked: " + 
        empDailyWageArr.reduce(totalDaysWorked, 0));
    
 // UC 6 Arrays and 7 Maps

 const MAX_HRS_IN_MONTH = 160;
 const NUM_OF_WORKING_DAYS = 20;
 let totalEmpHrs = 0;
 let totalWorkingDays = 0;
 let empDailyWageArr = new Array();
 let empDailyWageMap = new Map();
 
 function calcDailyWage(empHrs) {
     return empHrs * WAGE_PER_HOUR;
 }
 
 while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
     totalWorkingDays++;
     let empCheck = Math.floor(Math.random() * 10) % 3;
     let empHrs = getWorkingHours(empCheck);
     totalEmpHrs += empHrs;
     empDailyWageArr.push(calcDailyWage(empHrs));
     empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
 }
 
     // UC 6 Arrays and 7 Maps

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7A – Emp Wage Map totalHrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

console.log(empDailyWageMap);
 
 function totalWages(totalWage, dailyWage) {
     return totalWage + dailyWage;
 }
 
 console.log("UC7A – Emp Wage Map totalHrs: " +
     Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
  // UC 10 Object Creation

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                   ' And Wage Earned = ' + this.dailyWage;
        },
    });
}

console.log("UC 10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);

// UC 10A to UC 11D Using Object Functions along with Arrow Functions

let totalWages = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("UC 11A Total Hours: " + totalHours + " Total Wages: " + totalWages);

process.stdout.write("UC 11B Logging Full Work Days");
empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\nUC 11C PartWorkingDayStrings: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);

console.log("UC 11D NonWorkingDayNums: " + nonWorkingDayNums);

                 

