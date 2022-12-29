import { Button, Card, Grid, Avatar, CardHeader } from '@mui/material'

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { acceptFriendRequest } from "../Redux/FRIEND/acceptFriendRequest/action"
import { rejectFriendRequest } from "../Redux/FRIEND/rejectFriendRequest/action"
import { removeFriendRequest } from "../Redux/FRIEND/removeFriend/action"
import { removeFriendRequestRequest } from "../Redux/FRIEND/removeFriendRequest/action"


import moment from 'moment'

const FriendCard = ({ isFriend, friends, isSentRequest }) => {

    const dispatch = useDispatch()

    const confirmFriend = (id) => {
        dispatch(acceptFriendRequest(id))
    }
    const rejectFriend = (id) => {
        dispatch(rejectFriendRequest(id))
    }

    const removeFriend = (id) => {
        dispatch(removeFriendRequest(id))
    }

    const RemoveFriendRequest = (id) => {
        dispatch(removeFriendRequestRequest(id))
    }


    return (
        <>

            {
                friends.map(data => {
                    return (
                        <Grid item md={12} lg={6} key={data._id}>


                            <Card sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                                <CardHeader
                                    sx={{ width: "100%" }}
                                    avatar={
                                        <Avatar
                                            alt={(isFriend) ? data.name[0] : (isSentRequest) ? data.recieverId.name[0] : data.senderId.name[0]}
                                            src={`/${(isFriend) ? data.profileImg : (isSentRequest) ? data.recieverId.profileImg : data.senderId.profileImg}`}
                                            sx={{ bgcolor: "red", textTransform: "capitalize" }} />

                                    }
                                    action={

                                        isFriend ?
                                            <div style={{ marginLeft: "auto" }}>

                                                <Link to={`/profile?_id=${data._id}`} style={{ textDecoration: 'none' }}>
                                                    <Button size="small" variant='text' sx={{ marginRight: "5px" }} >View</Button>
                                                </Link>
                                                <Button size="small" variant='text' color='warning' onClick={() => removeFriend(data._id)} >Remove</Button>

                                            </div> :
                                            (isSentRequest) ?
                                                <div style={{ marginLeft: "auto" }}>
                                                    <Link to={`/profile?_id=${data.recieverId._id}`} style={{ textDecoration: 'none' }}>
                                                        <Button size="small" variant='text' sx={{ marginRight: "5px" }} >View</Button>
                                                    </Link>
                                                    <Button size="small" variant="text" onClick={() => { RemoveFriendRequest(data._id) }}>
                                                        Cancel
                                                    </Button>

                                                </div>
                                                :
                                                <div style={{ marginLeft: "auto" }}>
                                                    <Button size="small" variant="text" sx={{ marginRight: "5px" }} onClick={() => { confirmFriend(data._id) }}>
                                                        Accept
                                                    </Button>
                                                    <Button size="small" variant="text" onClick={() => { rejectFriend(data._id) }}>
                                                        Reject
                                                    </Button>

                                                </div>

                                    }
                                    title={(isFriend) ? data.name : (isSentRequest) ? data.recieverId.name : data.senderId.name}
                                    subheader={(isFriend) ? `${data.friends.length} Friends` : moment.duration(moment.utc(data.createdAt).diff(moment(new Date()))).humanize(true)}
                                />



                            </Card>



                        </Grid>
                    )

                })}
        </>
    )



}

export default FriendCard