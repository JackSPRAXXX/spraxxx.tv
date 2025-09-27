const marquee = document.getElementById('discoveries');

fetch('tracks.json')
  .then(res => res.json())
  .then(tracks => {
    tracks.forEach(track => {
      const div = document.createElement('div');
      div.className = 'track-card';
      div.innerHTML = `
        <h3>${track.title}</h3>
        <span>${track.artist}</span>
        <iframe src="${track.embed}" loading="lazy"></iframe>
      `;
      marquee.appendChild(div);
    });
    startMarquee();
  });

function startMarquee() {
  let scroll = 0;
  function step() {
    scroll += 1;
    if(scroll > marquee.scrollWidth) scroll = -marquee.offsetWidth;
    marquee.scrollLeft = scroll;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
