import instance from './axios';

export const getProducts = async () => {
    try {
        const response = await instance.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductByVendor = async () => {
    try{
        const response = await instance.get('/products/vendor');
        return response.data;
    }catch(error){
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const createProduct = async (product) => {
    try {
        const response = await instance.post('/products', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}