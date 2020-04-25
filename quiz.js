// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt.
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

//Lust, Gluttony, Greed, Sloth, Wrath, Envy, Pride

// Professionalism, Empathy, Innovation, Optimism, Intgrity, Perseverance. this is the order of the weight
var prompts = [{
    prompt: 'You follow orders given to you thoroughly, no questions ask.',
    weight: [5, -1, 0, 0, -1, 2],
    class: 'group0'
  },
  {
    prompt: 'You see someone emotionaly hurt, you stop working and help them.',
    weight: [-1, 5, 0, 2, 2, -3],
    class: 'group1'
  },
  {
    prompt: 'Your website has a bug in it, so you use premade code rather than creating it from scratch.',
    weight: [1, 0, 5, 0, 0, 2],
    class: 'group2'
  },
  {
    prompt: 'You and your team lost during a esport match, but you walk away with a smile knowing you had fun.',
    weight: [0, 2, 1, 5, 2, 1],
    class: 'group3'
  },
  {
    prompt: 'Your best freind stole from your comapny, so you report him to the cops.',
    weight: [1, -1, 0, -1, 5, 0],
    class: 'group4'
  },
  {
    prompt: 'You are giving 3 weeks worth of work to do in one week, so you spend the next few sleepless nights getting it done, ignoring everyone in the process.',
    weight: [2, -1, 1, 0, 0, 5],
    class: 'group5'
  },
	{
		prompt: 'When given a choice to support your company or a charity with free money, you choice charity.',
		weight: [0, 3, 0, 1, 3, 0],
		class: 'group6'
	},
	{
		prompt: 'Your office doesn\'t have pencil sharpener, so you use a knife to sharpen it',
		weight: [-1, 0, 4, 0, 0, 2],
		class: 'group7'
	},
	{
		prompt: 'Yor charity need you to  work from home, you do it with a smile.',
		weight: [2, 1, 0, 3, 2, 1],
		class: 'group8'
	},
	{
		prompt: 'Your freind, who is failing the class, ask for the answers on a quiz, you don\'t give it to him.',
		weight: [1, -3, 0, -1, -1, 0],
		class: 'group9'
	}
]

// This array stores all of the possible values and the weight associated with the value.
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [{
		value: 'Strongly Agree',
		class: 'btn-default btn-strongly-agree',
		weight: 5
	},
	{
		value: 'Agree',
		class: 'btn-default btn-agree',
		weight: 3,
	},
	{
		value: 'Neutral',
		class: 'btn-default',
		weight: 0
	},
	{
		value: 'Disagree',
		class: 'btn-default btn-disagree',
		weight: -3
	},
	{
		value: 'Strongly Disagree',
		class: 'btn-default btn-strongly-disagree',
		weight: -5
	}
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {

// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = [0, 0, 0, 0, 0, 0];
var totalNames = [{
    name: "Professionalism",
    description: "You keep everything in order, get your job done and dosn't screw around. Everything you say and do is all based on you job when at work. You are effective with time management."
  },
  {
    name: "Empathy",
    description: "You have the ability to feel and\/or relate to others emotions. You are someone who can help others in need when they need it. "
  },
  {
    name: "Innovation",
    description: "You are a problem solver, who can create or find to solutions better than most. You see a problem and run, you try to solve it."
  },
  {
    name: "Optimism",
    description: "You stay positive and keep others happy, even when things are going bad. You don't let anything keep you from being happy and spreading it to others. You can see light and oppertunity when others see darkness and uselessness."
  },
  {
    name: "Intgrity",
    description: "You are honest and are driven by good morals. You don't do good for you own self gain, but our the goodness of your heart."
  },
  {
    name: "Perseverance",
    description: "You are determine to get your goal done, no matter what comes your way. You will find solutions to problems so that you meet your end goal. You are filled with determination"
  }
]

// Get the weight associated to group number
function findPromptWeight(prompts, group, matchingIndex) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight[matchingIndex];
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function() {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		for (let i = 0; i < total.length; i++) {
			total[i] -= findPromptWeight(prompts, this_group, i) * findValueWeight(prompt_values, $(this).text())
		}
		//total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {
		// $('[class='thisgroup).prop('checked', false);
		for (let i = 0; i < total.length; i++) {
			total[i] -= (findPromptWeight(prompts, this_group, i) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
		}
		// console.log($('.'+this_group+'.active').text());
		$('.' + this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		for (let i = 0; i < total.length; i++) {
			total[i] += (findPromptWeight(prompts, this_group, i) * findValueWeight(prompt_values, $(this).text()));
		}
	}

	console.log(total);
})



$('#submit-btn').click(function() {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	var sortable = [];
	for (let i = 0; i < total.length; i++) {
		sortable.push([total[i], totalNames[i]])
	}
	sortable.sort(function(a, b) {
		return b[0] - a[0];
	})
	console.log(sortable);

	document.getElementById('results').innerHTML = '<h1>' + sortable[0][1].name + '</h1>' + sortable[0][1].description

	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function() {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})
