function textChange() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function textReset() {
  document.getElementById("demo").innerHTML = "Lorem Ipsum";
}
var ninja = {
	name:"",
	rank:"",
	hairColor:"",
	eyeColor:"",
	skills: ["Supernova Shotgun", "Stun Drone", "Deployable Shield"],
};
function customizeNinja() {
ninja.name = prompt("What shall your ninja be named?");
ninja.rank = prompt("What rank is this ninja?");
ninja.hairColor = prompt("What color is your ninja's hair?");
ninja.eyeColor = prompt("What color is your ninja's eyes?");

document.getElementById("ninjaDesc").innerHTML = ("Your ninja's name is " + ninja.name + ". " + "This ninja is within the ranks of " + ninja.rank + ". " + "Your ninja's hair color is " + ninja.hairColor + ". " + "Your ninja's eye color is " + ninja.eyeColor + ". " + "Your ninja's abilities consist of a " + ninja.skills[0] + ", " + ninja.skills[1] + ", and a " + ninja.skills[2] + ".");
}

function ninjaButtons(num) {
	if(num == 1){

		document.getElementById("actionText").innerHTML = ("You used shotgun " + Math.floor((Math.random() * 10) + 1) + " times!");
	}
	if(num == 2){

		document.getElementById("actionText").innerHTML = ("You your stun drone " + Math.floor((Math.random() * 10) + 1) + " times!");
	}
	if(num == 3){

		document.getElementById("actionText").innerHTML = ("You used you deployable shield " + Math.floor((Math.random() * 10) + 1) + " times!");
	}
};
