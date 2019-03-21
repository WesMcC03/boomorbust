
// Variables used
var number = 0;
var win = 0;
var total =0;
var loss = 0;
var itemvalue1 = 0;
var itemvalue2 = 0;
var itemvalue3 = 0;
var itemvalue4 = 0;

     






// Game Begins
$(document).ready(function() {   
    // Tallys Wins and Losses
    function scorecheck() {
        if (number === total) {
            win ++;
            $("#wins").html(win);
            console.log('This WORKED');
          
       } 

       else if (number < total) {
        loss ++;
        $("#losses").html(loss);
        console.log('This WORKED');
       }
      
    
    }


// Generates Random number value
    $('#randnum').on('click', function() {
        number = Math.floor(Math.random() * 120) + 19;
        $('#result').html(number);
        console.log(number)
        
    });
    // Generates button 1 value
    $('#button1').on('click', function() {
        var ether = 0;
        var itemvalue1 = Math.floor(Math.random() * 12) + 1;
        
        // Adds button one value to total
        total += (itemvalue1 + ether) ;
        $('#itemtotal').html(total);
        console.log(total);
         scorecheck();
        });
    // Generates button 2 value 
     $('#button2').on('click', function() {
        var HiPotion = 0;
        var itemvalue2 = Math.floor(Math.random() * 12) + 1;
        // Adds button 2 value to total
        total += (itemvalue2 + HiPotion) ;
        $('#itemtotal').html(total);
        console.log(itemvalue2);
        scorecheck();
        });
        
    // Generates button 3 value 
    $('#button3').on('click', function() {
        var Elixir = 0;
        var itemvalue3 = Math.floor(Math.random() * 12) + 1;
        // Adds button 3 value to total
        total += (itemvalue3 + Elixir) ;
        $('#itemtotal').html(total);
        console.log(itemvalue3);
        scorecheck();
        });
    // Generates button 4 value
    $('#button4').on('click', function() {
        var Materia = 0;
        var itemvalue4 = Math.floor(Math.random() * 12) + 1;
        // Adds button 4 value to total
        total += (itemvalue4 + Materia) ;
        $('#itemtotal').html(total);
        console.log(itemvalue4);
        
        });
            




    });

     
    
    
    
    




   


