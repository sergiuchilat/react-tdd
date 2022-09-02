import {parseFiltersFromURL} from "utils/filter-manager"

export default class ProductsAPI{
  async get(filters = ''){
    const parsedFilters = parseFiltersFromURL(filters);
    const products = [];
    const productsTypes = ['Car', 'Airplane', 'Bus', 'Train', 'Sheep'];
    for (let i = 1; i <= 50; i++) {
      const productType = productsTypes[i % 5]
      products.push({
        id: i,
        name: `${productType} ${i}`,
        price: i * 10
      })
    }
  
    const filteredProducts = [];
    for (const product of products) {
      if(
        // (
        //   parsedFilters.name && parsedFilters.name !== '' && product.name.includes(parsedFilters.name)
        // )
        // &&
        (
          parsedFilters.priceFrom && product.price >= Number(parsedFilters.priceFrom)
        )
        &&
        (
          parsedFilters.priceTo && product.price <= Number(parsedFilters.priceTo)
        )
      ){
        filteredProducts.push(product);
      }
    }
    
    return new Promise(resolve => {
      resolve(filteredProducts);
    })
  }
}