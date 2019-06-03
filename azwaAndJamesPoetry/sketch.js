// Deterministic Poetry: Acrositc and Diastic
// Inspired by the work by poet Jackson Mac Low
// Azwa Alam and James Boswell
// 15th May 2019
//state the age sufferer despair season prophetic sunset
let srcText;
let words;
function preload() {
  //use preLoad to bring in source text from file. 
  srcText = loadStrings("sourceText.txt");
}

function setup() {
  createCanvas(500, 500);

  //Prepare the text. Since loaded Strings have each line from file as a separate element in the array, 
  //first, join() all the array elements together into one large string, separated by spaces.
  //second, split up that large string back into an array, using spaces and punctuation as the delimiters,
  //which yeilds and array where each element is an individual word from the source text.
  srcText = join(srcText, ' ');
  words = splitTokens(srcText, ' .,?!()');

  //UI Elements. A title, text field, and button.
  greeting = createElement('h2', 'Poetry Generator');
  greeting.position(20, 5);

  input = createInput();
  input.size(250, 15);
  input.position(20, 65);

  //When the Acrostic Button is pressed, the generateAcrostic() function will be called
  buttonAcrostic = createButton('Poem (Acrostic)');
  buttonAcrostic.position(input.x + input.width, 65);
  buttonAcrostic.mousePressed(generateAcrostic);

  //When the Acrostic Button is pressed, the generateDiastic() function will be called
  buttonDiastic = createButton('Poem (Diastic)');
  buttonDiastic.position(input.x + input.width + buttonAcrostic.width, 65);
  buttonDiastic.mousePressed(generateDiastic);

  //Border for textbook that encloses resulting poem
  rect(20, 100, 470, 370);

}

function drawBorder() {
  //small function to clear any previous poems from the screen, set up the text properties, and draw the border
  background(255);
  textSize(12);
  textAlign(LEFT);
  rect(20, 100, 470, 370);
}

function generateAcrostic() {
  let lastWord = "";
  let seedWord = input.value();
  let curLetter;
  let curWord;
  let poem = "";
  //Clear any old poem on the screen, and redraw border
  drawBorder();
  // Loops through all the words to find a match!
  // Loop through elements in an array
  for (let i = 0; i < seedWord.length; i++) {
    let curLetter = seedWord.charAt(i);
    print(curLetter);
    for (let j = 0; j < words.length; j++) {
      let curWord = words[j];
      if (curLetter === curWord.charAt(0)) {
        if (lastWord !== curWord) { // checks if curword is equal to the last word found
          poem += curWord + " "; //Adds the current word
          words.splice(i, 1);
          lastWord = curWord;
          break;
        }
      }
    }
  }
  text(poem, 25, 105, 430, 360);
  print(poem);
}


function generateDiastic() {
  let lastWord = ""; // defines lastword
  let seedWord = input.value();
  let curLetter;
  let curWord;
  let poem = "";
  //Clear any old poem on the screen, and redraw border
  // Loops through all the words to find a match
  // Loop through elements in an array
  drawBorder();
  for (let i = 0; i < seedWord.length; i++) {
    let curLetter = seedWord.charAt(i);
    print(curLetter);
    for (let j = 0; j < words.length; j++) {
      let curWord = words[j];
      if (curLetter === curWord.charAt(i)) {
        if (lastWord !== curWord) { // checks if curword is equal to the last word found
          poem += curWord + " ";
          words.splice(i, 1);
          lastWord = curWord; 
          break;
        }
      }
    }
  }
  text(poem, 25, 105, 430, 360);
  print(poem);
}
