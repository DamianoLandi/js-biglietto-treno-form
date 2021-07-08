console.log("ok");

//Raccolta Variabili

var nameInput = document.getElementById("name");

var kmsInput = document.getElementById("kms");

var ageInput = document.getElementById("age");

var generate = document.getElementById("generate");

var reset = document.getElementById("reset");

var nameDisplay = document.getElementById("name-display");

var ageDisplay = document.getElementById("age-display");

var discountDisplay = document.getElementById("discount");

var carDisplay = document.getElementById("car-display");

var codeDisplay = document.getElementById("code-display");

var priceToFixed = document.getElementById("price-display");

//Calcoli al Click

generate.addEventListener("click", function(){

    console.log("click");

    nameDisplay.innerHTML = nameInput.value;

    ageDisplay.innerHTML = ageInput.value;

    if (ageInput.value === "Minorenne"){

        discountDisplay.innerHTML = "20%";

        var price = kmsInput.value * 0.21 * 0.8;

    }else if (ageInput.value === "Over-65"){

        discountDisplay.innerHTML = "40%";

        var price = kmsInput.value * 0.21 * 0.6;

    }else{
        
        discountDisplay.innerHTML = "Nessuno";

        var price = kmsInput.value * 0.21;

    };

    carDisplay.innerHTML = Math.floor((Math.random() * 12) + 1);

    codeDisplay.innerHTML = Math.floor((Math.random() * 9999) + 90000);

    priceToFixed.innerHTML = price.toFixed(2);
    
});

//Reset degli Input

reset.addEventListener("click", function(){
    
    nameInput.value = "";

    kmsInput.value = "";

    ageInput.value = "Minorenne";

});
