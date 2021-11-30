let story = 0;
let form = document.getElementById('theAdventure');
let submit = document.getElementById('continueButton');
let reset = document.getElementById('resetButton');
let answer = '';

let story_telling = {
  "start": {
    "question": "You set out on an adventure. where would you like to go?",
    "answers": {
      "a": "forest",
      "b": "cave",
      "c": "mountain",
    }
  },
  // forest path
  "1_a": {
    "question": "you go to the forest and find a fairy. do you...",
    "answers": {
      "a": "ask her to join you",
      "b": "shoo her away",
      "c": "nod and keep moving",
    }
  },

  "2_a": {
    "question": "she accepts, you guys have fun",
  },
  "2_b": {
    "question": "she burns you down on the spot",
  },
  "2_c": {
"question": "the fairy tosses you gold and tells you to step ya game up",
  },

  //cave path
  
  "1_b": {
    "question": "you go to the cave and find a bear. do you...",
    "answers": {
      "d": "wake him an ask him to join you",
      "e": "try to skin him",
      "f": "back away let him sleep",
    }
  },
  "2_d": {
    "question": "he accepts, you guys have fun",
  },
  "2_e": {
    "question": "he eats you right on the spot",
  },
  "2_f": {
"question": "the bear respects ya game and tosses you a couple shillings",
  },

  //mountain paths
  "1_c": {
    "question": "you go up the mountain and find a mule deer. do you...",
    "answers": {
      "g": "ask it to join you",
      "h": "shoot at it and scare it away",
      "i": "rub one out as an offering",
    }
  },
  "2_g": {
    "question": "it accepts. eh, a mouths a mouth",
  },
  "2_h": {
    "question": "it spears you with magical shooting antlers",
  },
  "2_i": {
"question": "it eats the offering and leaves you gold for the tasty treat",
  }
};

//continue link
submit.addEventListener('mouseup', function() {
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
  if(answer){
    story++;
    populateForm(story + '_' + answer);
    console.log("story time");
  }
});

//reset buttonText

function resetForm() {
  document.getElementById("the adventure").reset();
}

//generate content for story answersNeeded
function populateForm(story){
  let current_story = story_telling[story];
  let text = '';

  for (let prop in current_story["answers"]) {
    if(current_story["answers"].hasOwnProperty(prop)) {
      text += '<label><input type="radio" name="answers" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';
    }
  }
  form.querySelector('p').innerHTML = current_story.question;
  form.querySelector('fieldset').innerHTML = text;
}

populateForm('start');
 