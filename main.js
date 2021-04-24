canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

background_image = "https://m.media-amazon.com/images/I/611EgAv4LtL._AC_SL1134_.jpg"

console.log("background_image = " + background_image);

car1_width = 120;
car1_height = 70;

car1_x = 10;
car1_y = 10;

car1_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiFiW7n69_LZZDehREUEDCeBQLBfelQirZw&usqp=CAU";

car2_width = 120;
car2_height = 70;

car2_x = 10;
car2_y = 100;

car2_image = "https://cdn4.iconfinder.com/data/icons/race-cartoon/512/val42_7-512.png";

function add()
{
     background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
  
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

    function uploadBackground()
    {
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);

    }


    function uploadcar1()
    {
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width , car1_height);
      
  function uploadcar2()
    {
    ctx.drawImage(car2_imgTag , car2_x , car2_y , car2_width , car2_height);    
       
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
           car1_down();
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
      
       if (keyPressed == '87')
         {
           car2_up();
           console.log("key w");
        } 
      if (keyPressed == '83')
         {
           car2_down();
           console.log("key s");
        } 
       if (keyPressed == '65')
         {
           car2_left();
           console.log("key a");
        } 
       if (keyPressed == '68')
         {
           car2_right();
           console.log("key d");
        } 
      
    }

    function up()
    {
      if(rover_y >= 0)
      {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       uploadBackground()
      uploadcar1()
      uploadcar2()  
      } 
    }

    function down()
    {
      if(rover_y <= 500)
      {
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       uploadBackground()
       uploadcar1()
       uploadcar2()      
      } 
    }

       
    function left()
    {
      if(rover_x >= 0)
      {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       uploadBackground()
       uploadcar1()
       uploadcar2()       
      } 
    }

    function right()
    {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       uploadBackground()
       uploadcar1()
       uploadcar2()     
      } 

      if (car1_x > 700)
      {
        console.log("car1 Won")
        document.getElementById('game_status').innerHTML = "Car 1 has won!!! (and car 2 sucks)";
      }
      
      if (car2_x > 700)
      {
        console.log("car2 Won")
        document.getElementById('game_status').innerHTML = "Car 2 has won!!! (and car 1 sucks)";  
      }
      