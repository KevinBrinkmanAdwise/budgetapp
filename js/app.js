

// BUDGET CONTROLLER
var budgetController = (function(){

// some code

})();

// UI CONTROLLER
var UIController = (function(){ //private controller

  return {
      getInput: function(){
        return {
               type: document.querySelector('.add__type').value,
               description: document.querySelector('.add__description').value,
               value: document.querySelector('add__value').value
              };
           }
        };
})();


// GLOBAL APP CONTROLER
var controller = (function(budgetCtrl, UICtrl){ //private controller

  var ctlAddItem = function(){


    // 1. Get field input data
    var input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI

  }

  document.querySelector('.add__btn').addEventListener('click', ctlAddItem);

  document.addEventListener('keypress', function(event){

    if (event.keyCode === 13 || event.wich === 13){
      ctlAddItem();

    }
  });


})(budgetController, UIController);
