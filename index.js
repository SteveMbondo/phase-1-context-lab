/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
// Your code here
function createEmployeeRecord(employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(employee, timeStamp) {
  const [date, hour] = timeStamp.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  };
  employee.timeInEvents.push(timeInEvent);
  return timeInEvent;
}


function createTimeOutEvent(employee, timeStamp) {
  const [date, hour] = timeStamp.split(" ");
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(event => event.date === date);
  const timeOut = employee.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(employee, date) {
  const hours = hoursWorkedOnDate(employee, date);
  return hours * employee.payPerHour;
}

function allWagesFor(employee) {
  const dates = employee.timeInEvents.map(event => event.date);
  return dates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(array) {
  return array.reduce((total, employee) => total + allWagesFor(employee), 0);
}

  

