

//Function for startprocess starts here.
var computernumber=0;
var userplayed=0;

function startprocess( _jQuery ) 
{
    
    //logs how many users played the game.
    userplayed++;
    //imgsrcarray used to store the images.    
    var imgsrcarray=["<img src= assets/images/363806.png  height=80 width=80/>","<img src= assets/images/363838.png  height=80 width=80/>","<img src= assets/images/363844.png  height=80 width=80/>","<img src= assets/images/363874.png  height=80 width=80/>"]
    //Generting Computer random number.
     computernumber=Math.floor(Math.random()*110+19);
    // var elementnumber= $("#randomnumber");
    //getting the <p> tag and adding the text value to it.
    $("#randomnumber").text("Random Number :"+" "+computernumber)
    //assigning the value of button 
    
    var buttondisplay=$("#buttons");
    console.log(buttondisplay);
    buttondisplay.addClass("dynamicbutton");
   
    var gemrandom=0;
    //dynmically genertaing buttons
    for(var i=0;i<imgsrcarray.length;i++)
        {
            gemrandom=Math.floor(Math.random()*10+2);
            var button=$("<button>");
            //adding the class, attribue and css height and width to the button
            //setter function
            button.attr({
                "class":'gem-button',
                "data-random":gemrandom
            });
            button.attr("gembutton");
            button.css("width", 100);
            button.css("height",100);   
            button.append(imgsrcarray[i]);
            buttondisplay.append(button);
        }
    //create a new display for the result, whenever a gem clicked.
         var resultdisplay=$("<p>");
        resultdisplay.addClass("display");
        resultdisplay.attr("rdisplay");
        buttondisplay.append(resultdisplay);
}
    //creating  of code for onclick for the gems.
    var wins=0;
    var loss=0;
    var previous=0;
    var score=0;
    $(document).on("click",".gem-button",function() 
    {
       
        
        var num=parseInt($(this).attr('data-random'));
        console.log("num---"+num);
        previous+=num;
        console.log("previous---"+previous);
        $("#result").text(previous);
        if(previous>computernumber)
        {
            loss++;
            console.log("You lost"+loss);

            $("#lose").text("Losses :"+" "+loss);
            $("#wins").text("Wins :"+" "+wins);
            console.log("You wins"+wins);

            $("#tscorediplay").text("Score :"+" "+previous);
            $("#winsandloss").text("Wins or Loss Score: Lost the Last Game ");
            console.log("score"+previous);
            console.log("Number of users played "+userplayed);
            console.log("You lost");
            reset();
            startprocess();
           
        }
        else if(previous===computernumber)
        {
           
            wins++;
            $("#wins").text("Wins :"+" "+wins);
            console.log("You wins"+wins);
            $("#lose").text("Losses :"+" "+loss);
            $("#winsandloss").text("Wins or Loss Score : Won the Last Game ");
            console.log("You lost"+loss);
            $("#tscorediplay").text("Score :"+" "+previous);
            console.log("score"+previous);
            console.log("you win");
            console.log("Number of users played "+userplayed);
            reset();
            startprocess();
        }

    });


    //for resetting the value of the page.
    var reset= function(){
        $("#randomnumber").text("Random Number :"+" ");
        //$(".gem-button").empty();
        $(".dynamicbutton").empty();
        // $("#wins").text("Wins :"+" ");
        // $("#lose").text("Losses :"+" ");
       // $("tscorediplay").text("Score :"+"");
         $("#result").text("");
          previous=0;
    }
$(document).ready(function() 
 {
    startprocess();
 });

