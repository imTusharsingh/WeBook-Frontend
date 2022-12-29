import React, { useEffect } from 'react'
import { Avatar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useSelector, useDispatch } from 'react-redux'
import { getUserRequest } from "../Redux/USER/getUserDetails/action"
import { getPostRequest } from "../Redux/POST/getPost/action"
import { getFriendsListRequest } from '../Redux/FRIEND/getFriendList/action'

const useStyles = makeStyles(theme => ({
    avatarWrapper: {
        background: "linear-gradient(100deg,#2874ff,#2679c7)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
        height: 100,
        borderTopLeftRadius: theme.shape.borderRadius * 2,
        borderTopRightRadius: theme.shape.borderRadius * 2,

    },
    avtar: {
        "&&": {
            width: 80,
            height: 80,
            backgroundColor: "#ed6c02"
        }
    },
    root: {
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        boxShadow: "0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 /10%),0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 /6%)",
        margin: theme.spacing(.5),
        borderRadius: theme.shape.borderRadius * 2,
        padding: theme.spacing(2),
        paddingTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(1),
        color: "white",
        position: "sticky",
        top: 80
    },
    reach: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(5),
        width: "100%",
        justifyContent: "space-evenly"
    },
    reachInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}))

const RightProfile = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userDetail)
    const userPost = useSelector(state => state.Posts)
    const friendList = useSelector(state => state.friendList)

    useEffect(() => {
        dispatch(getUserRequest());
        dispatch(getPostRequest());
        dispatch(getFriendsListRequest())
    }, [dispatch])
    return (
        <>
            <div className={classes.root}>
                <div className={classes.avatarWrapper}>
                    <Avatar
                        alt={userData.data.name}
                        src={(userData.data.profileImg) && `/${userData.data.profileImg}`}

                        className={classes.avtar}
                    />
                </div>
                <div className={classes.reach}>
                    <div className={classes.reachInfo}>

                        {(userPost.posts.length > 1) ?
                            <>
                                <Typography variant='body1' color="#ed6c02">
                                    {userPost.posts.length}
                                </Typography>
                                <Typography variant='subtitle2' color="#2775f3" sx={{ fontWeight: 550 }}>Posts</Typography>
                            </>
                            :
                            <>
                                <Typography variant='body1' color="#ed6c02">
                                    {userPost.posts.length}
                                </Typography>
                                <Typography variant='subtitle2' color="#2775f3" sx={{ fontWeight: 550 }}>Post</Typography>

                            </>
                        }

                    </div>
                    <div className={classes.reachInfo}>

                        {(friendList.friends) ? (friendList.friends.length > 1) ?
                            <>
                                <Typography variant='body1' color="#ed6c02">
                                    {friendList.friends.length}
                                </Typography>
                                <Typography variant='subtitle2' color="#2775f3" sx={{ fontWeight: 550 }}>Friends</Typography>
                            </>
                            :
                            <>
                                <Typography variant='body1' color="#ed6c02">
                                    {friendList.friends.length}
                                </Typography>
                                <Typography variant='subtitle2' color="#2775f3" sx={{ fontWeight: 550 }}>Friend</Typography>

                            </>
                            :
                            "loading"
                        }


                    </div>
                </div>
                <Typography variant='h6' align="center" color="#ed6c02" sx={{ fontWeight: 550 }}>{userData.data.name}</Typography>
                <Typography variant='subtitle2' align="center"  >{userData.data.about}</Typography>
            </div>
        </>
    )
}

export default RightProfile