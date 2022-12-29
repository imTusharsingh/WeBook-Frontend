import { Settings } from '@mui/icons-material'
import { Avatar, Button, Divider, IconButton, Skeleton, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import EditModal from '../component/EditModal'
import ImageCards from '../component/ImageCards'
import { useSearchParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getUserRequest } from "../Redux/USER/getUserDetails/action"
import { getPostRequest } from "../Redux/POST/getPost/action"



import { removeFriendRequest } from "../Redux/FRIEND/removeFriend/action"
import { sendFriendRequest } from "../Redux/FRIEND/sendFriendRequest/action"
import { acceptFriendRequest } from "../Redux/FRIEND/acceptFriendRequest/action"
import { rejectFriendRequest } from "../Redux/FRIEND/rejectFriendRequest/action"
import { removeFriendRequestRequest } from "../Redux/FRIEND/removeFriendRequest/action"
import { getRequestListRequest } from "../Redux/FRIEND/getFriendRequestList/action"
import { getRequestSentListRequest } from "../Redux/FRIEND/getFriendRequestSentList/action"
import { getFriendsListRequest } from "../Redux/FRIEND/getFriendList/action"




const Profile = () => {
    const [searchParams] = useSearchParams();
    const _id = searchParams.get('_id')

    const friendList = useSelector(state => state.friendList)
    const friendRequestList = useSelector(state => state.friendRequestList)
    const sentRequestList = useSelector(state => state.sentRequestList)

    const RemoveFriend = (id) => {
        dispatch(removeFriendRequest(id))
    }
    const RequestFriend = (id) => {
        dispatch(sendFriendRequest(id))
    }
    const RejectFriend = (id) => {
        dispatch(rejectFriendRequest(id))
    }
    const AcceptFriend = (id) => {
        dispatch(acceptFriendRequest(id))
    }

    const RemoveFriendRequest = (id) => {
        dispatch(removeFriendRequestRequest(id))
    }
    const findSentRequestElement = (array, item) => {
        return array.find((element) => {
            return element.recieverId._id === item;
        })
    }
    const findRequestElement = (array, item) => {
        return array.find((element) => {
            return element.senderId._id === item;
        })
    }


    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.auth)
    const userData = useSelector(state => state.userDetail)
    const userPost = useSelector(state => state.Posts)
    console.log(userPost)


    useEffect(() => {
        dispatch(getUserRequest(_id));

        dispatch(getPostRequest(_id));

        dispatch(getFriendsListRequest())
        dispatch(getRequestSentListRequest())
        dispatch(getRequestListRequest())


    }, [dispatch, _id])


    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", padding: "30px" }}>
                <div></div>

                <>
                    {userData.loading ? <Skeleton animation="wave" variant="circular" width={150} height={150} /> :
                        <Avatar
                            alt={userData.data.name}
                            src={(userData.data.profileImg) && `/${userData.data.profileImg}`}
                            sx={{ width: 150, height: 150, fontSize: "120px" }}
                        />}
                    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                        {userData.loading ? <Skeleton animation="wave" height={50} width={400} style={{ marginBottom: 6 }} /> :

                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <Typography variant='h4'>{userData.data.name}</Typography>
                                {data._id === userData.data._id ?
                                    <Button variant="outlined" size='small' component="span" sx={{ textTransform: "none", color: "gray" }}
                                        onClick={() => setOpen(true)}
                                    >
                                        Edit Profile
                                    </Button>
                                    :

                                    friendList.friends.some(item => item._id === userData.data._id) ?
                                        <Button variant="outlined" size='small' component="span" sx={{ textTransform: "none", color: "gray" }}
                                            onClick={() => RemoveFriend(userData.data._id)}
                                        >
                                            Remove
                                        </Button>
                                        :
                                        (findSentRequestElement(sentRequestList.sentRequests, userData.data._id)) ?
                                            <Button variant="outlined" size='small' component="span" sx={{ textTransform: "none", color: "gray" }}
                                                onClick={() => RemoveFriendRequest(findSentRequestElement(sentRequestList.sentRequests, userData.data._id)._id)} >
                                                Cancel
                                            </Button> :
                                            (findRequestElement(friendRequestList.friendRequests, userData.data._id)) ?
                                                <> <Button
                                                    variant="outlined" size='small' component="span" sx={{ textTransform: "none", color: "gray" }}
                                                    onClick={() => AcceptFriend(findRequestElement(friendRequestList.friendRequests, userData.data._id)._id)} >Accept</Button>
                                                    <Button
                                                        variant="outlined" size='small' component="span" sx={{ textTransform: "none", color: "gray" }}
                                                        onClick={() => RejectFriend(findRequestElement(friendRequestList.friendRequests, userData.data._id)._id)} >Reject</Button></>
                                                :
                                                <Button
                                                    variant="outlined" size='small' component="span" sx={{ textTransform: "none", color: "gray" }}
                                                    onClick={() => RequestFriend(userData.data._id)} >Request</Button>

                                }
                                {data._id === userData.data._id &&
                                    <IconButton  >
                                        <Settings />
                                    </IconButton>}
                            </div>
                        }

                        {userData.loading ? <Skeleton animation="wave" height={30} width={150} style={{ marginBottom: 6 }} /> :

                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <Typography variant='h6'>{(userPost.posts.length > 1) ?
                                    `${userPost.posts.length} Posts` :
                                    `${userPost.posts.length} Post`
                                }</Typography>

                                <Typography variant='h6'>

                                    {(userData.data.friends) ? (userData.data.friends.length > 1) ?
                                        `${userData.data.friends.length} Friends` :
                                        `${userData.data.friends.length} Friend` :
                                        "loading"
                                    }
                                </Typography>
                            </div>}

                    </div>
                </>

                {/* } */}
                <div></div>
            </div>

            <Divider />
            {userData.loading ?
                <Skeleton variant="rectangular" width="100%">
                    <div style={{ paddingTop: '50%' }} />
                </Skeleton>
                :
                (userPost.posts.length > 0) ?
                    <ImageCards userPost={userPost} _id={_id} />
                    :
                    <div>No Posts Uploaded</div>
            }

            {open &&
                <EditModal setOpen={setOpen} open={open} />
            }

        </>
    )
}

export default Profile