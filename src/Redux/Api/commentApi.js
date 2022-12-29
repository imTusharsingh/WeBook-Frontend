import axios from "axios";



export const addComment = async (token, userComment) => {
    try {
        console.log(userComment)
        const res = await axios.post("/add-comment",
            userComment,
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

export const editComment = async (token, userComment) => {
    try {
        console.log(userComment)
        const res = await axios.patch("/edit-comment",
            userComment,
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

export const deleteComment = async (token, ids) => {
    try {
        console.log(ids)
        const res = await axios.post("/remove-comment",
            ids,
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