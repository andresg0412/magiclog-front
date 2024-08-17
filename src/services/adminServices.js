import instance from './axios';

export const getVendors = async () => {
    try {
        const response = await instance.get('/admin/vendors');
        return response.data;
    } catch (error) {
        console.error('Error fetching vendors:', error);
        throw error;
    }
}