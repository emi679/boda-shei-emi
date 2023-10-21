$( document ).ready(function() {
    
    var daysItem = $("#days");
    var daysValue = $("#days h1");
    var daysTitle = $("#days h2");
    
    var hoursItem = $("#hours");
    var hoursValue = $("#hours h1");
    var hoursTitle = $("#hours h2");
    
    var minutesItem = $("#minutes");
    var hoursValue = $("#hours h1");
    var hoursTitle = $("#hours h2");
    
    var secondsItem = $("#seconds");
    
    function update()
    {
      // Set the unit values in milliseconds.
      var msecPerMinute = 1000 * 60;
      var msecPerHour = msecPerMinute * 60;
      var msecPerDay = msecPerHour * 24;
  
      // Set a date and get the milliseconds
      var date = new Date('6/15/1990');
      var dateMsec = date.getTime();
  
      // Set the date to January 1, at midnight, of the specified year.
      date.setMonth(0);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
  
      // Get the difference in milliseconds.
      var interval = dateMsec - date.getTime();
  
      // Calculate how many days the interval contains. Subtract that
      // many days from the interval to determine the remainder.
      var days = Math.floor(interval / msecPerDay );
      interval = interval - (days * msecPerDay );
  
      // Calculate the hours, minutes, and seconds.
      var hours = Math.floor(interval / msecPerHour );
      interval = interval - (hours * msecPerHour );
  
      var minutes = Math.floor(interval / msecPerMinute );
      interval = interval - (minutes * msecPerMinute );
  
      var seconds = Math.floor(interval / 1000 );
      
      
    }
    
    
    
    
    
  });