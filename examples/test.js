import ProfMod from "../app.js";


const profaneSentence = "Fuck this shitty, goddamn mess of a situation, because every stupid, dumbass decision made by these incompetent bastards has turned the whole fucking project into a complete clusterfuck, and I'm tired of listening to their bullshit excuses, their arrogant crap, their endless whining, and their ridiculous nonsense while every lazy-ass motherfucker keeps pretending that everything is perfectly fine when it's obviously a massive pile of horseshit.";


const moderatedSentence = new ProfMod(profaneSentence);

// Test if there are profane words in original sentence (test())
const verify = moderatedSentence.test();
console.log(verify); // True


// List all the profane words from the sentnece (show())
const badWords = moderatedSentence.show();
console.log(badWords);  //['fuck', 'crap', 'motherfucker', ...]


// Sanitize it all hide all the profane words (sanitize())
const cleanedSentence = moderatedSentence.sanitize();
console.log(cleanedSentence);

// *** this *** *** mess of a situation, because every stupid, *** decision made by these incompetent bastards has turned the whole *** project into a complete *** and I'm tired of listening to their *** excuses, their arrogant *** their endless whining, and their ridiculous nonsense while every lazy-ass *** keeps pretending that everything is perfectly fine when it's obviously a massive pile of ***


