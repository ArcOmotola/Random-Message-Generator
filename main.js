//approach 1

/*const mssgA = "Good day sir, what would you like to eat?";
const mssgB = "Oh, it's past meal time, would you like to rest?";
const mssgC = "How would you like to test our outdoor barbeque?";
const mssgD = "Yaaay!, you should check out our gym";
const mssgE = "Amazing, today is your lucky day. All meaals are free";

const messages = [mssgA, mssgB, mssgC, mssgD, mssgE];

const randomMessage = messages[Math.floor(Math.random() * 5)];

console.log(randomMessage);*/ 

//approach 2

const messages = {
    mssg1 : "Good day sir, what would you like to eat?",
    mssg2 : "Oh, it's past meal time, would you like to rest?",
    mssg3 : "How would you like to test our outdoor barbeque?",
    mssg4 : "Yaaay!, you should check out our gym",
    mssg5 : "Amazing, today is your lucky day. All meaals are free"
};

    const keys = Object.keys(messages);
    const randomMessage = messages[keys[ (Math.floor(Math.random() * 5)) ]];
    console.log(randomMessage);



