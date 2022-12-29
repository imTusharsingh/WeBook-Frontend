import React, { useEffect, useState } from 'react'
import { Avatar, Badge, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from "@mui/material"

import { useSelector } from 'react-redux';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            content: '""',
        },
    }
}));


const RightChats = () => {


    const friendList = useSelector(state => state.friendList)
    const onlineUser = useSelector(state => state.onlineUser)
    const [onlineFriends, setOnlineFriends] = useState([])

    useEffect(() => {
        setOnlineFriends(
            friendList.friends.filter((friend) => onlineUser.onlineUsers.some((online) => online.userId === friend._id))
        )
    }, [onlineUser, friendList])

    return (


        <div style={{ height: "97vh", overflowY: "auto", backgroundColor: 'white' }}>
            <Typography sx={{ padding: "12px", background: "linear-gradient(100deg,rgb(61,51,51),rgb(29,11,11))", color: "white", fontSize: "25px", fontWeight: 600, borderTopRightRadius: "8px", borderBottomRightRadius: "8px", position: "sticky", top: "0", zIndex: "2", borderLeft: "1px solid gray" }}  >
                Online Users
            </Typography>

            <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: "0 8px" }}>
                {
                    (onlineFriends.length > 0) ?
                        onlineFriends.map(online => {
                            return (
                                <ListItem sx={{ padding: '0px 5px' }} divider={true} >
                                    <ListItemAvatar>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            variant="dot"
                                        >
                                            <Avatar alt={online.name[0]} src={`/${online.profileImg}`} />
                                        </StyledBadge>
                                    </ListItemAvatar>
                                    <ListItemText

                                        primary={
                                            <Typography sx={{ fontSize: "15px", lineHeight: "15px" }}>{online.name}</Typography>
                                        }
                                        secondary={


                                            <Typography component={"span"} sx={{ fontSize: "13px", marginRight: '10px', lineHeight: "25px" }}>Online</Typography>


                                        }
                                    />
                                </ListItem>
                            )
                        })




                        :
                        <div>No online members</div>
                }


            </List>
            {/* 
            <Button variant="text" size="small">View More...</Button> */}

        </div>
    )
}

export default RightChats