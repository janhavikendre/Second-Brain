import axios from 'axios';

const API_URL = 'http://localhost:3000/user'; 

// Signup service
export const signup = async (userData: object) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData); 
        return response.data;
    } catch (error: any) { 
        console.error('Error during signup:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Signin service
export const signin = async (credentials: object) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, credentials); 
        return response.data; 
    } catch (error: any) { 
        console.error('Error during signin:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};
