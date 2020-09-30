var database = [
  {
	username: "Andy",
    password: "MASSIVE"
  },
  {
	username: "Anduuy",
    password: "MAESTRO"
  },
  {
	username: "Andeey",
    password: "MYSTERY"
  } 
];

	var newsFeed = [
  {
	username: "Stan",
	timeline: "Tired of learning!"
  },
  {
  	username: "Sandy",
  	timeline: "weakEr learning!"
  },
  {
  	username: "Dandy",
  	timeline: "weakEr loe learning!"
  }
];

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
 	if(database[i].username === username && 
        database[i].password === password){
 		return true;
 	 }
   }
   return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("sorry, wrong username and password");
	}
}	

var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what\'s your password?");

signIn(userNamePrompt, passwordPrompt);