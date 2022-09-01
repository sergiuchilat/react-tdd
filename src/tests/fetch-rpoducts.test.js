import ProductsAPI from "services/api/ProductsAPI";

test('Fetch products', async () => {
    const response = await (new ProductsAPI()).get('?priceFrom=100&priceTo=5000')
    expect(response).not.toBe([]);
});