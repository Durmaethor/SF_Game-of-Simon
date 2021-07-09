({
    
  doInit : function() {

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

    const turnCounter = document.getElementById('turn');
    const topLeft = document.querySelector("#topleft");
    const topRight = document.querySelector("#topright");
    const bottomLeft = document.querySelector("#bottomleft");
    const bottomRight = document.querySelector("#bottomright");
    const strictButton = document.getElementById('strict');
    const onButton = document.getElementById('on');
    const startButton = document.getElementById('start');

  },

  onButton : function(component) {

      onButton.addEventListener('click', (event) =>{

      var turnLabel = "-";
      
        if (onButton == true) {
            on = true;
            component.set("v.turn", turnLabel);
          } else {
            on = false;
            component.set("v.turn", "")
            clearColor();
            clearInterval(intervalId);
          }

        });
      

  },

    strictButton : function(){

        this.strictButton.addEventListener('checked', (event) => {
          if (this.strictButton.checked == true){
            strict = true;
          }
          else {
            strict = false;
          }
          
        });

    },

  startButton : function(component) {

    if (on || win) {
      play();
    }

  },

  play : function () {

    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;

    for (var i = 0; i < 20; i++) {
      order.push(Math.floor(Math.random() * 4) + 1);
    }

    compTurn = true;
  
    intervalId = setInterval(gameTurn, 800);

  },

  gameturn : function() {
    on = false;
  
    if (flash == turn) {
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
      on = true;
    }
  
    if (compTurn) {
      clearColor();
      setTimeout(() => {
        if (order[flash] == 1) one();
        if (order[flash] == 2) two();
        if (order[flash] == 3) three();
        if (order[flash] == 4) four();
        flash++;
      }, 200);
    }
  },
  
  one : function() {
    if (noise) {
      let audio = document.getElementById("clip1");
      audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
  },
  
  two : function() {
    if (noise) {
      let audio = document.getElementById("clip2");
      audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
  },
  
  three : function() {
    if (noise) {
      let audio = document.getElementById("clip3");
      audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
  },
  
  four : function () {
    if (noise) {
      let audio = document.getElementById("clip4");
      audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
  },
  
  clearColor : function() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
  },
  
  flashColor : function() {
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";
  }
  
  topLeft : function() {
    topLeft.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    }),
  
  topRight : function() {
    topRight.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })
  },
  
  bottomLeft : function() {
    bottomLeft.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })
  },
  
  bottomRight : function() {
    bottomRight.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })
  },
  
  check : function () {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
      good = false;
  
    if (playerOrder.length == 3 && good) {
      winGame();
    }
  
    if (good == false) {
      flashColor();
      turnCounter.innerHTML = "NO!";
      setTimeout(() => {
        turnCounter.innerHTML = turn;
        clearColor();
  
        if (strict) {
          play();
        } else {
          compTurn = true;
          flash = 0;
          playerOrder = [];
          good = true;
          intervalId = setInterval(gameTurn, 800);
        }
      }, 800);
  
      noise = false;
    }
  
    if (turn == playerOrder.length && good && !win) {
      turn++;
      playerOrder = [];
      compTurn = true;
      flash = 0;
      turnCounter.innerHTML = turn;
      intervalId = setInterval(gameTurn, 800);
    }
  
  },
  
  winGame : function () {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
  },

})
