document.addEventListener("DOMContentLoaded", () => {
  // selectros

  document.querySelector("#add").onclick = addValueBtn;
  document.querySelector("#SortByName").onclick = sortByNameBtn;
  document.querySelector("#SortByValue").onclick = sortByValueBtn;
  document.querySelector("#Delete").onclick = deleteBtn;
  document.querySelector("#ShowXML").onclick = showXMLBtn;

  // variables

  let input = document.querySelector("#addValue");
  let textarea = document.querySelector("#textarea");
  let list = [];
  let isXml = false;

  //function to get value

  function addValue(arg) {
    list.push(arg.split("="));
    showList();
  }
  // function to show
  function showList() {
    textarea.innerHTML = "";
    list.forEach((el) => {
      if (!isXml) textarea.innerHTML += `${el[0]}=${el[1]}\n`;
      else
        textarea.innerHTML += `<item>\n\t<key>${el[0]}</key>\n\t<value>${el[1]}</value>\n</item>\n`;
    });
  }

  // function to validate

  function regExpValidate(addValue) {
    if (/^[a-zA-Z]+=[a-zA-Z]+$/g.test(addValue)) return true;
  }

  // functions to click

  function addValueBtn() {
    if (regExpValidate(input.value)) {
      addValue(input.value);
    } else {
      alert("wrong format, You should enter in the format:Name=Value");
    }
    input.value = "";
  }

  function sortByNameBtn() {
    list.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    showList();
  }

  function sortByValueBtn() {
    list.sort(function (a, b) {
      return a[1].toLowerCase() < b[1].toLowerCase() ? -1 : 1;
    });
    showList();
  }

  function deleteBtn() {
    list.pop()
    showList();
  }
  // XML toggle function
  function showXMLBtn() {
    document.querySelector("#ShowXML").innerHTML = isXml
      ? "Show XML"
      : "Hide XML";
    isXml = !isXml;
    showList();
  }
});
