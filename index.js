var api = "https://api.funtranslations.com/translate/minion.json";
var inputValue = document.querySelector("#myinput");
var button = document.querySelector(".translate");
var output = document.querySelector("#outputarea");
var count = 0;
button.addEventListener("click", function () {
	if (count <= 5) {
		fetch(`${api}?text=${inputValue.value}`)
			.then((res) => {
				if (res.ok) {
					count++;
				}
				return res.json();
			})
			.then((data) => {
				output.innerHTML = data.contents.translated;
			});
	} else {
		alert("You can only talk in banana language 5 times an hour!");
	}
});
