import axios from 'axios';

const API = "https://webook-api.onrender.com";

export const getMessage = async (token, conversationId) => {
    try {
        const res = await axios.get(`${API}/get-message/${conversationId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        const data = res.data;
        console.log(res)
        return data;
    } catch (err) {
        throw new Error(err.message)
    }
}

export const createMessage = async (token, data) => {
    console.log(token, data)
    try {
        const res = await axios.post(`${API}/new-message`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        const message = res.data.message;
        console.log(res)
        return message;
    } catch (err) {
        throw new Error(err.message)
    }
}