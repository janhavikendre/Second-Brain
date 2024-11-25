import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ensure this is correct

// Signup service
export const signup = async (userData: object) => {
    try {
        const response = await axios.post(`${API_URL}/user/signup`, userData);
        return response.data;
    } catch (error: any) {
        console.error('Error during signup:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Signin service
export const signin = async (credentials: object) => {
    try {
        const response = await axios.post(`${API_URL}/user/signin`, credentials);
        return response.data;
    } catch (error: any) {
        console.error('Error during signin:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Create Brain Service
export const createBrain = async (brainData: object, token: string) => {
    try {
        const response = await axios.post(
            `${API_URL}/brain/create`,
            brainData,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Ensure token is sent in headers
                },
            }
        );
        return response.data;
    } catch (error: any) {
        console.error('Error during createBrain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Get Brain Service
export const getBrain = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/brain/get`, {
            headers: {
                Authorization: `Bearer ${token}`, // Ensure token is sent in headers
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error during getBrain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};
