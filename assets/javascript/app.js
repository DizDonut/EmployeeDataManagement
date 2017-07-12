 var config = {
    apiKey: "AIzaSyAqD5C_150KOeTQrIoUZZbOlVpWb4nAFkI",
    authDomain: "timesheet-4867b.firebaseapp.com",
    databaseURL: "https://timesheet-4867b.firebaseio.com",
    projectId: "timesheet-4867b",
    storageBucket: "timesheet-4867b.appspot.com",
    messagingSenderId: "541294369119"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit").on("click", function(){

  	var name = $("#name").val().trim();
  	var role = $("#role").val().trim();
  	var sDate = $("#date").val().trim();
  	var rate = $("#rate")val().trim();

  	var newEmployee = {
  		name: name,
  		role: role,
  		sDate: sDate,
  		rate: rate
  	};

  	database.ref().push(newEmployee);


  	$("#sheet > <table>").html("<td>" + name + "<td>" + role + "<td>" 
  		+ sDate + "<td>" + rate);

  });