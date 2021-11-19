

$("#date").text((moment().format('dddd, MMMM Do YYYY')));
$("#myTime").text((moment().format('h:mm a')));

var today = new Date();
var timeDate = today.getHours();

var update = setInterval( function(){
    date = moment(new Date());
    $("#myTime").text((moment().format('h:mm a')));

}, 1000)
setInterval(update, 1000);

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".allocated").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
});

$("#hr-8 .allocated").val(localStorage.getItem("hr-8"));
$("#hr-9 .allocated").val(localStorage.getItem("hr-9"));
$("#hr-10 .allocated").val(localStorage.getItem("hr-10"));
$("#hr-11 .allocated").val(localStorage.getItem("hr-11"));
$("#hr-12 .allocated").val(localStorage.getItem("hr-12"));
$("#hr-1 .allocated").val(localStorage.getItem("hr-1"));
$("#hr-2 .allocated").val(localStorage.getItem("hr-2"));
$("#hr-3 .allocated").val(localStorage.getItem("hr-3"));
$("#hr-4 .allocated").val(localStorage.getItem("hr-4"));


function hourUpdate(){
    var timeDate = today.getHours();

    $(".timespot").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        if (blockTime < timeDate) {
            $(this).addClass("past")
        } else
        if (blockTime === timeDate) {
            $(this).removeClass("past").addClass("present")
        }
        else {$(this).removeClass("past", "present").addClass("future");
        }
    });
}
hourUpdate();


