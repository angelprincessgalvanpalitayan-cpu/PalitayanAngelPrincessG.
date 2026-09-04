const sites=[
["Hundred Islands","Alaminos City","A famous island cluster and major coastal destination.","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"],
["Cape Bolinao Lighthouse","Bolinao","A historic lighthouse and well-known Bolinao landmark.","https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=80"],
["Balungao Hot Spring","Balungao","A warm-spring destination connected with the natural landscape.","https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"]];
const grid=document.querySelector("#grid"),empty=document.querySelector("#empty");
function render(list){grid.innerHTML=list.map(s=>`<article class="card"><img src="${s[3]}" alt="${s[0]} heritage site"><div class="card-body"><span>${s[1]}</span><h3>${s[0]}</h3><p>${s[2]}</p><button class="atom-button">Explore</button></div></article>`).join("");empty.hidden=list.length>0}
render(sites);document.querySelector("#searchForm").addEventListener("submit",e=>e.preventDefault());document.querySelector("#q").addEventListener("input",e=>{let q=e.target.value.toLowerCase();render(sites.filter(s=>s.join(" ").toLowerCase().includes(q)))});
