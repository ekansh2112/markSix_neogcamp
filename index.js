var api = "https://api.funtranslations.com/translate/minion.json";
var inputValue = document.querySelector("#myinput");
var button = document.querySelector(".translate");
var output = document.querySelector("#outputarea");
button.addEventListener("click", function () {
	fetch(`${api}?text=${inputValue.value}`)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			output.innerHTML = data.contents.translated;
		});
});
