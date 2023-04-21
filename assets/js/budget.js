// START OF CYNTHIA'S JS BUDGET CODE
$("button").click(gather)
$(document).ready(centerme);
$(window).resize(centerme);

function gather() {
  budget = document.getElementById("budget").value;
  budget = budget.replace(/\D/g,'');
  necessities = document.getElementById("necessities").value;
  necessities = necessities.replace(/\D/g,'');
  activities = document.getElementById("activities").value;
  activities = activities.replace(/\D/g,'');
  food = document.getElementById("food").value;
  food = food.replace(/\D/g,'');
  transportation = document.getElementById("transportation").value;
  transportation = transportation.replace(/\D/g,'');
  result = budget - necessities - activities - food - transportation;
  savings = (budget * 0.20);
  $(".results-data").empty();
  if (result === 0) {
    $(".results-data").append('<p class="text-danger"> You did not enter anything.</p>');
  }
  else if (result < 0) {
    $(".results-data").append('<p class="text-danger"> After your expenses you have $' + result + ' left in your budget. You might want to try reducing your spend limit during this trip.</p>');
  }
    else {
      $(".results-data").append(
      '<p class="text-sucess"> After your expenses you have $' + result + ' left in your budget.</p>','<p class="text-sucess">But you should save at least $' + savings + '.</p>')
  }
}

function centerme() {
boiheight = $(".center-budget-form").height();
middle = boiheight / 2;
$(".center-budget-form").css("margin-top","-" + middle + "px");
console.log(boiheight);
}
// END OF CYNTHIA'S JS BUDGET CODE

// START OF LOCAL STORAGE CODE FOR SAGENTHAVE
// ---ENTER LOCAL STORAGE HERE -----
// END OF LOCAL STORAGE CODE FOR SAGENTHAVE