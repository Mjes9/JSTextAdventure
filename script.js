let nam = prompt("What is your name?")
let welcome = `Welcome ${nam}! This is my game: Your Cat Is Missing!.`;
alert(welcome);

//alert("Welcome to my game: Your Cat Is Missing!");
let ans = prompt("Do you own a cat?");

if (ans == "yes" || ans == "Yes" || ans == "YES") {
    alert("Okay, good.");
} else {
    alert("Well, idk why you're here then, but whatever.")
}

let catTrust = 0
let hasCat = false
let dangerValue = 0
let cash = 100
 
let start = prompt("Press E to Start. Any other key to exit:");
if (start == "E") {
    alert("Today is Saturday, the 4th of March, and the perfect day that your cat's vet decided you should take your cat for a checkup. Buuut, you're really stupid and you make the mistake of being honest with your cat by telling it about the appointment. Your cat does some sneaky maneuvers (a few backflips, some defying of gravity, etc.) and manages to slip out of the house. OH NO, YOUR CAT IS MISSING! WHAT SHALL YOU DO?");
} else {
    alert("Goodbye!")
    throw new Error("Goodbye")
}
let ans1 = prompt("A. Find cat food and shake the container (You know your cat is way too smart to fall for that.)  B. Your cat's still in sight! Try to chase your cat down the street?").toUpperCase()


let ans2 = 0;
let ans3 = 0;
let ans4 = 0;
let ans5 = 0;

//Question 1
if (ans1 == "A") {
    alert("You find the cat food and shake the container outside while saying \"Here, kitty kitty!\"");

    alert("You accidentally attract something else instead.... A RACCOON! The raccoon becomes your new pet and you both live happily ever after! Wait, what was it you were looking for again...?");

    alert("Ending Unlocked: \"What's a cat?\"");
    throw new Error("Goodbye");
} else if (ans1 == "B") {
    alert("You chase your cat down the block. Your cat hops onto a tall fence and waves its paws tauntingly before jumping down on the other side into an alleyway. Dang it, you lost the cat! What now?");
//Question 2
    ans2 = prompt("A. Try to climb the fence?  B. BREAK IT DOWNNNNN!!!!!!");
    if (ans2 == "B") {
        alert("Uhhh oh.... Turns out that fence was private property! Now you're getting arrested. Maybe your cat will come back to bail you out of jail...? Probably not...");
        alert("Ending Unlocked: \"Kitty, I'm a criminal!\"");
        throw new Error("Goodbye");
    } else if (ans2 == "A") {
            alert("You successfully climb over the fence and spot your cat's tail swishing around the corner. You sneak around and notice your cat walking on two legs. \"What the heck is this? Garfield???\" What do you do???")
            dangerValue = 50

//Question 3
            ans3 = prompt("A. Confront your cat?  B. Continue to follow your cat in secret");

            if (ans3 == "A") {
            dangerValue = 100
            alert("You confront your cat. \"Kitty, what's going on? I knew you were smart, but this just isn't natural!!\"")
            alert("Your cat slowly turns its head 180 degrees to face you. \"You stupid stupid mortal! You have broken the laws of THE GREAT ORDER by seeing me this way! I have no other choice now but to DESTROY YOU! This is what you get for wanting to take me to the vet, anyway!\" Your cat levitates into the air and vaporizes you with a beam of light.");
            alert("Ending Unlocked: The Great Order");
        } else if (ans3 == "B") {
            dangerValue = 20
            alert("You follow your cat, and as it leaves the alleyway, you notice it return to walking on all fours. That was weird. You're pretty close to the cat now, though... What do you want to do?");

//Question 4
            ans4 = prompt("A. Try to talk it out with your cat?  B. Attempt to capture your cat and go to the vet.");

            if (ans4 == "A") {
                dangerValue = 10
                alert("\"Hey, Kitty! Wait, don't run! I promise the vet isn't going to hurt you, bro. Please can we just talk this out? I'll get you your favorite snack afterwards!\"")
                ans5 = prompt("Your cat turns around and looks at you. You almost think you hear a voice saying \"NO.\" echo in your mind. Your cat turns back around and keeps going. How will you convince your cat? A. Offer a deal your cat couldn't possibly resist.  B. Give up and cancel the appointment.")
                if (ans5 == "A") {
                    alert("You offer a deal...")
                    alert("\"Alright, Kitty, I have an idea. If you agree to go to the vet, we can form a brilliant plan together to embarrass him in front of his wife.\"")
                    alert("Your cat slowly turns back to look at you. It nods and starts walking to the vet. You walk alongside your cat as you form the plan. You sigh in relief. Finally.")
                    alert("You arrive just in time for the appointment. The veterinarian greets you and your cat with a smile. This feels wrong. But your cat looks... a little too happy about this plan.".italics())

                } else if (ans5 == "B") {
                    alert("")

                } else {
                    alert("Not an answer")
                    throw new Error("Goodbye")
                }

            } else if (ans4 == "B") {
                dangerValue = 1000
                alert("You reach out and grab your cat. Your cat is very VERY angry about this. The cat turns it's head 180 degrees and stares into your soul. Creeped out, you drop the cat.")
                alert("Your cat vanishes. You blink and notice you have been transported to a strange place...")
                alert("You are in a dark place, and as you observe your surroundings, your eyes start to adjust. You notice strange beings lurking in the shadows, and in front of you... Your cat. Staring with glowing red eyes.") 
                alert("The fear and shock in your body is overwhelming, but you stand your ground. This place is so quiet that you can hear your own staggered breathing and busy heart beat...");
            }

        } else {
            alert("Not an answer")
            throw new Error("Goodbye")
        }

        } 
        
    } else {
        alert("Not an answer")
        throw new Error("Goodbye")
    }
    
    
    //Question 3
    
    