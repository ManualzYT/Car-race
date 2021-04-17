canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");



car_width = 100;
car_height = 90;


console.log("background_image = " + background_image);


car_image = "Car1.png";

car_x = 10;
car_y = 500;

function add()
{
     background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

    function uploadBackground()
    {
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);

    }

    function uploadcar1()
    {
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width , car1_height);
       
    }

    window.addEventListener("keydown" , my_keydown);

    function my_keydown(e)
    {
    keyPressed = e.keyCode;
    console.log(keyPressed);
       if (keyPressed == '38')
         {
           car1_up();
           console.log("up");
        }  

        if (keyPressed == '40')
         {
           car_1down();
           console.log("down");
        }  

        if (keyPressed == '37')
         {
           car1_left();
           console.log("left");
        }  

        if (keyPressed == '39')
         {
           car1_right();
           console.log("right");
        }  
    }


    function up()
    {
      if(car_y >= 0)
      {
        car_y = car_y - 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " + car_y);
       uploadBackground()
       uploadrover()

      } 
    }

    function down()
    {
      if(car_y <= 500)
      {
        car_y = car_y + 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " + car_y);
       uploadBackground()
       uploadrover()
            
      } 
    }

       
    function left()
    {
      if(car_x >= 0)
      {
        car_x = car_x - 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " + car_y);
       uploadBackground()
       uploadrover()
            
      } 
    }

    function right()
    {
      if(car_x <= 700)
      {
        car_x = car_x + 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " + car_y);
       uploadBackground()
       uploadrover()
            
      } 
    }
      