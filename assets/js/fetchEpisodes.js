fetch('/.netlify/functions/fetchPodcasts')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    let items = data.querySelectorAll("item");
    let html = `<ul>`;
    for(let i=0; i<3; i++) {
        let title = items[i].querySelector("title").textContent;
        let pubDate = items[i].querySelector("pubDate").textContent;
        html += `<li><b>${title}</b> <i>${pubDate}</i></li>`;
    }
    html += `</ul>`;
    document.getElementById('rss-feed-display').innerHTML = html;
});