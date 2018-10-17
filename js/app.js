

// BUDGET CONTROLLER
var budgetController = (function(){

// some code

})();

// UI CONTROLLER
var UIController = (function(){ //private controller

// some code

})();


// GLOBAL APP CONTROLER
var controller = (function(budgetCtrl, UICtrl){ //private controller

  document.querySelector('.add__btn').addEventListener('click',function(){ //Event listener

      // 1. Get field input data
      // 2. Add the item to the budget controller
      // 3. Add the item to the UI
      // 4. Calculate the budget
      // 5. Display the budget on the UI

  });

  document.addEventListener('keypress', function(event){

    console.log(event)

  });


})(budgetController, UIController);
