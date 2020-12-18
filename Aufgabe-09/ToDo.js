var trashIcon = document.querySelector(".fas fa-trash-alt");
var listIndex = 0;
var newTask = document.querySelector("#addNewTasks");
var liElement = document.querySelector(".element");
function anzahl() {
    document.querySelector("h3").innerHTML = listIndex + " in total";
}
function emptyInputField() {
    document.getElementById("addNewTasks").value = "";
}
function createElement() {
    var myLi = document.createElement("li");
    myLi.className = "element";
    var trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash-alt";
    var textInput = document.createElement("span");
    textInput.innerHTML = newTask.value;
    var circleIcon = document.createElement("i");
    circleIcon.className = "fal fa-circle";
    var checkedIcon = document.createElement("i");
    checkedIcon.className = "fas fa-check hidden";
    document.querySelector("#myList").appendChild(myLi);
    myLi.appendChild(trashIcon);
    myLi.appendChild(textInput);
    myLi.appendChild(circleIcon);
    myLi.appendChild(checkedIcon);
    circleIcon.addEventListener("click", function () {
        if (checkedIcon.classList.contains("hidden")) {
            checkedIcon.classList.remove("hidden");
        }
        else {
            checkedIcon.classList.add("hidden");
        }
    });
    trashIcon.addEventListener("click", function () {
        document.querySelector("#myList").removeChild(myLi);
        listIndex--;
        anzahl();
    });
    listIndex++;
    anzahl();
}
document.querySelector(".add").addEventListener("click", function () {
    createElement();
    emptyInputField();
});
newTask.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        createElement();
        emptyInputField();
    }
});
//# sourceMappingURL=ToDo.js.map