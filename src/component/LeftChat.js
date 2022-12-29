import { Avatar, Box, Divider, Drawer, IconButton, InputBase, List, ListItemAvatar, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Search } from '@mui/icons-material';


import { useSelector, useDispatch } from 'react-redux';
import { getConversationRequest } from "../Redux/Conversation/getConversation/action"
import { createConversationRequest } from '../Redux/Conversation/createConversation/action';
import { getMessageRequest } from '../Redux/Message/getMessage/action'













const LeftChat = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch();

    const [search, setSearch] = useState()

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const auth = useSelector(state => state.auth)
    const friendList = useSelector(state => state.friendList)
    const conversation = useSelector(state => state.conversation)
    const handelCreateConversation = (recieverId) => {
        dispatch(createConversationRequest(recieverId))

    }

    const handelGetMessage = (conversationId) => {
        dispatch(getMessageRequest(conversationId))
    }

    const filteredFriendList = !search ?
        friendList.friends
        :
        friendList.friends.filter((friend) => friend.name.toLowerCase().includes(search.toLowerCase())
        )

    console.log(filteredFriendList)

    useEffect(() => {
        dispatch(getConversationRequest())
    }, [dispatch])

    const SearchList = () => {
        return (
            <Box
                sx={{ width: 355 }}
                role="presentation"

            >
                <Paper

                    sx={{ mt: 1, display: 'flex', alignItems: 'center', width: "98%", bgcolor: "silver" }}
                    onClick={toggleDrawer(true)}
                >

                    <InputBase

                        sx={{ ml: 1, flex: 1, pt: 1, pb: 1 }}
                        placeholder="Search Friends..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Paper>
                {filteredFriendList.map(friend => {
                    return (
                        <List sx={{ width: '100%', }}
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                            key={friend._id}
                        >
                            <Divider component="li" vaiant='fullWidth' />
                            <ListItemButton
                                onClick={() => handelCreateConversation(friend._id)}
                            >
                                <ListItemAvatar>
                                    <Avatar alt={friend.name[0]} src={`/${friend.profileImg}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={friend.name}

                                />
                            </ListItemButton>
                        </List>

                    )
                })}

            </Box>
        )
    }



    return (

        <>
            <SimpleBar style={{ height: "97vh", backgroundColor: 'white' }}>

                <Typography sx={{ padding: "12px", background: "linear-gradient(100deg,rgb(29,11,11),rgb(61,51,51))", color: "white", fontSize: "25px", fontWeight: 600, borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", position: "sticky", top: "0", zIndex: "2", borderRight: "1px solid gray" }}  >
                    <ArrowBack onClick={() => navigate(-1)} sx={{ cursor: "pointer" }} /> CHATS
                </Typography>

                <Paper

                    sx={{ mt: 1, display: 'flex', alignItems: 'center', width: "98%", bgcolor: "silver", cursor: "pointer" }}
                    onClick={toggleDrawer(true)}
                >
                    <InputBase
                        disabled
                        sx={{
                            ml: 1, flex: 1, cursor: "pointer",

                            '& .MuiInputBase-input': {
                                cursor: 'pointer',
                            }
                        }}
                        placeholder="Search Friends..."
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>

                </Paper>

                <Drawer
                    anchor={'left'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {SearchList()}
                </Drawer>
                {(conversation.data.length > 0) ?
                    <List sx={{ width: '100%', }}>
                        {

                            conversation.data.map(elem => {
                                return (
                                    <Link to={`/chat`}
                                        state={{
                                            conversationId: elem._id,
                                            reciever: elem.members.find(member => { return (member._id !== auth.data._id) })
                                        }}
                                        style={{ textDecoration: "none", color: "inherit" }}
                                        key={elem._id}
                                    >
                                        <ListItemButton
                                            selected={location.state?.conversationId === elem._id}
                                            onClick={() => handelGetMessage(elem._id)}
                                        >

                                            <ListItemAvatar>
                                                <Avatar alt={elem.members.find(member => {
                                                    return (
                                                        (member._id !== auth.data._id)
                                                    )
                                                }).name[0]}
                                                    src={`/${elem.members.find(member => {
                                                        return (
                                                            (member._id !== auth.data._id)
                                                        )
                                                    }).profileImg}`} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={elem.members.find(member => {
                                                    return (
                                                        (member._id !== auth.data._id)
                                                    )
                                                }).name}
                                            />

                                        </ListItemButton>

                                    </Link>
                                )
                            })


                        }
                    </List>
                    :
                    <Typography variant="subtitle1" color="GrayText" sx={{ display: "flex", flexDirection: "coloumn", alignItems: "center", justifyContent: "center", height: "60vh" }} >
                        Start Conversation With Friend By Searching Them...
                    </Typography>}
            </SimpleBar>
        </>
    )
}





export default LeftChat