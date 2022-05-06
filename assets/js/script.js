var workDay =["9","10","11","12","13","14","15","16","17"]


var checkTime = function(){
    
    var currentTime = moment().format("k")
    currentTime= parseInt(currentTime)
   
    for (var i = 0; i <workDay.length;i++){

        var workTime = parseInt(workDay[i])
        if(currentTime === workTime){
            $(".task"+workDay[i]).css("background-color","red")

        }else if (currentTime > workTime){
            $(".task" + workDay[i]).addClass("bg-secondary")
            console.log("test")
        }else{
            $(".task"+workDay[i]).addClass("bg-success")
            console.log("test")

        }
    }


}

var getDateP = function(){
    var currentDate = moment().format("dddd, MMMM Do")
    
    $("#currentDay").text(currentDate)

    checkTime();

}

var saveData = function(){}

$(".container").click(function(event){

    if (event.target.id === "save"){
        saveData();
    }
    

});










//-----------------------------------on load

getDateP();

