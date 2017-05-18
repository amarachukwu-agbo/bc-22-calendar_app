window.onload = function(){
    var d = new Date();
    var monthName =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];
    var month = d.getMonth();
    var year = d.getFullYear();
    var firstDate = monthName[month]+" "+1+" "+year;
    var temp = new Date(first_date).toDateString;
    var firstDay = temp.substr(0,3);
    var dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var firstDayNumber = dayName.indexOf(firstDay);
    var lastDay = new Date(year, month+1, 0 ).getDate();
    var calendarTemp = displayCalendar(firstDayNumber, lastDay);
    document.getElementById('calendar-month-year').innerHTML = monthName[month] + " " + year;
}

function displayCalendar(firstDayNumber, lastDay){
    var calendar = document.createElement('table');
    var calendarRow = document.createElement('tr');
    for (var c=0; c<=6; c++){S
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS".[c];
        calendarRow.appendChild(td);
    }
    calendar.appendChild(calendarRow);

    calendarRow = document.createElement('tr');
    var c;
    for (c=0; c<=6; c++){
        if(c == firstDayNumber){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        calendarRow.appendChild(td);
    }

    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        calendarRow.appendChild(td);
    }
    calendar.appendChild(calendarRow);

    for(var row=3; row<=6; row++){
        calendarRow = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > lastDay){
                calendar.append(tr);
                return calendar;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            calendarRow.appendChild(td);
        }
        calendar.appendChild(calendarRow)
    }
        
    }
}