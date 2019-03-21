

var number = 0;
var win = 0;
var total =0;
var loss = 0;
var itemvalue1 = 0;
var itemvalue2 = 0;
var itemvalue3 = 0;
var itemvalue4 = 0;

     





// Generates Random number into "Result" ID and button values.

$(document).ready(function() {   

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


    $('#randnum').on('click', function() {
        number = Math.floor(Math.random() * 120) + 19;
        $('#result').html(number);
        console.log(number)
        
    });
    
    $('#button1').on('click', function() {
        var ether = 0;
        var itemvalue1 = Math.floor(Math.random() * 12) + 1;
        

        total += (itemvalue1 + ether) ;
        $('#itemtotal').html(total);
        console.log(total);
         scorecheck();
        });

     $('#button2').on('click', function() {
        var HiPotion = 0;
        var itemvalue2 = Math.floor(Math.random() * 12) + 1;
        
        total += (itemvalue2 + HiPotion) ;
        $('#itemtotal').html(total);
        console.log(itemvalue2);
        });
        

    $('#button3').on('click', function() {
        var Elixir = 0;
        var itemvalue3 = Math.floor(Math.random() * 12) + 1;
        
        total += (itemvalue3 + Elixir) ;
        $('#itemtotal').html(total);
        console.log(itemvalue3);
        });

    $('#button4').on('click', function() {
        var Materia = 0;
        var itemvalue4 = Math.floor(Math.random() * 12) + 1;
        
        total += (itemvalue4 + Materia) ;
        $('#itemtotal').html(total);
        console.log(itemvalue4);
        });
            




    });

     
    
    
    
    




   


