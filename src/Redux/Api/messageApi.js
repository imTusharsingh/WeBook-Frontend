import axios from 'axios';


export const getMessage = async (token, conversationId) => {
    try {
        const res = await axios.get(`/get-message/${conversationId}`,
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
        const res = await axios.post("/new-message",
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