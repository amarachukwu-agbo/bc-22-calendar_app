// these are labels for the days of the week
cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// these are human-readable month name labels, in order
cal_months_labels = ['January', 'February', 'March', 'April',
                     'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December'];

// these are the days of the week for each month, in order
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
cal_current_date = new Date();
var cal;
var outPut; 

function Calendar(month, year) {
  this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
  this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
  this.html = '';
  this.prevMonth = function(){
    if (this.month === 0){
      this.year-=1;
      this.month=11;
      cal = new Calendar(11,this.year);
      cal.generateHTML();
      //document.write(outPut);
    }else{
      this.month-=1;
      cal = new Calendar(this.month,this.year);
      cal.generateHTML();
      //document.write(outPut);
    }
  }
  this.nextMonth = function(){
    if (this.month === 11){
      this.year+=1;
      this.month = 0;
      cal = new Calendar(0,this.year);
      cal.generateHTML();
      //document.write(outPut);
    }else{
      this.month+=1;
      cal = new Calendar(this.month,this.year);
      cal.generateHTML();
      outPut = cal.generateHTML();
      //document.write(outPut);
    }
  }
  this.display = function(){
    document.write(outPut);
  }

}

Calendar.prototype.generateHTML = function(){

  // get first day of month
  var firstDay = new Date(this.year, this.month, 1);
  var startingDay = firstDay.getDay();
  
  // find number of days in month
  var monthLength = cal_days_in_month[this.month];
  
  // compensate for leap year
  if (this.month == 1) { // February only!
    if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
      monthLength = 29;
    }
  }
  
  // do the header
  var monthName = cal_months_labels[this.month];
  var html = '<table class="calendar-table">';
  html += '<tr><th colspan="7">';
  html +=  '<button onClick = "cal.prevMonth()">&#10094;</button>' + "&nbsp;" + monthName+ "&nbsp;" +this.year + "&nbsp;" + '<button onClick = "cal.nextMonth()">&#10095;</button>';
  html += '</th></tr>';
  html += '<tr class="calendar-header">';
  for(var i = 0; i <= 6; i++ ){
    html += '<td class="calendar-header-day">';
    html += cal_days_labels[i];
    html += '</td>';
  }
  html += '</tr><tr>';

  // fill in the days
  var day = 1;
  // this loop is for is weeks (rows)
  for (var i = 0; i < 9; i++) {
    // this loop is for weekdays (cells)
    for (var j = 0; j <= 6; j++) { 
      html += '<td class="calendar-day">';
      if (day <= monthLength && (i > 0 || j >= startingDay)) {
        html += day;
        day++;
      }
      html += '</td>';
    }
    // stop making rows if we've run out of days
    if (day > monthLength) {
      break;
    } else {
      html += '</tr><tr>';
    }
  }
  html += '</tr></table>';

  this.html = html;
  outPut = this.html;
}
//Calendar.prototype.getHTML = function() {
 // return this.html;
//}

window.addEventListener('load', function() {
var btn = document.getElementById('myBtn');
//let employeeClass;
btn.addEventListener('click', function(){
  var selectedYear = document.getElementById('year').value;
  var selectedMonth = document.getElementById('month').value;
  cal = new Calendar(selectedMonth,selectedYear);
  cal.generateHTML();
  cal.display();
});
});

  //let eType = document.getElementById('eType').value;
  //let nYears = document.getElementById('nYears').value;

  /*if(fName == '' || fName == ' '){
    alert('Input a valid first name');
    return;
  }
  if(lName == '' || lName == ' '){
    alert('Input a valid last name')
    return;
  }
  if(eType == 'select'){
    alert('Please select an employee type');
    return;
  }
  if(nYears == 'select'){
    alert('Please select the number of years employed');
    return;
  }
  switch(eType){
    case 'Intern' :
      employeeClass = new Intern(fName,lName,eType, nYears).Salary();
      break;
    case 'Associate' :
      employeeClass = new Associate(fName,lName,eType, nYears).Salary();
      break;
    case 'Manager' :
      employeeClass = new Manager(fName,lName,eType, nYears).Salary();
      break;
    case 'Executive' :
      employeeClass = new Executive(fName,lName,eType, nYears).Salary();
      break;
    case 'Director' :
      employeeClass = new Director(fName,lName,eType, nYears).Salary();
      break;

  }
  if
  //Set Values into html
  document.getElementById('fnd').innerText = fName;
  document.getElementById('lnd').innerText = lName;
  document.getElementById('ety').innerText = eType;
  document.getElementById('salaryOutput').innerText = employeeClass;

});
});


cal = new Calendar(6,2009);
cal.generateHTML();*/
