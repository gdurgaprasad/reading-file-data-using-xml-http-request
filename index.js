const resultsDiv = document.getElementById("result");
document.getElementById("button").addEventListener("click", load);

function load() {
  resultsDiv.style.display = "block";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `data.txt`, true);

  xhr.onprogress = function() {
    if (this.readyState !== 4) {
      const text = "Reading file data.please wait...";
      const h3 = document.createElement("h3");
      h3.appendChild(document.createTextNode(text));
      resultsDiv.appendChild(h3);
    }
  };

  // older syntax need to check for state 4 for success & proceed

  // xhr.onreadystatechange = function() {
  //   if (this.readyState === 4 && this.status === 200) {
  //     const card = document.createElement("div");
  //     card.classList.add("card", "mt-3", "align-self-center");
  //     const cardBody = document.createElement("div");
  //     cardBody.classList.add("card-body", "px-lg-5");
  //     cardBody.innerHTML = `<p>${this.responseText}</p>`
  //     card.appendChild(cardBody);
  //     resultsDiv.appendChild(card);
  //   }
  // };

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.readyState);
      const card = document.createElement("div");
      card.classList.add("card", "mt-3", "align-self-center");
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "px-lg-5");
      cardBody.innerHTML = `<p>${this.responseText}</p>`;
      card.appendChild(cardBody);
      resultsDiv.appendChild(card);
      console.log(this);
    }
  };

  xhr.onerror = function(){
    window.alert('error reading file!')
  }

  xhr.send();
}
