var workDay =["9","10","11","12","13","14","15","16","17"]
var dailyTasks= []
var loadedTasks = []

// a function that runs and checks the time of day against the task time rows
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


// this loads any tasks saved into local storage
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



//initial run function uses moment to grab the current date and print it to the top of the page then checks the time and loads tasks
var getDateP = function(){
    var currentDate = moment().format("dddd, MMMM Do")
    
    $("#currentDay").text(currentDate)

    checkTime();
    loadTasks();

}

///simple save function
var saveData = function(time){
    var taskText= $("#task" + time).text()

    var newTask= {
        task:taskText,
        daypart:time
    }

    dailyTasks.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(dailyTasks))

}


//event handler
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

