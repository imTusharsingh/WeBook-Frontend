import { AccountCircle, Home, Logout, Search, Notifications, PeopleAlt, PersonAdd, Settings, Wysiwyg, Chat } from '@mui/icons-material'
import { AppBar, Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authUserError } from '../Redux/AuthUser/index'


const useStyles = makeStyles((theme) => ({

    appBar: {
        '&&': {
            borderRadius: theme.shape.borderRadius * 3,
            backgroundColor: "rgb(240,242,245)",
            position: 'sticky',
            border: "none",
            boxShadow: "none"
        }
    },
    appBarScroll: {
        '&&': {
            borderRadius: theme.shape.borderRadius * 3,
            backgroundColor: "rgba(255,255,255,0.8)",
            position: 'sticky',
        }
    },
    toolBar: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between"
    },
    left: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    icon: {
        display: "flex",
        alignItems: "center",
        color: "gray"
    },
    right: {
        display: "flex",
        alignItems: "center",
        color: "black"
    }
}))


const NavBar = () => {
    const { data } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [isScroll, setIsScroll] = useState(false)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handelLogout = () => {

        dispatch(authUserError())
        navigate("/signin")
    }

    const handelScroll = () => {
        if (window.scrollY > 30) {
            setIsScroll(true)
        }
        else {
            setIsScroll(false)
        }
    }
    const classes = useStyles()

    window.addEventListener('scroll', handelScroll)
    return (
        <>
            <AppBar className={!isScroll ? classes.appBar : classes.appBarScroll}>
                <Toolbar className={classes.toolBar} >

                    <div className={classes.left}>
                        <div className={classes.icon}>
                            <IconButton size='small'>
                                {
                                    (location.pathname === "/") ? <Home fontSize='small' /> :
                                        (location.pathname === "/friend-requests") ? <PersonAdd fontSize='small' /> :
                                            (location.pathname === "/friends") ? <PeopleAlt fontSize='small' /> :
                                                (location.pathname === "/profile") ? <AccountCircle fontSize='small' /> :
                                                    (location.pathname === "/Search") ? <Search fontSize='small' /> :
                                                        (location.pathname === "/Posts") ? <Wysiwyg fontSize='small' /> :
                                                            ""
                                }

                            </IconButton>
                            <Typography> / </Typography>
                            <Typography sx={{ marginLeft: "8px" }}>{
                                (location.pathname === "/") ? "Dashboard" :
                                    (location.pathname === "/friend-requests") ? "Friend Requests" :
                                        (location.pathname === "/friends") ? "Friends" :
                                            (location.pathname === "/profile") ? "Profile" :
                                                (location.pathname === "/Search") ? "Search" :
                                                    (location.pathname === "/Posts") ? "Posts" :
                                                        ""
                            }
                            </Typography>
                        </div>
                        <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "550" }}>
                            {
                                (location.pathname === "/") ? "Dashboard" :
                                    (location.pathname === "/friend-requests") ? "Friend Requests" :
                                        (location.pathname === "/friends") ? "Friends" :
                                            (location.pathname === "/profile") ? "Profile" :
                                                (location.pathname === "/Search") ? "Search" :
                                                    (location.pathname === "/Posts") ? "Posts" :
                                                        ""
                            }
                        </Typography>
                    </div>

                    <div className={classes.right} >
                        <Tooltip title="Account settings">

                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ mr: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar
                                    sx={{ border: "2px solid black", width: "32px", height: "32px", backgroundColor: "orangered", textTransform: "capitalize", fontSize: "22px" }}
                                    alt={data.name[0]}
                                    src={`/${data.profileImg}`}
                                />
                            </IconButton>

                        </Tooltip>
                        <Tooltip title="Chat">
                            <Link to="/chat">
                                <IconButton sx={{ mr: 2 }}>
                                    <Chat />
                                </IconButton>
                            </Link>
                        </Tooltip>

                        <IconButton >
                            <Notifications />
                        </IconButton>



                    </div>

                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/profile" style={{ color: "inherit", textDecoration: "none" }}>
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                </Link>
                <Divider />

                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handelLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default NavBar