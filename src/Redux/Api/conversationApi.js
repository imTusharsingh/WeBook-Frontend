import axios from 'axios';


export const getConversation = async (token) => {
    try {
        const res = await axios.get("/get-all-conversation",
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

export const createConversation = async (token, receiverId) => {
    try {
        const res = await axios.post("/create-conversation",
            { receiverId },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        const response = res.data;
        console.log(res)
        return response;
    } catch (err) {
        throw new Error(err.message)
    }
}