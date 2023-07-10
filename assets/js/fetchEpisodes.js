fetch('/.netlify/functions/fetchPodcasts')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    let items = data.querySelectorAll("item");
    let html = `<ul>`;
    for(let i = 0; i < items.length; i++) {
        let title = items[i].querySelector("title").textContent;
        let link = items[i].querySelector("link").textContent;
        html += `<li><a href="${link}">${title}</a></li>`;
    }
    html += `</ul>`;
    document.getElementById('rss-feed-display').innerHTML = html;
});