const phones = [{
    number: "ID: 1",
    name: "Iphone 13 pro max",
    image_url: "https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
    price: "100250 сом"
}, {
    number: "ID: 2",
    name: "Iphone 13 pro",
    image_url: "https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
    price: "97000 сом"
}];


const container = document.getElementById('store');

phones.forEach((result, i) => {
    const card = document.createElement('div');
    card.classList = 'card-body';


const content = `
  <div class="card">
    <div class="card-header" id="heading-${i}">
      
        <button class="btn_link" onclick= "location= '${result.image_url}'">
            Посмотреть
        </button>
     
    </div>

    <div id="collapse-${i}" class="collapse show" aria-labelledby="heading-${i}" data-parent="#store">
      <div class="card-body">

        <h5>${result.number}</h5>
        <p>${result.name}</p>
        
        <p>${result.price}</p>
        
      </div>
    </div>
  </div>
  `;

    container.innerHTML += content;// Append newyly created card element to the container
})