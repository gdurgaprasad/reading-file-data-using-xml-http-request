const resultsDiv = document.getElementById("result");
const loadingDiv = document.getElementById("loading");
document.getElementById("button").addEventListener("click", load);

function load() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `data.txt`, true);

  xhr.onprogress= function() {
    loadingDiv.style.display = "block";
    const text = "Reading file data.please wait...";
    const h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(text));
    loadingDiv.appendChild(h3);
  },
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

    // OLDER SYNTAX REPLACED BY ONLOAD
    xhr.onload= function() {
      if (this.status === 200) {
        loadingDiv.style.display = "none";
        resultsDiv.style.display = "block";
        const card = document.createElement("div");
        card.classList.add("card", "mt-3", "align-self-center");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "px-lg-5");
        cardBody.innerHTML = `<p>${this.responseText}</p>`;
        card.appendChild(cardBody);
        resultsDiv.appendChild(card);
      }
    },
    
    xhr.onerror= function() {
      window.alert("error reading file!");
    },
    xhr.send();
}
