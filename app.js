var vara = new Vara("#vara-container", "shadows-into-light.json" ,[{
    text:"Taiwo",
	fontSize: "30",
	color: "black",
	strokeWidth:3,
	letterSpacing: 3,
	duration: 2000,
	width: 2000,
    x:0, // Number, x coordinate of the text
	y:7, // Number, y coordinate of the text
	fromCurrentPosition:{ // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
		x:true, // Boolean
		y:true, // Boolean
	}	
}]);
let open = false
let line2 = document.getElementById("l2")
let button = document.getElementById("menu-button")
console.log(button)
button.addEventListener("click", toggle)

function toggle(){
	if (open){
			line2.style.display = "none"
			open = false
			changeImage(button, "ham.svg")

			
		}
		else{
				line2.style.display = "flex"
				open = true
				changeImage(button, "x.svg")

			}
		}
	function changeImage(button, newPicture){
		img = button.querySelector("img")
		img.src = newPicture
	}
		