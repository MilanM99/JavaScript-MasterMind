let inputSymbolFields = document.querySelectorAll(".input-symbol-fields-wrapper div");
let currentResultFields = document.querySelectorAll(".current-result-fields-wrapper div");
let symbolFields = document.querySelectorAll(".symbol-fields-wrapper div");
let timeLine = document.getElementById("time-line");
let resetButton = document.getElementById("reset-button");
let timeLine_interval;
let inputSymbolFields_clone = [];
let randomSymbols = [];
let randomSymbols_clone = [];
let symbolFields_counter = 0;
let redScore = 0;
let yellowScore = 0;
let universalSymbolArray_counter = 0;

function startTime()
{
	let pixel_counter = 0;
	    timeLine_interval = setInterval(function(){
		pixel_counter = pixel_counter + 3.18;
		timeLine.style.height = pixel_counter + "px";

		if(pixel_counter > 318)
		{
			clearInterval(timeLine_interval);
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			resetButton.innerHTML = "Time is up, combination is " + "<span>"+ randomSymbols[0] 
			+ " " + randomSymbols[1] + " " + randomSymbols[2] + " " +  randomSymbols[3] +"</span>" + ", click to restart the game";
		}
	},1000);
}
startTime();

function generateSymbolsRandomly()
{
	let symbols = ["@","♠","♣","♥","♦","★"];
 randomSymbols = [symbols[Math.floor(Math.random()*6)],symbols[Math.floor(Math.random()*6)],
						   symbols[Math.floor(Math.random()*6)],symbols[Math.floor(Math.random()*6)]];
}
generateSymbolsRandomly();

function trySymbol()
{
	let getSymbol = this.innerHTML;

	for(let i=0;i<inputSymbolFields.length;i++)
	{
		if(inputSymbolFields[i].innerHTML == "")
		{
			inputSymbolFields[i].innerHTML = getSymbol;
			symbolFields_counter++;
			checkSymbols();
			break;
		}
	}
}
for(let i=0;i<symbolFields.length;i++)
{
	symbolFields[i].onclick = trySymbol;
}

function checkSymbols()
{
	if(symbolFields_counter == 4)
	{
		for(let i=0;i<4;i++)
		{
			inputSymbolFields[i].style.pointerEvents = "none";
		}
		for(let i=0;i<4;i++)
		{
			inputSymbolFields_clone[universalSymbolArray_counter] = inputSymbolFields[i].innerHTML;
		 randomSymbols_clone[universalSymbolArray_counter] = randomSymbols[universalSymbolArray_counter];
			universalSymbolArray_counter++;
		}
		universalSymbolArray_counter = 0;
		for(let i=0;i<4;i++)
		{
			if(randomSymbols_clone[universalSymbolArray_counter] == inputSymbolFields_clone[universalSymbolArray_counter])
			{
			 randomSymbols_clone[universalSymbolArray_counter] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				universalSymbolArray_counter++;
				redScore++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		universalSymbolArray_counter = 0;

		for(let i=0;i<4;i++)
		{
			if(randomSymbols_clone.includes(inputSymbolFields_clone[universalSymbolArray_counter]))
			{
				let getIndex = randomSymbols_clone.indexOf(inputSymbolFields_clone[universalSymbolArray_counter]);
			 randomSymbols_clone[getIndex] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				yellowScore++;
				universalSymbolArray_counter++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		if(redScore == 4)
		{
			for(let i=0;i<4;i++)
			{
				currentResultFields[i].style.backgroundColor = "#ff0000";
			}
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "You won, click to restart for another win";
		}
		else
		{
			let redScore_counter = 0;
			let yellowScore_counter = 0;

			for(let i=0;i<4;i++)
			{
				if(redScore_counter < redScore)
				{
					currentResultFields[i].style.backgroundColor = "#ff0000";
					redScore_counter++;
				}
				else if(yellowScore_counter < yellowScore)
				{

					currentResultFields[i].style.backgroundColor = "#ffff00";
					yellowScore_counter++;

				}
				else
				{
					break;
				}
			}
		}
		redScore = 0;
		yellowScore = 0;
		universalSymbolArray_counter = 0;
	}
	else if(symbolFields_counter == 8)
	{
		for(let i=4;i<8;i++)
		{
			inputSymbolFields[i].style.pointerEvents = "none";
		}
		for(let i=4;i<8;i++)
		{
			inputSymbolFields_clone[universalSymbolArray_counter] = inputSymbolFields[i].innerHTML;
		 randomSymbols_clone[universalSymbolArray_counter] = randomSymbols[universalSymbolArray_counter];
			universalSymbolArray_counter++;
		}
		universalSymbolArray_counter = 0;
		for(let i=4;i<8;i++)
		{
			if(randomSymbols_clone[universalSymbolArray_counter] == inputSymbolFields_clone[universalSymbolArray_counter])
			{
			 randomSymbols_clone[universalSymbolArray_counter] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				universalSymbolArray_counter++;
				redScore++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		universalSymbolArray_counter = 0;

		for(let i=4;i<8;i++)
		{
			if(randomSymbols_clone.includes(inputSymbolFields_clone[universalSymbolArray_counter]))
			{
				let getIndex = randomSymbols_clone.indexOf(inputSymbolFields_clone[universalSymbolArray_counter]);
			 randomSymbols_clone[getIndex] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				yellowScore++;
				universalSymbolArray_counter++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		if(redScore == 4)
		{
			for(let i=4;i<8;i++)
			{
				currentResultFields[i].style.backgroundColor = "#ff0000";
			}
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "You won, click to restart for another win";
		}
		else
		{
			let redScore_counter = 0;
			let yellowScore_counter = 0;

			for(let i=4;i<8;i++)
			{
				if(redScore_counter < redScore)
				{
					currentResultFields[i].style.backgroundColor = "#ff0000";
					redScore_counter++;
				}
				else if(yellowScore_counter < yellowScore)
				{

					currentResultFields[i].style.backgroundColor = "#ffff00";
					yellowScore_counter++;

				}
				else
				{
					break;
				}
			}
		}
		redScore = 0;
		yellowScore = 0;
		universalSymbolArray_counter = 0;	
	}
	else if(symbolFields_counter == 12)
	{
		for(let i=8;i<12;i++)
		{
			inputSymbolFields[i].style.pointerEvents = "none";
		}
		for(let i=8;i<12;i++)
		{
			inputSymbolFields_clone[universalSymbolArray_counter] = inputSymbolFields[i].innerHTML;
		 randomSymbols_clone[universalSymbolArray_counter] = randomSymbols[universalSymbolArray_counter];
			universalSymbolArray_counter++;
		}
		universalSymbolArray_counter = 0;
		for(let i=8;i<12;i++)
		{
			if(randomSymbols_clone[universalSymbolArray_counter] == inputSymbolFields_clone[universalSymbolArray_counter])
			{
			 randomSymbols_clone[universalSymbolArray_counter] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				universalSymbolArray_counter++;
				redScore++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		universalSymbolArray_counter = 0;

		for(let i=8;i<12;i++)
		{
			if(randomSymbols_clone.includes(inputSymbolFields_clone[universalSymbolArray_counter]))
			{
				let getIndex = randomSymbols_clone.indexOf(inputSymbolFields_clone[universalSymbolArray_counter]);
			 randomSymbols_clone[getIndex] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				yellowScore++;
				universalSymbolArray_counter++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		if(redScore == 4)
		{
			for(let i=8;i<12;i++)
			{
				currentResultFields[i].style.backgroundColor = "#ff0000";
			}
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "You won, click to restart for another win";
		}
		else
		{
			let redScore_counter = 0;
			let yellowScore_counter = 0;

			for(let i=8;i<12;i++)
			{
				if(redScore_counter < redScore)
				{
					currentResultFields[i].style.backgroundColor = "#ff0000";
					redScore_counter++;
				}
				else if(yellowScore_counter < yellowScore)
				{

					currentResultFields[i].style.backgroundColor = "#ffff00";
					yellowScore_counter++;

				}
				else
				{
					break;
				}
			}
		}
		redScore = 0;
		yellowScore = 0;
		universalSymbolArray_counter = 0;
	}
	else if(symbolFields_counter == 16)
	{
		for(let i=12;i<16;i++)
		{
			inputSymbolFields[i].style.pointerEvents = "none";
		}
		for(let i=12;i<16;i++)
		{
			inputSymbolFields_clone[universalSymbolArray_counter] = inputSymbolFields[i].innerHTML;
		 randomSymbols_clone[universalSymbolArray_counter] = randomSymbols[universalSymbolArray_counter];
			universalSymbolArray_counter++;
		}
		universalSymbolArray_counter = 0;
		for(let i=12;i<16;i++)
		{
			if(randomSymbols_clone[universalSymbolArray_counter] == inputSymbolFields_clone[universalSymbolArray_counter])
			{
			 randomSymbols_clone[universalSymbolArray_counter] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				universalSymbolArray_counter++;
				redScore++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		universalSymbolArray_counter = 0;

		for(let i=12;i<16;i++)
		{
			if(randomSymbols_clone.includes(inputSymbolFields_clone[universalSymbolArray_counter]))
			{
				let getIndex = randomSymbols_clone.indexOf(inputSymbolFields_clone[universalSymbolArray_counter]);
			 randomSymbols_clone[getIndex] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				yellowScore++;
				universalSymbolArray_counter++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		if(redScore == 4)
		{
			for(let i=12;i<16;i++)
			{
				currentResultFields[i].style.backgroundColor = "#ff0000";
			}
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "You won, click to restart for another win";
		}
		else
		{
			let redScore_counter = 0;
			let yellowScore_counter = 0;

			for(let i=12;i<16;i++)
			{
				if(redScore_counter < redScore)
				{
					currentResultFields[i].style.backgroundColor = "#ff0000";
					redScore_counter++;
				}
				else if(yellowScore_counter < yellowScore)
				{

					currentResultFields[i].style.backgroundColor = "#ffff00";
					yellowScore_counter++;

				}
				else
				{
					break;
				}
			}
		}
		redScore = 0;
		yellowScore = 0;
		universalSymbolArray_counter = 0;
	}
	else if(symbolFields_counter == 20)
	{
		for(let i=16;i<20;i++)
		{
			inputSymbolFields[i].style.pointerEvents = "none";
		}
		for(let i=16;i<20;i++)
		{
			inputSymbolFields_clone[universalSymbolArray_counter] = inputSymbolFields[i].innerHTML;
		 randomSymbols_clone[universalSymbolArray_counter] = randomSymbols[universalSymbolArray_counter];
			universalSymbolArray_counter++;
		}
		universalSymbolArray_counter = 0;
		for(let i=16;i<20;i++)
		{
			if(randomSymbols_clone[universalSymbolArray_counter] == inputSymbolFields_clone[universalSymbolArray_counter])
			{
			 randomSymbols_clone[universalSymbolArray_counter] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				universalSymbolArray_counter++;
				redScore++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		universalSymbolArray_counter = 0;

		for(let i=16;i<20;i++)
		{
			if(randomSymbols_clone.includes(inputSymbolFields_clone[universalSymbolArray_counter]))
			{
				let getIndex = randomSymbols_clone.indexOf(inputSymbolFields_clone[universalSymbolArray_counter]);
			 randomSymbols_clone[getIndex] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				yellowScore++;
				universalSymbolArray_counter++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		if(redScore == 4)
		{
			for(let i=16;i<20;i++)
			{
				currentResultFields[i].style.backgroundColor = "#ff0000";
			}
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "You won, click to restart for another win";
		}
		else
		{
			let redScore_counter = 0;
			let yellowScore_counter = 0;

			for(let i=16;i<20;i++)
			{
				if(redScore_counter < redScore)
				{
					currentResultFields[i].style.backgroundColor = "#ff0000";
					redScore_counter++;
				}
				else if(yellowScore_counter < yellowScore)
				{

					currentResultFields[i].style.backgroundColor = "#ffff00";
					yellowScore_counter++;

				}
				else
				{
					break;
				}
			}
		}
		redScore = 0;
		yellowScore = 0;
		universalSymbolArray_counter = 0;
	}
	else if(symbolFields_counter == 24)
	{
		for(let i=20;i<24;i++)
		{
			inputSymbolFields[i].style.pointerEvents = "none";
		}
		for(let i=20;i<24;i++)
		{
			inputSymbolFields_clone[universalSymbolArray_counter] = inputSymbolFields[i].innerHTML;
		 randomSymbols_clone[universalSymbolArray_counter] = randomSymbols[universalSymbolArray_counter];
			universalSymbolArray_counter++;
		}
		universalSymbolArray_counter = 0;
		for(let i=20;i<24;i++)
		{
			if(randomSymbols_clone[universalSymbolArray_counter] == inputSymbolFields_clone[universalSymbolArray_counter])
			{
			 randomSymbols_clone[universalSymbolArray_counter] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				universalSymbolArray_counter++;
				redScore++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		universalSymbolArray_counter = 0;

		for(let i=20;i<24;i++)
		{
			if(randomSymbols_clone.includes(inputSymbolFields_clone[universalSymbolArray_counter]))
			{
				let getIndex = randomSymbols_clone.indexOf(inputSymbolFields_clone[universalSymbolArray_counter]);
			 randomSymbols_clone[getIndex] = "none1";
				inputSymbolFields_clone[universalSymbolArray_counter] = "none2";
				yellowScore++;
				universalSymbolArray_counter++;
			}
			else
			{
				universalSymbolArray_counter++;
			}
		}
		if(redScore == 4)
		{
			for(let i=20;i<24;i++)
			{
				currentResultFields[i].style.backgroundColor = "#ff0000";
			}
			for(let i=0;i<inputSymbolFields.length;i++)
			{
				inputSymbolFields[i].style.pointerEvents = "none";
			}
			for(let i=0;i<symbolFields.length;i++)
			{
				symbolFields[i].style.pointerEvents = "none";
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "You won, click to restart for another win";
		}
		else
		{
			let redScore_counter = 0;
			let yellowScore_counter = 0;

			for(let i=20;i<24;i++)
			{
				if(redScore_counter < redScore)
				{
					currentResultFields[i].style.backgroundColor = "#ff0000";
					redScore_counter++;
				}
				else if(yellowScore_counter < yellowScore)
				{

					currentResultFields[i].style.backgroundColor = "#ffff00";
					yellowScore_counter++;

				}
				else
				{
					break;
				}
			}
			clearInterval(timeLine_interval);
			resetButton.innerHTML = "Game over, the combination is " + "<span>"+ randomSymbols[0] 
			+ " " + randomSymbols[1] + " " + randomSymbols[2] + " " +  randomSymbols[3] +"</span>" + ", click to restart the game";
		}
		redScore = 0;
		yellowScore = 0;
		universalSymbolArray_counter = 0;
	}
}

function removeSymbol()
{
	if(this.innerHTML != "")
	{
		this.innerHTML = "";
		symbolFields_counter--;
	}
}
for(let i=0;i<inputSymbolFields.length;i++)
{
	inputSymbolFields[i].onclick = removeSymbol;
}

function reset()
{
	window.location.reload();
}
resetButton.onclick = reset;