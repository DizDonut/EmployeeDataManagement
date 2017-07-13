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
    });
    dataRef.ref("/employees").on("child_added", function(childSnapshot){

        name = childSnapshot.val().name;
        role = childSnapshot.val().role;
        sDate = childSnapshot.val().sDate;
        rate = childSnapshot.val().rate;

        $("#sheet").append("<tr> <td>" + name + "<td>" + role + "<td>" 
              + sDate + "<td>" + rate);
      });

    // dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    //       $("#name").html(snapshot.val().name);
    //       $("#role").html(snapshot.val().role);
    //       $("#date").html(snapshot.val().sDate);
    //       $("#rate").html(snapshot.val().rate);

          
    //   });

    	
