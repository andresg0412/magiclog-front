import instance from './axios';

//OBTENER PRODUCTOS
export const getProducts = async () => {
    try {
        const response = await instance.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

//OBTENER PRODUCTOS POR VENDEDOR
export const getProductByVendor = async () => {
    try{
        const response = await instance.get('/products/vendor');
        return response.data;
    }catch(error){
        console.error('Error fetching products:', error);
        throw error;
    }
}

//CREAR PRODUCTO
export const createProduct = async (product) => {
    try {
        const response = await instance.post('/products', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}