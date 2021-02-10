//example 1

/*const mssgA = "Good day sir, what would you like to eat?";
const mssgB = "Oh, it's past meal time, would you like to rest?";
const mssgC = "How would you like to test our outdoor barbeque?";
const mssgD = "Yaaay!, you should check out our gym";
const mssgE = "Amazing, today is your lucky day. All meaals are free";

const messages = [mssgA, mssgB, mssgC, mssgD, mssgE];

const randomMessage = messages[Math.floor(Math.random() * 5)];

console.log(randomMessage);*/ 


//example 2
/*
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
    */


    function generateRandomNumber(num) {
        // Gets # from 0 -> num - 1
        return Math.floor(Math.random() * num)
      }
      
      const collectiveWisdom = {
        signInfo: ['star', 'moon', 'sun', 'comet'],
        fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
        advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
      }
      
      // Store the 'wisdom' in an array
      let personalWisdom = []
      
      // Iterate over the object
      for(let prop in collectiveWisdom) {
        let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
      
        // use the object's properties to customize the message being added to personalWisdom  
        switch(prop) {
          case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break
          case 'fortuneOutput':
            personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
            break
          case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
            break
          default:
            personalWisdom.push('There is not enough info.')
        }
      }
      
      function formatWisdom(wisdom) {
        // Add some ASCII here?
        // Add in more symbols to the array? like emojies or what not?
        const formatted = personalWisdom.join('\n')
        console.log(formatted)
      }
      
      formatWisdom(personalWisdom);
