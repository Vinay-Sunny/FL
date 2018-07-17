window.onload = function() {
	var name = document.getElementById("name");
	var password = document.getElementById("password");
	var button = document.getElementById("btn");
	var input1 = 
	button.onclick = function() {
		console.log("clicked",name.value,password.value);
		if (name.value === "" || password.value === "")
		{
			
			alert("please enter both name and password");
		}
		else
		{
			alert("Sucessful");
		}

	}
}
