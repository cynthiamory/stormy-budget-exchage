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
// console.log(boiheight);
}
// END OF CYNTHIA'S JS BUDGET CODE

// START OF LOCAL STORAGE CODE FOR SAGENTHAVE

// Puts items in local storage
$(document).on({ "click": function () {

 const inputElements = document.querySelector('.option').children;
  for (let i = 0; i < inputElements.length; i++) {
    const input = inputElements[i];
    //console.log(input.placeholder)
    const inputValue = input.value;
    const inputText = input.placeholder;
    // console.log(inputText);

    localStorage.setItem(inputText, inputValue) }
  
}},
'.btn-primary')

// Displays items from local storage
function getFunction () {
  
  for (let i = 0; i < localStorage.length; i++) {
    var inputText = localStorage.key(i);
    var inputValue = localStorage.getItem(inputText);
    // if(inputText == "Budget"){
    //   $("#budget").val(inputValue);
    // }
    // if(inputText == "Budget"){
    //   $("#budget").val(inputValue);
   
    // }
    // if(inputText == "Necessities"){
    //   $("#budget").val(inputValue);
    // }
    // if(inputText == "Budget"){
    //   $("#budget").val(inputValue);
    // }
    
    switch (inputText) {
      case 'Budget':
          $("#budget").val(inputValue);
          break;
      case 'Necessities':
          $("#necessities").val(inputValue);
          break;
      case 'Food':
          $("#food").val(inputValue); 
          break;
      case 'Activities':
          $("#activities").val(inputValue); 
          break;
      case 'Transportation':
          $("#transportation").val(inputValue);
          break;
    }
      
    }
    // console.log(key + ': ' + value);
  }

getFunction();

// END OF LOCAL STORAGE CODE FOR SAGENTHAVE