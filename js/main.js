// array of objects to store zodiac data
var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.png",
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.png"
	}
];
// this code makes it so the enter key starts the function
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

// function to determine user horoscope, function fires on user clicking button line 24 index.html
function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata");
	// confirm the element exists and what value the user submits
	console.log(userdata);
	console.log("users value is: " + userdata.value);
	// loop through zodiac array one item at a time
	for(var i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);
		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran");
			// check some values in the console before updating HTML
			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].fortune);
			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image;
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].fortune;
      // make the image element re-appear after hiding it in the css
      document.getElementById('icon').className = "";
			// stop the function because we found a match and added the data to the screen
			return;
		};

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "img/...";
	};

};
