import { makeStyles } from '@mui/styles'
import { Link, NavLink, useLocation } from 'react-router-dom'

import React from 'react'
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Dashboard, PeopleAlt, PersonAdd, Search } from '@mui/icons-material'



const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        height: '93vh',
        margin: theme.spacing(.5),
        borderTopLeftRadius: theme.shape.borderRadius * 3,
        borderBottomLeftRadius: theme.shape.borderRadius * 3,
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'sticky',
        top: '0'

    },
    Logo: {
        '&&': {
            color: 'white',
            margin: theme.spacing(1),
            fontWeight: 550
        }
    },
    menu: {
        display: "flex",
        flexDirection: 'column',
        gap: theme.spacing(.5),
        width: "100%",
        color: "white"
    },
    listButton: {
        "&&": {
            borderRadius: theme.shape.borderRadius * 3,
            "&:hover":
            {
                backgroundColor: "#54687a"
            }
        }

    }



}))

const Left = () => {
    const location = useLocation()
    console.log(location.pathname)


    const classes = useStyles()


    return (
        <>
            <div className={classes.root} >
                <Typography variant='h6' className={classes.Logo}>
                    WeBook
                </Typography>
                <Divider sx={{ backgroundColor: 'white', width: '100%' }} />

                <List component='nav' className={classes.menu}>
                    <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }} >
                        <ListItemButton
                            selected={location.pathname === "/"}
                            className={classes.listButton}
                        >
                            <ListItemIcon sx={{ color: 'white' }} >
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary='Dashboard' />
                        </ListItemButton>
                    </NavLink>

                    <Link to="/friend-requests" style={{ color: "inherit", textDecoration: "none" }}>
                        <ListItemButton
                            selected={location.pathname === "/friend-requests"}
                            className={classes.listButton}
                        >
                            <ListItemIcon sx={{ color: 'white' }} >
                                <PersonAdd />
                            </ListItemIcon>
                            <ListItemText primary='Friend request' />
                        </ListItemButton>
                    </Link>

                    <Link to="/friends" style={{ color: "inherit", textDecoration: "none" }}>
                        <ListItemButton
                            selected={location.pathname === "/friends"}
                            className={classes.listButton}
                        >
                            <ListItemIcon sx={{ color: 'white' }} >
                                <PeopleAlt />
                            </ListItemIcon>
                            <ListItemText primary='Friends' />
                        </ListItemButton>
                    </Link>

                    <Link to="/Search" style={{ color: "inherit", textDecoration: "none" }}>
                        <ListItemButton
                            selected={location.pathname === "/Search"}
                            className={classes.listButton}
                        >
                            <ListItemIcon sx={{ color: 'white' }} >
                                <Search />
                            </ListItemIcon>
                            <ListItemText primary='Search User' />
                        </ListItemButton>
                    </Link>




                </List>

            </div>
        </>
    )
}

export default Left