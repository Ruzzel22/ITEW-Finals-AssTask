/* Table Static Data Implement */
const tbody = document.querySelector("tbody");
const template = document.querySelector("#table-row");

// Insert table data in Row
const insertRow = template.content.cloneNode(true);
let td = insertRow.querySelectorAll("td");
td[0].textContent = "MP4";
td[1].textContent = "25GB";
td[2].textContent = "16:9";
td[3].textContent = "1920 (Width) x 1080 (Height)";
td[4].textContent = "AAC, 130 Kbps, 48000 Hz";
td[5].textContent = "Episode: 25 Minutes (Maximum)";
td[5].innerHTML += "<br> Series: 55 Hours (Minimum)";

tbody.appendChild(insertRow);