(function()
      {
        var Date = moment();
        var eDisplayMoment = document.getElementById('output');
        // display output in the preferred format
        eDisplayMoment.innerHTML = Date.format('dddd, MMMM Do');
      })();

(function()
      {
        var Hour = moment();
        var currrentHour = parseInt(Hour.format('HH'));
        $(".time-block").each(function(){
          //console.log($(this))
          
          //console.log($(Hour))
          //console.log(($(this).first().attr("data-hour")))
          var blockHour = parseInt($(this).children(0).data("hour"))
          if(localStorage.getItem(blockHour))
          {
            $(this).children(".description").val(localStorage.getItem(blockHour))
          }

          if(blockHour < currrentHour){
            $(this).addClass("past")
          }
          else if(blockHour === currrentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
          }
          else{
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
          }
          //console.log($(blockHour))
          //console.log(blockHour)
        }) 
      
      })()
//------------------------------------------------
//localStorage nightmare
//------------------------------------------------
$(".saveBtn").on("click",function(){
  var blockHour = ($(this).siblings(".hour").data("hour"))
  //var descriptiontext = ($(this).prev().data("description"))
  var description = ($(this).siblings(".description").val())
 
 
  //$(selector).siblings(filter)



 //localStorage.setItem(descriptionText);
// console.log(descriptionText);
 

// console.log(blockHour);
// console.log(description);


localStorage.setItem(blockHour, description)


})


// document.getElementById("save").addEventListener("click", function ()
//     {
//         var user = document.getElementById("user").value ;
//         //localStorage["user"] = user ;
//         localStorage.setItem("user", user) ;
//         alert("gmail id saved") ;
//         console.log("gmail id saved")
//     } , false);