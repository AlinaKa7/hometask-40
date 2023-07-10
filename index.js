const data = [
  {
    category: 'CLOTHING',
    product: [
      {
        name: 'DENIM SHIRT',
        description: 'Oversized denim shirt. Long sleeves with button fastening. Classic collar and pockets on the front. Fastening with metal buttons.',
        price: '1990 UAH',
      },
      {
        name: 'FLOWERS MINI DRESS',
        description: 'Mini dress with floral print. Straps, imitation of cups and corsets.',
        price: '1790 UAH',
      },
            {
        name: 'MID-WAIST JEANS',
        description: 'OStraight jeans of the Premium denim collection. Mid-waiit and five pockets. Zipper and button closure.',
        price: '1990 UAH',
      },
    ]
  },
  {
    category: 'SHOES',
    product: [
      {
        name: 'LACE-UP HEELS',
        description: 'Lace-up heels. Square nose. Ties.',
        price: '2990 UAH',
      },
      {
        name: 'BASIC SNEAKERS',
        description: 'Basic women\'s sneakers made of genuine leather. Inside is natural soft leather. Rubber sole.',
        price: '2990 UAH',
      },
            {
        name: 'LOAFERS',
        description: 'Massive loafers made of genuine leather. Three-dimensional sole and lacing in tone. Minimalist design. On the model size 38.',
        price: '3290 UAH',
      },
    ]
  },
  {
    category: 'BAGS',
    product: [
      {
        name: 'CLUTCH BAG',
        description: 'A small handbag from the Coach collection. The button-up model is made of genuine leather. Magnetic clasp. Not designed for A4 format. Long adjustable strap that fastens. Bag for carrying over the shoulder or in the hands.',
        price: '1500 UAH',
      },
      {
        name: 'BAGUETTE BAG',
        description: 'A medium-sized bag for every day. It has a side pocket inside for small things. Adjustable shoulder strap. Fastens with a magnet.',
        price: '1290 UAH',
      },
            {
        name: 'MINI HOBO BAG',
        description: 'The Hammock Hobo deconstructs the iconic bag family\'s shape-shifting design to create a versatile and ergonomic hobo bag with a distinctive sling shape.',
        price: '1390 UAH',
      },
    ]
  }
];

const main = document.querySelector('#main');

function resetPage() {
  main.innerHTML = ''; 
  
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');
  main.append(descriptionContainer);

  data.forEach((category) => {
    const container = document.createElement('div');
    const categories = document.createElement('div');
    const products = document.createElement('div');
  
    container.classList.add('container');
    categories.classList.add('category');
    products.classList.add('product');
  
    categories.innerText = category.category;
    container.append(categories);
  
    categories.addEventListener('click', () => {
      products.innerHTML = '';
      descriptionContainer.innerHTML = '';
  
      category.product.forEach((item) => {
        const product = document.createElement('div');
        const productName = document.createElement('p');
        const productInfo = document.createElement('div');
  
        product.classList.add('product-item');
        productName.classList.add('product-name');
        productInfo.classList.add('product-info');
  
        productName.innerText = item.name;
  
        productName.addEventListener('click', () => {

          const description = document.createElement('p');
          const price = document.createElement('p');
          const buyButton = document.createElement('button');
          buyButton.innerText = 'Buy';
  
          description.innerHTML = item.description;
          price.innerHTML = item.price;
  
          buyButton.addEventListener('click', () => {
            alert(`You have purchased ${item.name}`);
            descriptionContainer.innerHTML = '';
          })

          descriptionContainer.addEventListener('click', resetPage);
          
          descriptionContainer.append(description);
          descriptionContainer.append(price);
          descriptionContainer.append(buyButton);
          product.append(descriptionContainer);
        });
        
        productInfo.append(productName);
        product.append(productName);
        products.append(product);
      });
  
      container.append(products);
    });
  
    main.append(container);
  });
}

resetPage();