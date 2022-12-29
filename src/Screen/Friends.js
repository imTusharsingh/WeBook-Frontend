import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import FriendCard from '../component/FriendCard'

import { useSelector, useDispatch } from "react-redux"
import { getFriendsListRequest } from '../Redux/FRIEND/getFriendList/action'


const Friends = () => {

    const dispatch = useDispatch()
    const friendList = useSelector(state => state.friendList)
    useEffect(() => {
        dispatch(getFriendsListRequest())
    }, [dispatch])

    return (

        <>
            <Grid container spacing={1} >


                <FriendCard isFriend={true} friends={friendList.friends} />

            </Grid>

        </>
    )
}

export default Friends