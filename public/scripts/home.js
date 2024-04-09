// Animate the dropdown button to toggle the navigation links
function dropdown(){
    let width = window.innerWidth;
    if (width <= 576){              //Works for screen sizes less than 576
        $(".btn-area").hide()
    }
    else{
        $(".btn-area").show()
    }
}
$(document).ready(dropdown());
$("#dropdown").click(() => {
    $(".btn-area").slideToggle("slow");
})