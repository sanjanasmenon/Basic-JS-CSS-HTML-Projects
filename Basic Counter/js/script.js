let numVal = 0;

const mainNum = document.getElementById("num");

/* Trying to optimize into one function */

const buttons = document.querySelectorAll(".btn");

/* What this is basically saying is for each button, let's call a function that will take 'buttons' 
as a parameter and will addEventListener; So in simple terms: 'buttons.ForEach' iterates through each
button, 'buttons =>' calls a function with the parameter of buttons; and the rest is the function call*/
buttons.forEach(button => {
    button.addEventListener("click", buttonAction);
});

function buttonAction(event)
{
    const styles = event.currentTarget.classList; /* I believe this gets a list of the classes attached to each 
    button element (since that's where the eventListener is attached) */

    if (styles.contains("inc")) /* Note about this line—the word in the quotations needs to be exactly the same 
    as the class List, it can't be a part of it or anything. It needs to be exact! */
    {
        numVal++;
        console.log("Hi");
    } else if (styles.contains("reset"))
    {
        numVal = 0;
        console.log("Hey");
    } else if (styles.contains("dec"))
    {
        numVal--;
        console.log("Hi");
    }
    mainNum.textContent = numVal;
    if(numVal > 0)
    {
        mainNum.style.color = "green";
    }
    else if (numVal < 0)
    {
        mainNum.style.color = "red";
    }
    else if (numVal == 0)
    {
        mainNum.style.color = "black";
    }
}

/*
Original attempt, works if expanded to include its own parts for the reset and decrease button (though I've since
changed some class names and id names so it probably needs some tweaking to fully work)

const increaseButton = document.getElementById("increase-btn");

increaseButton.addEventListener("click", increase);

function increase() 
{
    numVal++;
    mainNum.textContent = numVal;
    if (numVal > 0)
    {
        mainNum.style.color = "green";
    } else if (mainVal < 0)
    {
        mainNum.style.color = "red";
    }
}
*/
