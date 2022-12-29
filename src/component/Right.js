import React, { useEffect } from 'react'
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux"
import { getRequestListRequest } from "../Redux/FRIEND/getFriendRequestList/action"
import { acceptFriendRequest } from "../Redux/FRIEND/acceptFriendRequest/action"
import { rejectFriendRequest } from "../Redux/FRIEND/rejectFriendRequest/action"


const useStyles = makeStyles((theme) => ({

    wrapper: {

        backgroundColor: "#ffffff",
        boxShadow: "0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 /10%),0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 /6%)",
        margin: theme.spacing(.5),
        borderRadius: theme.shape.borderRadius * 2,
        padding: theme.spacing(2),
        position: 'sticky',
        top: 80,

    }
}))
const Right = () => {
    const classes = useStyles()


    const dispatch = useDispatch()
    const friendrequest = useSelector(state => state.friendRequestList)
    const acceptRequest = (id) => {
        dispatch(acceptFriendRequest(id))
    }
    const rejectRequest = (id) => {
        dispatch(rejectFriendRequest(id))
    }
    useEffect(() => {
        dispatch(getRequestListRequest())
    }, [dispatch])

    return (



        <div className={classes.wrapper}>
            <Typography sx={{ fontSize: "18px", fontWeight: 550, margin: "10px 0px" }}>
                Friend Requests
            </Typography>
            <Divider />

            <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {(friendrequest.friendRequests.length > 0) ?
                    friendrequest.friendRequests.map(data => {
                        return (

                            <ListItem sx={{ padding: '0px 5px' }} divider={true} key={data._id}>
                                <ListItemAvatar>
                                    <Avatar alt={data.recieverId.name} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText

                                    primary={
                                        <Typography sx={{ fontSize: "15px", lineHeight: "15px" }}>{data.senderId.name}</Typography>
                                    }
                                    secondary={
                                        <React.Fragment >

                                            <Typography component={"span"} sx={{ fontSize: "13px", marginRight: '10px', lineHeight: "25px", cursor: "pointer", color: "blue" }}
                                                onClick={() => acceptRequest(data._id)}
                                            >Accept</Typography>
                                            <Typography component={"span"} sx={{ fontSize: "13px", lineHeight: "25px", cursor: "pointer", color: "red" }}
                                                onClick={() => rejectRequest(data._id)}
                                            >Reject</Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                        )
                    })
                    :
                    <div>No FriendRequests</div>
                }


            </List>
            <Link to="/friend-requests" style={{ textDecoration: "none", color: "inherit" }}>
                <Button variant="text" size="small">View More...</Button>
            </Link>
        </div>

    )
}

export default Right