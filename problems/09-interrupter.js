/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

set a function with an interrupting phrase ("what")
that function can take a sentence ("how are you")
in between every word, add the interrupting phrase => ("how what are what you")
that function can be called on a different sentence = ("I like pie") => ("I what like what pie")
***********************************************************************/

// Your code here

const interrupter = interruptingWord => {
    varName = interruptingWord; // "what"

    let interrupt = (sentence) => {

      //split the sentence into an array of words
      let words = sentence.split(" ");

      console.log(words); //['how', 'are', 'you']

      // make a new sentence, with the interrupting word in between each original word
      let newSentence = words.join(' ' + varName + ' ')
      //tempSentence => "how what are what you"
      return newSentence;
    }

  return interrupt;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
