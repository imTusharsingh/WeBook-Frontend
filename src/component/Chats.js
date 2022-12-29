import { InsertEmoticon, Send } from '@mui/icons-material'
import { Avatar, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Picker from 'emoji-picker-react'

import moment from 'moment'


import { useSelector, useDispatch } from 'react-redux';
import { createMessageRequest } from "../Redux/Message/createMessage/action"
import { addArrivalMessage } from "../Redux/Message/getMessage/action"


import { useLocation } from 'react-router-dom';

import socketConnection from './socketConnection';

const Chats = () => {

    const [newMessage, setNewMessage] = useState("")
    const [arrivalMessage, setArrivalMessage] = useState(null);

    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setNewMessage(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    const scrollRef = useRef();
    const location = useLocation()


    const messages = useSelector(state => state.messages);
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



    useEffect(() => {
        socketConnection.on("getMessage", (data) => {
            setArrivalMessage({
                reciever: data.reciever,
                text: data.text,
                conversationId: data.conversationId,
                createdAt: Date.now(),
            });

        });
    }, []);

    useEffect(() => {
        (arrivalMessage && location.state?.conversationId === arrivalMessage.conversationId &&


            dispatch(addArrivalMessage(arrivalMessage)))

    }, [arrivalMessage, dispatch]);



    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            conversationId: location.state.conversationId,
            text: newMessage,
            reciever: location.state.reciever._id
        }

        socketConnection.emit("sendMessage", {
            conversationId: location.state.conversationId,
            text: newMessage,
            reciever: location.state.reciever,
        });
        dispatch(createMessageRequest(data))
        setNewMessage("")
    }
    return (
        <>

            <SimpleBar style={{ height: "89vh", backgroundColor: '#dfe0e0' }} >
                {(location.state?.reciever) ?
                    <>
                        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "11px", background: "rgb(61,51,51)", color: "white", fontSize: "25px", fontWeight: 600, position: "sticky", top: "0", zIndex: "2" }}  >
                            <Avatar alt={location.state.reciever.name[0]} src={`/${location.state.reciever.profileImg}`} />
                            <Typography>{location.state.reciever.name}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: 'column' }}>
                            {(messages.data.length > 0) ? messages.data.map(elem => {
                                return (

                                    elem.reciever._id === auth.data._id ?

                                        <Box ref={scrollRef} sx={{ display: "flex", margin: "6px", marginRight: "auto", gap: "8px", maxWidth: "75%" }} key={elem._id}>
                                            <Avatar alt={location.state.reciever.name[0]} src={`/${location.state.reciever.profileImg}`} sx={{ width: "35px", height: "35px" }} />
                                            <Box>
                                                <Box sx={{ background: "linear-gradient(100deg,#227cea,#429cef)", padding: "10px", borderRadius: "10px" }}>
                                                    {elem.text}
                                                </Box>
                                                <Typography variant='body2' color="GrayText" sx={{ display: "flex", justifyContent: "flex-start" }}>
                                                    {moment.duration(moment.utc(elem.createdAt).diff(moment(new Date()))).humanize(true)}
                                                </Typography>
                                            </Box>
                                        </Box>


                                        :

                                        <Box ref={scrollRef} sx={{ display: "flex", margin: "6px", marginLeft: "auto", gap: "8px", maxWidth: "75%" }} key={elem._id} >
                                            <Box>
                                                <Box sx={{ background: "linear-gradient(100deg,#69dfda,#2bc5b3)", padding: "10px", borderRadius: "10px", }}>
                                                    {elem.text}
                                                </Box>
                                                <Typography variant='body2' color="GrayText" sx={{ display: "flex", justifyContent: "flex-end" }}>
                                                    {moment.duration(moment.utc(elem.createdAt).diff(moment(new Date()))).humanize(true)}
                                                </Typography>
                                            </Box>
                                            <Avatar alt={auth.data.name[0]} src={`/${auth.data.profileImg}`} sx={{ width: "35px", height: "35px", textTransform: "capitalize" }} />
                                        </Box>


                                )
                            }) :
                                <Typography variant="subtitle1" color="GrayText" sx={{ display: "flex", flexDirection: "coloumn", alignItems: "center", justifyContent: "center", height: "75vh" }}>
                                    Be First To Message...
                                </Typography>}

                        </Box>
                    </>
                    :

                    <>
                        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", height: "62px", background: "rgb(61,51,51)", color: "white", fontSize: "25px", fontWeight: 600, position: "sticky", top: "0", zIndex: "2" }}  >
                        </Box>
                        <Typography variant="subtitle1" color="GrayText" sx={{ display: "flex", flexDirection: "coloumn", alignItems: "center", justifyContent: "center", height: "75vh" }}>
                            Start Conversation to See chats...
                        </Typography>
                    </>
                }


            </SimpleBar>

            <div style={{ position: "relative" }}>
                {showPicker && <Picker
                    pickerStyle={{ width: '100%', position: "absolute", bottom: "50px" }}
                    onEmojiClick={onEmojiClick} />}

                {(location.state?.reciever) &&


                    <Paper
                        component="form"
                        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "99%", position: "sticky", bottom: "8px" }}
                        onSubmit={(e) => handleSubmit(e)}

                    >

                        <IconButton sx={{ p: "10px" }} aria-label="menu" onClick={() => setShowPicker(val => !val)}>
                            <InsertEmoticon />
                        </IconButton>

                        <InputBase sx={{ ml: 1, flex: 1 }} value={newMessage} placeholder="Type a message" onChange={(e) => setNewMessage(e.target.value)} />

                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton type="submit" color="primary" sx={{ p: "10px" }} aria-label="directions"  >
                            <Send />
                        </IconButton>
                    </Paper>

                }
            </div>


        </>
    )
}

export default Chats

