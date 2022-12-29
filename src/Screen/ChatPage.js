import { Grid } from '@mui/material'
import React from 'react'
import Chats from '../component/Chats'
import LeftChat from "../component/LeftChat"
import RightChats from '../component/RightChats'



const ChatPage = () => {


















    return (
        <>



            <Grid container sx={{ backgroundColor: "rgb(240, 242, 245)" }}>

                <Grid item xs={3}>
                    <LeftChat />
                </Grid>
                <Grid item xs={6}>
                    <Chats />
                </Grid>
                <Grid item xs={3}>
                    <RightChats />
                </Grid>



            </Grid>
        </>
    )
}

export default ChatPage