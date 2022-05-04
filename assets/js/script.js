




var getDateP = function(){
    var currentDate = moment().format("dddd, MMMM Do")
    console.log(currentDate)
    $("#currentDay").text(currentDate)

}










//-----------------------------------on load

getDateP();

