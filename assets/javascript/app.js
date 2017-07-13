 var config = {
    apiKey: "AIzaSyAqD5C_150KOeTQrIoUZZbOlVpWb4nAFkI",
    authDomain: "timesheet-4867b.firebaseapp.com",
    databaseURL: "https://timesheet-4867b.firebaseio.com",
    projectId: "timesheet-4867b",
    storageBucket: "timesheet-4867b.appspot.com",
    messagingSenderId: "541294369119"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  $("#submit").on("click", function(event){

      event.preventDefault();

    	var name = $("#name").val().trim();
    	var role = $("#role").val().trim();
    	var sDate = $("#date").val().trim();
    	var rate = $("#rate").val().trim();

    	dataRef.ref("/employees").push({
        name: name,
        role: role,
        sDate: sDate,
        rate: rate
      });
      
      $("#name").val("");
      $("#role").val("");
      $("#date").val("");
     $("#rate").val("");
    });

    dataRef.ref("/employees").on("child_added", function(childSnapshot){

        name = childSnapshot.val().name;
        role = childSnapshot.val().role;
        sDate = childSnapshot.val().sDate;
        rate = childSnapshot.val().rate;

        var months = 0;
        var billed = 0;

        var today = moment();

        months = today.diff(sDate, "months");
        console.log(months);

        billed = months * rate;



        $("#sheet").append("<tr> <td>" + name + "<td>" + role + "<td>" 
              + sDate + "<td>" + months + "<td>" + rate + "<td>" + billed);
      });




    	
