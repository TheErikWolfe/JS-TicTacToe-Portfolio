// currentEntry is the entry that is currently going i.e. X/O
var currentEntry = 'X';

var btnAr = [];

function formArray()
{
	btnAr.splice(0, btnAr.length);
	for(var i = 0; i < 3; i++)
	{
		btnAr.push([]);
		for(var j = 0; j < 3; j++)
		{
			btnAr[i].push(' ');
			document.getElementById('bp-' + i + '-' + j).innerHTML = '&nbsp';
		}
	}
}

document.onreadystatechange = function()
{
	if(document.readyState == 'interactive')
	{
		document.getElementById('again').addEventListener("click", ButtonLogic);
		var buttons = document.getElementsByClassName("btn-props");
		for(var i = 0; i < buttons.length; i++)
		{
			buttons[i].addEventListener("click", ButtonLogic);
		}
		formArray();
	}
};

function ButtonLogic(evt)
{
	var BtnEntry = evt.target.id;
	console.log(document.getElementById(BtnEntry).innerHTML);
	
	if(BtnEntry === 'again')
	{
		currentEntry = 'X';
		
		formArray();
		document.getElementById('again').style.display = 'none';
		document.getElementById('winner').style.display = 'none';
		document.getElementById('tttBoard').style.display = 'block';
	}
	else{
		var pos = BtnEntry.split('-');

		if(btnAr[Number(pos[1])][Number(pos[2])] === ' ')
		{

			document.getElementById(BtnEntry).innerHTML = currentEntry;
			btnAr[Number(pos[1])][Number(pos[2])] = currentEntry;

			checkForWinner();

			if(currentEntry == 'X')
			{
				currentEntry = 'O';
			}
			else
			{
				currentEntry = 'X';
			}
			
		}
	}
	console.log(document.getElementById(BtnEntry).innerHTML);
}

function checkForWinner()
{
	var counter = 0;
	for(var i = 0; i < btnAr.length; i++)
	{
		if((btnAr[i][0] == currentEntry && btnAr[i][1] == currentEntry && btnAr[i][2] == currentEntry)
			|| (btnAr[0][i] == currentEntry && btnAr[1][i] == currentEntry && btnAr[2][i] == currentEntry))
		{
			winner();
		}
		for(var j = 0; j < btnAr[i].length; j++)
		{
			if(btnAr[i][j] == 'X' || btnAr[i][j] == 'O')
			{
				counter++;
			}
		}
	}
	/*if(btnAr[0][0] == currentEntry && btnAr[1][0] == currentEntry && btnAr[2][0] == currentEntry)
	{
		winner();
	}
	else if(btnAr[0][1] == currentEntry && btnAr[1][1] == currentEntry && btnAr[2][1] == currentEntry)
	{
		winner();
	}
	else if(btnAr[0][2] == currentEntry && btnAr[1][2] == currentEntry && btnAr[2][2] == currentEntry)
	{
		winner();
	}
	else if(btnAr[0][0] == currentEntry && btnAr[0][1] == currentEntry && btnAr[0][2] == currentEntry)
	{
		winner();
	}
	else if(btnAr[1][0] == currentEntry && btnAr[1][1] == currentEntry && btnAr[1][2] == currentEntry)
	{
		winner();
	}
	else if(btnAr[2][0] == currentEntry && btnAr[2][1] == currentEntry && btnAr[2][2] == currentEntry)
	{
		winner();
	}*/
	if(btnAr[0][0] == currentEntry && btnAr[1][1] == currentEntry && btnAr[2][2] == currentEntry)
	{
		winner();
	}
	else if(btnAr[2][0] == currentEntry && btnAr[1][1] == currentEntry && btnAr[0][2] == currentEntry)
	{
		winner();
	}

	if(counter == 9)
	{
		cat();
	}
	
}

function cat()
{
	document.getElementById('tttBoard').style.display = 'none';
	document.getElementById('again').style.display = 'block';
	document.getElementById('winner').innerHTML = 'The Winner is The Cat, you should feel bad about yourself';
}

function winner()
{
	document.getElementById('tttBoard').style.display = 'none';
	document.getElementById('again').style.display = 'block';
	document.getElementById('winner').style.display = 'block';
	document.getElementById('winner').innerHTML = 'The Winner Is ' + currentEntry;
}