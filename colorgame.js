window.setTimeout(function(){
var color = makecolor(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var head = document.querySelector("#h1")
var messagedis = document.querySelector("#message")
var he1 =  document.querySelector("h1")
head.textContent = pickedcolor;
var b1 = document.querySelector("#reset")
var b2 = document.querySelector("#easybtn")
var b3 = document.querySelector("#hardbtn")


b1.addEventListener("click",function(){
	
	color = makecolor(6);
	pickedcolor = pickcolor();
	head.textContent = pickedcolor;
	b1.textContent= "New Colors";
	he1.style.backgroundColor = "steelblue";
	message.textContent = "";
	for (var j = 0; j < squares.length;j++)
		{squares[j].style.backgroundColor = color[j];
		squares[j].style.display = "block";
	}

});


b2.addEventListener("click",function(){
	b2.classList.add("selected");
	b3.classList.remove("selected");99999
	color = makecolor(3);
	pickedcolor = pickcolor();
	b1.textContent= "New Colors";
	he1.style.backgroundColor = "steelblue";
	message.textContent = "";
	head.textContent = pickedcolor;
	for (var j = 0; j < squares.length;j++)
		{ 
			if(j < 3){squares[j].style.backgroundColor = color[j];}
			else{ squares[j].style.display = "none";}
		}

}
)

b3.addEventListener("click",function(){
		
		b3.classList.add("selected");
		b2.classList.remove("selected");
		color = makecolor(6);
		pickedcolor = pickcolor();
		head.textContent = pickedcolor;
		b1.textContent= "New Colors";
		message.textContent = "";
		he1.style.backgroundColor = "steelblue";
		for (var j = 0; j < squares.length;j++)
		{squares[j].style.backgroundColor = color[j];
			squares[j].style.display = "block";
		}
		})


for (var i = 0; i <squares.length;i++){
	
	squares[i].style.backgroundColor = color[i];


	squares[i].addEventListener("click",function()
	{
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			messagedis.textContent = "correct";
			he1.style.backgroundColor = clickedcolor;
			b1.textContent= "play again!!";

			for (var j = 0; j < squares.length;j++){
				squares[j].style.backgroundColor = pickedcolor;
			}
		}

		else{ this.style.backgroundColor = '#232323' ;
		messagedis.textContent = "try again";}
	}

	)
}

function pickcolor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
	}


function makecolor(num){
	var arr = [];
	for(var k = 0; k < num ; k++)
	{
	 arr.push(randomcolor());

	}
	return arr;	
	}


function randomcolor(){

  		var rand1 = Math.floor(Math.random()*256);
		var rand2 = Math.floor(Math.random()*256);
		var rand3 = Math.floor(Math.random()*256);
		return "rgb("+ rand1 +", " + rand2 +", "+ rand3 + ")";
	}

},500);
