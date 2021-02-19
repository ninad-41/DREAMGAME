//MY DREAM GAME @NINADMANOJGUGALE#41
// declaring the variables
var database;
var Drawing = [];
var currentPath = [];
var isDrawing = false;
var weight;
var color;

function setup() {

    canvas = createCanvas(displayWidth-20,displayHeight-170);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

    database = firebase.database();


    var input = createInput("");
    input.hide();
    var Button1  = createButton("BRODERNESS");
    var buttton2  =createButton("APPLY");
    buttton2.hide();
    
    input.position(displayWidth/2+500, displayHeight/13);
    Button1.position(displayWidth/2+470, displayHeight/30);
    buttton2.position(displayWidth/2+600, displayHeight/8);

    Button1.mousePressed(function(){
         input.show();
         colorButton.hide();
         buttton2.show();
     });

    buttton2.mousePressed(function(){
        input.hide();
        buttton2.hide();
        colorButton.show();
        
        console.log("strokeWeight has been Changed")
        weight  = input.value();  
    })

    var colorButton  = createButton("color");
    colorButton.position(displayWidth/2+600, displayHeight/30);
    colorButton.mousePressed(function(){
        var green = createButton("Green");
        var blue = createButton("Blue");
        var red = createButton("Red");
        var yellow = createButton("Yellow");
        var purple = createButton("Purple");
        var pink = createButton("Pink");
        var brown = createButton("Brown");
        var white = createButton("White");
        var orange = createButton("Orange");

        green.position(displayWidth/2+600, displayHeight/30+40);
        blue.position(displayWidth/2+600, displayHeight/30+60);
        red.position(displayWidth/2+600, displayHeight/30+80);
        yellow.position(displayWidth/2+600, displayHeight/30+100);
        purple.position(displayWidth/2+600, displayHeight/30+120);
        pink.position(displayWidth/2+600, displayHeight/30+140);
        brown.position(displayWidth/2+600, displayHeight/30+160);
        white.position(displayWidth/2+600, displayHeight/30+180);
        orange.position(displayWidth/2+600, displayHeight/30+200);   

    green.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();  
        stroke("green");
    });

    blue.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("blue");          
     })

    red.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("red");     
     })

    yellow.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("yellow");
     })

    purple.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("purple");
     })

    pink.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("pink");
     })

    brown.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("brown");
    })

    white.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("white");         
    })

    orange.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        stroke("orange");
    })
    
        Button1.hide();
        buttton2.hide();
       })
 }
 
function draw() {
    background(255);
    
      if (isDrawing) {
          var Path = {
              x: mouseX,
              y: mouseY
          };
          currentPath.push(Path);
      }
  
      strokeWeight(weight);
      noFill();
  
    for (var i = 0; i < Drawing.length; i++) {
      var path = Drawing[i];
      beginShape();
  
        for (var j = 0; j < path.length; j++) {
            vertex(path[j].x, path[j].y);
       }
          endShape();
      }

      drawSprites();

  }
  
  function startPath() {
    isDrawing = true;
    currentPath = [];
    Drawing.push(currentPath);
}

function endPath() {
    isDrawing = false;
}
