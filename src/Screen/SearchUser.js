import { Avatar, Box, Button, Divider, FormControl, FormHelperText, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'

import React, { useState, useEffect } from 'react'

import { State, City } from "country-state-city"

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { searchUserRequest } from "../Redux/USER/searchUser/action"
import { removeFriendRequest } from "../Redux/FRIEND/removeFriend/action"
import { sendFriendRequest } from "../Redux/FRIEND/sendFriendRequest/action"
import { acceptFriendRequest } from "../Redux/FRIEND/acceptFriendRequest/action"
import { rejectFriendRequest } from "../Redux/FRIEND/rejectFriendRequest/action"
import { removeFriendRequestRequest } from "../Redux/FRIEND/removeFriendRequest/action"
import { getRequestListRequest } from "../Redux/FRIEND/getFriendRequestList/action"
import { getRequestSentListRequest } from "../Redux/FRIEND/getFriendRequestSentList/action"
import { getFriendsListRequest } from "../Redux/FRIEND/getFriendList/action"

const SearchUser = () => {
    const SearchUser = useSelector(state => state.searchUser)
    const friendList = useSelector(state => state.friendList)
    const friendRequestList = useSelector(state => state.friendRequestList)
    const sentRequestList = useSelector(state => state.sentRequestList)
    const { data } = useSelector(state => state.auth)

    const allState = State.getStatesOfCountry("IN");
    const [state, setState] = useState();
    const [allCityOfSelectedState, setAllCityOfSelectedState] = useState([])
    const [city, SetCity] = useState()

    useEffect(() => {
        setAllCityOfSelectedState(City.getCitiesOfState("IN", state))
    }, [state])

    const [search, setSearch] = useState()
    const [more, setMore] = useState(1);



    const dispatch = useDispatch()

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


    useEffect(() => {

        const data = {
            search,
            city,
            state,
            more
        }
        dispatch(searchUserRequest(data))

    }, [search, city, state, more, dispatch])
    useEffect(() => {
        dispatch(getFriendsListRequest())
        dispatch(getRequestSentListRequest())
        dispatch(getRequestListRequest())

    }, [dispatch])


    return (
        <>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: "15px 0", width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-basic-search"
                        label="Search User"
                        variant="standard"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={state}
                                label="Age"
                                onChange={(e) => setState(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {allState.map(elem => (
                                    <MenuItem value={elem.isoCode}>{elem.name}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Filter Using State</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={city}
                                label="City"
                                onChange={(e) => SetCity(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {allCityOfSelectedState.map(elem => (
                                    <MenuItem value={elem.name}>{elem.name}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Filter Using City</FormHelperText>
                        </FormControl>

                    </div>
                </Box>
                <Box sx={{ border: "1px solid black", padding: "5px" }}>
                    <Typography sx={{ margin: "10px" }}>Results...</Typography>
                    <Divider />
                    <List>

                        {(SearchUser.data.length > 0) ?
                            <>
                                {SearchUser.data.map(user => {
                                    return (

                                        <ListItem key={user._id}>
                                            <Link style={{ textDecoration: "none", color: "inherit" }} to={`/profile?_id=${user._id}`}>
                                                <ListItemAvatar>
                                                    <Avatar alt="hello" src={user.profileImg && `/${user.profileImg}`} />
                                                </ListItemAvatar>
                                            </Link>

                                            <ListItemText

                                                primary={
                                                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/profile?_id=${user._id}`}>
                                                        <Typography sx={{ fontSize: "15px", lineHeight: "15px" }}>{user.name}</Typography>
                                                    </Link>
                                                }
                                                secondary={
                                                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/profile?_id=${user._id}`}>
                                                        <Typography component={"span"} sx={{ fontSize: "13px", marginRight: '10px', lineHeight: "25px" }}>{user.friends.length > 1 ? `${user.friends.length} friends` : `${user.friends.length} friend`}</Typography>
                                                    </Link>
                                                }
                                            />


                                            {(user._id.includes(data._id)) ?
                                                <></> :
                                                friendList.friends.some(item => item._id === user._id) ?
                                                    <Button onClick={() => RemoveFriend(user._id)} >Remove</Button> :
                                                    (findSentRequestElement(sentRequestList.sentRequests, user._id)) ?
                                                        <Button onClick={() => RemoveFriendRequest(findSentRequestElement(sentRequestList.sentRequests, user._id)._id)} >Cancel</Button> :
                                                        (findRequestElement(friendRequestList.friendRequests, user._id)) ?
                                                            <> <Button onClick={() => AcceptFriend(findRequestElement(friendRequestList.friendRequests, user._id)._id)} >Accept</Button>
                                                                <Button onClick={() => RejectFriend(findRequestElement(friendRequestList.friendRequests, user._id)._id)} >Reject</Button></>
                                                            :
                                                            <Button onClick={() => RequestFriend(user._id)} >Request</Button>

                                            }

                                        </ListItem>

                                    )
                                })}

                                {(more <= SearchUser.data.length) &&
                                    < Button onClick={() => setMore(more + 1)}>Show More...</Button>
                                }

                            </>

                            :
                            <Typography sx={{ textAlign: "center", margin: "10px" }}>No result</Typography>
                        }




                    </List>


                </Box>



            </div>

        </>
    )
}

export default SearchUser