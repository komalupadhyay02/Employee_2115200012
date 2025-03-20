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
class EmployeePayrollData {
    // property
    id;
    salary;

    // constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) { this._name = name; }

    // method
    toString() {
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());



//UC12

class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) { this._name = name; }

    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", " +
               "gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());


class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else 
            throw "Name is Incorrect!";
    }

    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", " +
               "gender=" + this.gender + ", startDate=" + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

try {
    employeePayrollData.name = "john";  // This should throw an error due to invalid name format
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());



class EmployeePayrollData {
    // properties
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // Getter and Setter for Name
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');  // First letter uppercase, at least 3 lowercase letters
        if (nameRegex.test(name))
            this._name = name;
        else 
            throw "Error: Name is Incorrect! (Must start with uppercase and have at least 3 lowercase letters)";
    }

    // Getter and Setter for ID
    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*$');  // Positive non-zero number
        if (idRegex.test(id))
            this._id = id;
        else
            throw "Error: ID must be a positive non-zero number!";
    }

    // Getter and Setter for Salary
    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9][0-9]*$');  // Positive non-zero number
        if (salaryRegex.test(salary))
            this._salary = salary;
        else
            throw "Error: Salary must be a positive non-zero number!";
    }

    // Getter and Setter for Gender
    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MF]$');  // Only 'M' or 'F' allowed
        if (genderRegex.test(gender))
            this._gender = gender;
        else
            throw "Error: Gender must be 'M' or 'F'!";
    }

    // Getter and Setter for Start Date
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate instanceof Date && startDate <= new Date())
            this._startDate = startDate;
        else
            throw "Error: Start date cannot be a future date!";
    }

    // toString Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return ⁠ id=${this.id}, name='${this.name}', salary=${this.salary}, gender=${this.gender}, startDate=${empDate} ⁠;
    }
}

// Test Cases
try {
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date("2024-03-15"));
    console.log(employeePayrollData.toString());

    // Trying invalid name
    employeePayrollData.name = "jo";  // Should throw an error
} catch (e) {
    console.error(e);
}

try {
    // Trying invalid ID
    let invalidEmployee = new EmployeePayrollData(0, "Terrisa", 30000, "F", new Date("2024-03-15"));
} catch (e) {
    console.error(e);
}

try {
    // Trying invalid Salary
    let invalidSalaryEmployee = new EmployeePayrollData(2, "John", -5000, "M", new Date("2024-03-15"));
} catch (e) {
    console.error(e);
}

try {
    // Trying invalid Gender
    let invalidGenderEmployee = new EmployeePayrollData(3, "Alice", 40000, "X", new Date("2024-03-15"));
} catch (e) {
    console.error(e);
}

try {
    // Trying future date
    let futureDateEmployee = new EmployeePayrollData(4, "Bob", 35000, "M", new Date("2026-01-01"));
} catch (e) {
    console.error(e);
}
                 

