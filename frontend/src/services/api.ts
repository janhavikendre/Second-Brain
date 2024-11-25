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
                    token
                },
            }
        );
        return response.data;
    } catch (error: any) {
        console.error('Error during createBrain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const getUserBrains = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/brain/user`, {
            headers: {
                token, 
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching user brains:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const deleteBrain = async (id: string, token: string) => {

    try {
        const response = await axios.delete(`${API_URL}/brain/delete/${id}`, {
            headers: {
                token
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error during deleteBrain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
}

export const updateBrain = async (id: string, updatedData: object, token: string) => {
    try {
        const response = await axios.put(`${API_URL}/brain/update/${id}`, updatedData, {
            headers: {
                token, 
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error updating brain:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};