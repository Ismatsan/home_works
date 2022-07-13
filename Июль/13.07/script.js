const phones = [{
    number: "1",
    name: "Iphone 13 pro max",
    image_url: "https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
    price: "100250 сом"
}, {
    number: "2",
    name: "Iphone 13 pro",
    image_url: "https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
    price: "97000 сом"
}];


const container = document.getElementById('store');

phones.forEach((result, idx) => {
    const card = document.createElement('div');
    card.classList = 'card-body';


const content = `
  <div class="card">
    <div class="card-header" id="heading-${idx}">
      
        <button class="btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
            Купить
        </button>
     
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#store">
      <div class="card-body">

        <h5>${result.number}</h5>
        <p>${result.name}</p>
        <p>${result.image_url}</p>
        <p>${result.price}</p>
        
      </div>
    </div>
  </div>
  `;

    container.innerHTML += content;// Append newyly created card element to the container
})