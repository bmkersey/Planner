var workDay =["9","10","11","12","13","14","15","16","17"]
var dailyTasks= []
var loadedTasks = []


var checkTime = function(){
    
    var currentTime = moment().format("k")
    currentTime= parseInt(currentTime)
   
    for (var i = 0; i <workDay.length;i++){

        var workTime = parseInt(workDay[i])
        if(currentTime === workTime){
            $(".task"+workDay[i]).addClass("present")

        }else if (currentTime > workTime){
            $(".task" + workDay[i]).addClass("past")
            console.log("test")
        }else{
            $(".task"+workDay[i]).addClass("future")
            console.log("test")

        }
    }


}

var loadTasks = function(){
    
    var loadedTasks = localStorage.getItem("tasks");
    var loadedTasks = JSON.parse(loadedTasks)

    console.log(loadedTasks)

    if (!loadedTasks){
        return false;
    } else {
    
        for (var i = 0; i < loadedTasks.length;i++){
        var taskTime = loadedTasks[i].daypart;
        var taskText= loadedTasks[i].task;
        console.log(taskText);
    
        $("#task"+ taskTime).text(taskText);
        }
    }
}


var getDateP = function(){
    var currentDate = moment().format("dddd, MMMM Do")
    
    $("#currentDay").text(currentDate)

    checkTime();
    loadTasks();

}

var saveData = function(time){
    var taskText= $("#task" + time).text()

    var newTask= {
        task:taskText,
        daypart:time
    }

    dailyTasks.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(dailyTasks))

}

$(".container").click(function(event){
    var timePart = event.target.id
    var timePart = timePart.substring(4)
    var textPart = event.target.id
    var textPart = textPart.substring(0,4)
    
    if (textPart === "save"){
        
        saveData(timePart);
    }
    

});










//-----------------------------------on load

getDateP();

