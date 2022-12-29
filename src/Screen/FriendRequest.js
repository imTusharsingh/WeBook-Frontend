import { Box, Grid, Tab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FriendCard from '../component/FriendCard'

import { useSelector, useDispatch } from "react-redux"
import { getRequestListRequest } from '../Redux/FRIEND/getFriendRequestList/action'
import { getRequestSentListRequest } from '../Redux/FRIEND/getFriendRequestSentList/action'
import { TabContext, TabList, TabPanel } from '@mui/lab'


const Friendrequest = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const dispatch = useDispatch()
    const friendrequest = useSelector(state => state.friendRequestList)
    const sentrequest = useSelector(state => state.sentRequestList)
    useEffect(() => {
        dispatch(getRequestListRequest())
        dispatch(getRequestSentListRequest())
    }, [dispatch])

    return (

        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Friend Requests" value="1" />
                            <Tab label="Sent Friend Requests" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Grid container spacing={2} >
                            {(friendrequest.friendRequests.length > 0) ?
                                <FriendCard friends={friendrequest.friendRequests} /> :
                                <div><h4>No Friend Requests</h4></div>
                            }
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container spacing={2} >
                            {(sentrequest.sentRequests.length > 0) ?
                                <FriendCard friends={sentrequest.sentRequests} isSentRequest={true} /> :
                                <div><h4>No Sent Friend Requests</h4></div>
                            }
                        </Grid>
                    </TabPanel>

                </TabContext>
            </Box>
        </>
    )
}

export default Friendrequest