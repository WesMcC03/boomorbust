$( document ).ready(function() {
    console.log( "document loaded" );
});

var total = [];



// Generates Random number into "Result" ID.

$(document).ready(function() {   

    $('#randnum').on('click', function() {
        var number = Math.floor(Math.random() * 120) + 19;
        $('#result').html(number);
    });
    
    $('#button1').on('click', function() {
        var itemtotal = 0;
        var itemvalue = Math.floor(Math.random() * 12) + 1;
        console.log(itemvalue);
     });

     $('#button2').on('click', function() {
        var itemvalue = Math.floor(Math.random() * 12) + 1;
        
        total += (itemvalue[i].innerHTML)
        $('#itemtotal').html(total);
        console.log(itemvalue);
        });
        

       
     });

     $('#button3').on('click', function() {
        var itemtotal = 0;
        var itemvalue = Math.floor(Math.random() * 12) + 1;
        
        console.log(itemvalue);
     });

     $('#button4').on('click', function() {
        var itemtotal = 0;
        var itemvalue = Math.floor(Math.random() * 12) + 1;
        console.log(itemvalue);
     });

     
    
    
    
    




   


