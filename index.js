const loadData = ()=>{
    const URL = `https://jsonplaceholder.typicode.com/photos`;
    fetch(URL).then(res => res.json()).then(data => displayData(data))
}

const displayData = (data)=>{
    data.forEach(singleData =>{
        // console.log(singleData.id);

        const cardContainer = document.getElementById('card-container');
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`
        <div class="card h-100">
        <img id="card-details" onclick="cardDetails('${singleData.id}')" src="${singleData.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${singleData.title}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        cardContainer.appendChild(div);
        
    })
}
// function loadDataOfID() {
//     const URL = `https://jsonplaceholder.typicode.com/photos${id}`;
//     fetch(URL).then(res => res.json()).then(data => cardDetails(data))
// }

function cardDetails(id) {
    const URL = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(URL).then(res => res.json()).then(data => singleCardD(data))
    

    
}
const singleCardD = (data)=>{
    const singleCardContainer = document.getElementById('singleCardContainer');
    singleCardContainer.innerHTML=''
    const divcard = document.createElement('div');
    
    divcard.innerHTML =`
    <h2>${data.title}</h2>
    <a href="${data.url}">Click More Info</a>
    `;
    singleCardContainer.appendChild(divcard)
}


loadData();