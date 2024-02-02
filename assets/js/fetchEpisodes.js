// Fetch and display the first podcast
fetch('/.netlify/functions/fetchPodcasts?podcast=kertojanaani')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    let items = data.querySelectorAll("item");
    let html = `<ul>`;
    for(let i = 0; i < 3; i++) {
        let title = items[i].querySelector("title").textContent;
        let link = items[i].querySelector("link").textContent;
        html += `<li><a href="${link}">${title}</a></li>`;
    }
    html += `</ul>`;
    document.getElementById('rss-feed-display-kertojanaani').innerHTML = html;
});

// Fetch and display the second podcast
fetch('/.netlify/functions/fetchPodcasts?podcast=markkinointiperuna')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    let items = data.querySelectorAll("item");
    let html = `<ul>`;
    for(let i = 0; i < 3; i++) {
        let title = items[i].querySelector("title").textContent;
        let link = items[i].querySelector("link").textContent;
        html += `<li><a href="${link}">${title}</a></li>`;
    }
    html += `</ul>`;
    document.getElementById('rss-feed-display-markkinointiperuna').innerHTML = html;
});