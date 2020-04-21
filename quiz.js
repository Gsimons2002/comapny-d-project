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


var total = [0, 0, 0, 0, 0, 0];
var totalNames = [{
    name: "Professionalism",
    description: "You keep everything in order, get your job done and dosn't screw around."
  },
  {
    name: "Empathy",
    description: "You have the ability to feel and\/or relate to others emotions. You are someone who can help others in need when they need it"
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
