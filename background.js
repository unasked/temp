$(document).ready(function() {
    $("#todo-button").click(function() {
        var todoBlock = $(this).closest("#New-to-do-block")
        var description = todoBlock.find("#name-of-item")
        var pomodoroEstimate = todoBlock.find("#number-of-pomodoros")
        var todoDesc = todoBlock.find("#add-description")
        $("ol").append("<li><input type = 'checkbox'/> " + '<a href=show.html>'+description.val()+'</a>' + ":" + " <span class = 'pomodoro'> " + pomodoroEstimate.val() + " pomodoro </span><div><font size='2'>" + todoDesc.val() + "</font></div></li>")
        
        description.val("")
        pomodoroEstimate.val("")
        todoDesc.val("")
    })
    
    $("input[type=checkbox]").click(function() {
        $(this).closest("li").toggleClass("completed-todo")
    })
    
})
