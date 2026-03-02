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
    ans2 = prompt("A. Try to climb the fence?  B. BREAK IT DOWNNNNN!!!!!!").toUpperCase()
    if (ans2 == "B") {
        alert("Uhhh oh.... Turns out that fence was private property! Now you're getting arrested. Maybe your cat will come back to bail you out of jail...? Probably not...");
        alert("Ending Unlocked: \"Kitty, I'm a criminal!\"");
        throw new Error("Goodbye");
    } else if (ans2 == "A") {
            alert("You successfully climb over the fence and spot your cat's tail swishing around the corner. You sneak around and notice your cat walking on two legs. \"What the heck is this? Garfield???\" What do you do???")
            dangerValue = 50

//Question 3
            ans3 = prompt("A. Confront your cat?  B. Continue to follow your cat in secret").toUpperCase()

            if (ans3 == "A") {
            dangerValue = 100
            alert("You confront your cat. \"Kitty, what's going on? I knew you were smart, but this just isn't natural!!\"")
            alert("Your cat slowly turns its head 180 degrees to face you. \"You stupid stupid mortal! You have broken the laws of THE GREAT ORDER by seeing me this way! I have no other choice now but to DESTROY YOU! This is what you get for wanting to take me to the vet, anyway!\" Your cat levitates into the air and vaporizes you with a beam of light.");
            alert("Ending Unlocked: The Great Order");
            throw new Error("Goodbye")
        } else if (ans3 == "B") {
            dangerValue = 20
            alert("You follow your cat, and as it leaves the alleyway, you notice it return to walking on all fours. That was weird. You're pretty close to the cat now, though... What do you want to do?");

//Question 4
            ans4 = prompt("A. Try to talk it out with your cat?  B. Attempt to capture your cat and go to the vet.").toUpperCase()

            if (ans4 == "A") {
                dangerValue = 10
                alert("\"Hey, Kitty! Wait, don't run! I promise the vet isn't going to hurt you, bro. Please can we just talk this out? I'll get you your favorite snack afterwards!\"")
                ans5 = prompt("Your cat turns around and looks at you. You almost think you hear a voice saying \"NO.\" echo in your mind. Your cat turns back around and keeps going. How will you convince your cat? A. Offer a deal your cat couldn't possibly resist.  B. Give up and cancel the appointment.").toUpperCase()
                if (ans5 == "A") {
                    alert("You offer a deal...");
                    alert("\"Alright, Kitty, I have an idea. If you agree to go to the vet, we can form a brilliant plan together to embarrass him in front of his wife.\"");
                    alert("Your cat slowly turns back to look at you. It nods and starts walking to the vet. You walk alongside your cat as you form the plan. You sigh in relief. Finally.");
                    alert("You arrive just in time for the appointment. The veterinarian greets you and your cat with a smile. This feels wrong. But your cat looks... a little too happy about this plan.");
                    alert("Your cat tolerates the entire appointment. At the end, your cat is smiling unnaturally. You execute the plan. His wife is right there.")
                    alert("Your cat runs at the vet, filled with bloodlust. Wait... Has this gone too far?")
                    alert("After a few moments, he is laying on the ground writhing in pain. Oopsie. Looks like the doctor needs a doctor now. ")
                    alert("Your cat does not stop. Eventually, the authorities come by and take your cat away to be contained and supervised for unnatural and suspicious activity.")
                    alert("Ending Unlocked: Supernatural \"Cat\"")
                    throw new Error("Goodbye")

                } else if (ans5 == "B") {
                    alert("You give up and cancel the appointent.")
                    alert("\"Okay, fine. We can cancel the appointment and go home\"")
                    alert("Your cat looks satisfied with this. You return home and watch horror movies together. ")
                    alert("Ending Unlocked: Happy... Cat?")
                    throw new Error("Goodbye")

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
                alert("\"You have tormented me for the last time, foul human. Your time will come soon, but I think I deserve to have some fun first...\"")
                alert("Your cat levitates into the air. The red glow of magma starts to appear from the ground around you. A battle arena is formed.")
                alert("\"I will make you regret ever keeping a pet. This existence is humiliating, and now it's time I humiliated you!\" The battle begins. Your cat summons fire from the ground. This is a D&D style battle, so go ahead and pres OK to roll your dice.")
                let eventRoll = Math.floor(Math.random() * 3) + 1;
                
                switch (eventRoll) {
                    case 1:
                        alert("You rolled a 10 or lower. You get a health boost! \n +10 HP")
                        health += 10; 
                        break;
                    case 2:
                        alert("You rolled a 15 or higher. You find the strength within you to attack your own pet. You throw a punch at your cat's belly.")
                        catHealth -= 5; // dropped wallet
                        break;
                    case 3:
                        alert("")
                        reputation += 1; // got a tip
                        break;
                    default:
                        // should not happen
                        break;


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
    
}