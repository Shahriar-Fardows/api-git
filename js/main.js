const apiData = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data = await res.json();
    showData(data.data);
}

const showData = phones => {
    const phCard = document.getElementById('ph-card');
    phones.forEach(phone => {
        const phDiv = document.createElement('div');
        phDiv.classList.add('col');
        phDiv.innerHTML = `
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        `;
        phCard.appendChild(phDiv);
    });
}
