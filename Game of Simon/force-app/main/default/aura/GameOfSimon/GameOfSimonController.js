({
    onInit : function(component, event, helper) {

    let order = [];
    let playerOrder = [];
    let flash;
    let turn;
    let good;
    let compTurn;
    let intervalId;
    let strict = false;
    let noise = true;
    let on = false;
    let win;

    const turnCounter = document.querySelector("#turn");
    const topLeft = document.querySelector("#topleft");
    const topRight = document.querySelector("#topright");
    const bottomLeft = document.querySelector("#bottomleft");
    const bottomRight = document.querySelector("#bottomright");
    const strictButton = document.querySelector("#strict");
    const onButton = document.getElementById('on');
    const startButton = document.querySelector("#start");

    

    },

    onButton : function(component) {

        if (onButton.checked == true) {
            on = true;
            turnCounter.innerHTML = "-";
          } else {
            on = false;
            turnCounter.innerHTML = "";
            clearColor();
            clearInterval(intervalId);
          }

    },

})
