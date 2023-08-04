document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})

fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=9b5c2ee1a5ad4bf58837af3c94a924bc&client_secret=ee0fa289299b4f118e70db2cb21b69e5&scope=user-read-recently-played", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  }
})
.then(response => response.json())
.then((response) => {
  fetch("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
      "Authorization": "Bearer " + response.access_token
    } 
    
  })
}) 

