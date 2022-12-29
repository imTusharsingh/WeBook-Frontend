import axios from "axios";




export const like = async (token, id) => {
    try {
        console.log(id)
        const res = await axios.post("/like",
            { id: id },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        const message = res.data.message;
        console.log(res);
        return message;

    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}


export const dislike = async (token, id) => {
    try {
        console.log(id)
        const res = await axios.post("/dislike",
            { id: id },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        const message = res.data.message;
        console.log(res);
        return message;

    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}