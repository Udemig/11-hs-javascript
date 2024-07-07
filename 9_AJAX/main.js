function loadData() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onreadystatechange = function () {
    if (xhr.status == 200) {
      document.getElementById("content").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
