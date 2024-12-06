import axios from 'axios';

const API_URL = 'https://block-back.onrender.com/blockchain';

export const getChain = async () => {
    try {
        const response = await axios.get(`${API_URL}/chain`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blockchain:', error);
        throw error;
    }
};

export const addBlock = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/add-block`, { data });
        return response.data;
    } catch (error) {
        console.error('Error adding block:', error);
        throw error;
    }
};

export const verifyChain = async () => {
    try {
        const response = await axios.post(`${API_URL}/verify-chain`);
        return response.data;
    } catch (error) {
        console.error('Error verifying chain:', error);
        throw error;
    }
};

export const verifySignature = async (data, signature) => {
    try {
        const response = await axios.post(`${API_URL}/verify-signature`, { data, signature });
        return response.data;
    } catch (error) {
        console.error('Error verifying signature:', error);
        throw error;
    }
};
