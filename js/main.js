function submitAns() {

	var quest1 = parseInt(document.querySelector("input[name='soup']:checked").value);
	var quest2 = parseInt(document.querySelector("input[name='world']:checked").value);
	var quest3 = parseInt(document.querySelector("input[name='quiz']:checked").value);
	var quest4 = parseInt(document.querySelector("input[name='best']:checked").value);
	var quest5 = parseInt(document.querySelector("input[name='moon']:checked").value);
	var quest6 = parseInt(document.querySelector("input[name='you']:checked").value);
	var quest7 = parseInt(document.querySelector("input[name='jeo']:checked").value);
	var quest8 = parseInt(document.querySelector("input[name='h2o']:checked").value);
	var quest9 = parseInt(document.querySelector("input[name='joy']:checked").value);
	var quest0 = parseInt(document.querySelector("input[name='code']:checked").value);


	console.log(quest1 + quest2);

	var userScore = quest1 + quest2 + quest3 + quest4 + quest5 + quest6 + quest7 + quest8 + quest9 + quest0;

	document.querySelector(".user-result").innerHTML = userScore + "/100";

	

}
