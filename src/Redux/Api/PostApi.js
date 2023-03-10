import axios from "axios"

const API = "https://webook-api.onrender.com";


export const getPost = async (token, id) => {
    try {
        const res = await axios.request({
            method: 'GET',

            url: (!id) ? `${API}/get-posts` : `${API}/get-posts?id=${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        console.log(res)
        const posts = res.data

        return posts


    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getFriendPosts = async (token, limit) => {
    try {

        const res = await axios.get(`${API}/get-friends-posts`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }, params: {
                page: 1,
                limit: limit
            }
        })
        const posts = res.data;
        console.log(res);
        return posts
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const uploadPost = async (token, postData) => {
    try {
        const res = await axios.post(`${API}/upload-post`,
            postData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
        const message = res.data.message;
        console.log(message);
        return message
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const updatePost = async (token, postData) => {
    try {
        console.log(postData)
        const res = await axios.patch(`${API}/update-post`,
            postData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const message = res.data.message;
        console.log(message);
        return message;
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

export const deletePost = async (token, id) => {
    try {
        console.log(id);
        const res = await axios.delete(`${API}/delete-post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const message = res.data.message;
        console.log(message);
        return message;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getPostById = async (token, id) => {
    try {
        console.log(id);
        const res = await axios.get(`${API}/post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const post = res.data;
        console.log(res);
        return post;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}