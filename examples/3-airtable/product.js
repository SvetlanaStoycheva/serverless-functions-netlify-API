const result = document.querySelector('.result');
//API URL after deployment on Netlify:https://sweta-serverless-functions.netlify.app/.netlify/functions/3-product?id=rec6BOR7HhPY2V4lk

//'/api/3-product?id=${id}'

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading...<h2/>`;
  try {
    const id = window.location.search;
    // const id = '?id=1';
    const {
      data: { fields },
    } = await axios.get(`/api/3-product${id}`);
    const { name, price, desc, image } = fields;
    result.innerHTML = `
    <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>
    `;
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}<h2/>`;
  }
};
fetchProduct();
