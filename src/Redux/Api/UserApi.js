import axios from "axios";






export const registerUser = async (data) => {
    try {
        const res = await axios.post("/register", data)
        const result = res.data;
        return result;
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}


export const loginUser = async (data) => {

    try {

        const res = await axios.post("/login", data)
        const result = res.data;
        return result;

    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}

export const getUser = async (token, id) => {

    try {
        if (id) {
            console.log(id)
        }
        const res = await axios.request({
            method: 'GET',

            url: (!id) ? `/user` : `/user?id=${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const result = res.data;
        console.log(res.data)
        return result;


    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}



export const editUser = async (token, userData) => {
    console.log(userData)
    try {
        const res = await axios.patch("/edit-profile",
            userData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        const result = res.data;
        console.log(res.data)
        return result;
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}

export const searchUser = async (token, searchData) => {
    console.log(searchData)
    try {
        const res = await axios.request({
            method: 'POST',
            url: "/search-user",
            data: searchData,
            params: {
                city: searchData.city,
                state: searchData.state
            },
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        const result = res.data;
        console.log(res)
        return result;
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}

