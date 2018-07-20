function myReverse() {
	var output = document.getElementById("output");
	var num = document.getElementById("num").value;

	var revNum = num.split("").reverse().join("");

	output.innerHTML = revNum;
}