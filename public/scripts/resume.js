$("#PERSONAL").hide()
$("#SKILLS-CONT").hide()
$("#EDUCATION").hide()
$("#PROJECTS").hide()
$("#CERTIFICATIONS").hide()
$("#LANG").hide()
// Toggle between the fieldsets based on btn clicks
$(document).ready(() =>{
    $("#PERSONAL").show()
    $(".p-btn").addClass("btn-chg-clr");
})
function next1(){
    $("#PERSONAL").hide()
    $("#SKILLS-CONT").show()
    $(".s-btn").addClass("btn-chg-clr");
    $(".dash-1").addClass("btn-green");
}
function next2(){
    $("#SKILLS-CONT").hide()
    $("#EDUCATION").show()
    $(".e-btn").addClass("btn-chg-clr");
    $(".dash-2").addClass("btn-green");
}
function next3(){
    $("#EDUCATION").hide()
    $("#PROJECTS").show()
    $(".pr-btn").addClass("btn-chg-clr");
    $(".dash-3").addClass("btn-green");
}
function next4(){
    $("#PROJECTS").hide()
    $("#CERTIFICATIONS").show()
    $(".c-btn").addClass("btn-chg-clr");
    $(".dash-4").addClass("btn-green");
}
function next5(){
    $("#CERTIFICATIONS").hide()
    $("#LANG").show()
    $(".l-btn").addClass("btn-chg-clr");
    $(".dash-5").addClass("btn-green");
}
function generate(){
    $(".generate").addClass("btn-green")
    $(".dash-6").addClass("btn-green");
}


