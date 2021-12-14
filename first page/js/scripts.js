let count = 1, result = 0;
$(document).ready(function(){

    //What is shown when page is first loaded.
    $("#delassignment").hide();
    $("#result").show();

    //Adds assignment row.
    $("#addassignment").click(function(){
        $("#inputrow").clone().appendTo( "#here" );
        $("#delassignment").show();
        count++;
    });

    //Deletes one assignment row, if there is one row left,
    //remove the delete button.
    $("#delassignment").click(function(){
       if(count<1)
           return;
        else 
        $("#here").children("#inputrow").last().remove();
       count--;
       if(count==1)
       $("#delassignment").hide();
    });

    //Once the submit button is clicked and entered,
    //we take the data provided and run the calculation.
    $("#submit").click(function(){
        
        //if one required field is not filled, reset
        if(calculate(count) == 0)
        $("#percent").text(" 0.0% ");
        //if all is good, continue with calculation

        else
        $("#percent").text(calculate(count) + "%");

    });

function findSum(a,b){
    //Add both parameters
    return a+b;
}

function findProduct(c,d){
    //Multiply both parameters
    return c*d;
}

function calculate(order){  
//The calculation: (grade*weight) + (grade*weight).../always out of 100
let gone = false, result = 0, sum = 0;
//if not, do calculation
    while (order>0){
        //if null, return 0.
    if($("input").filter("#grade").eq(order-count).val() == "" || $("input").filter("#weighting").eq(order-count).val() == "")
        return 0;

        if(order == 1 && !gone){
        sum = ( findProduct($("input").filter("#grade").eq(order-count).val(), 
       $("input").filter("#weighting").eq(order-count).val()) );
        }
        else{ 
            gone = true;
        sum = sum + ( findProduct($("input").filter("#grade").eq(order-count).val(), 
       $("input").filter("#weighting").eq(order-count).val()) );
        }
        order--;
    }


result = sum/100;
    return result;
}



  });
