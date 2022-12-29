import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Left from "../component/Left";
import { Fab, Grid, Tooltip } from "@mui/material";
import NavBar from "../component/NavBar";
import { Add } from "@mui/icons-material";
import AddPostModal from "../component/AddPostModal";
import Right from '../component/Right';
import RightProfile from '../component/RightProfile';





const MainWrapper = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    console.log(location)




    return (
        <>
            <Grid container spacing={2} sx={{ backgroundColor: "rgb(240, 242, 245)" }}>
                <Grid item xs={2.5}>
                    <Left />
                </Grid>
                <Grid item xs={9.5}>
                    <NavBar />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Outlet />
                        </Grid>
                        <Grid item xs={4}>
                            {(location.pathname === '/friend-requests' || location.pathname === "/friends") ? <RightProfile /> : <Right />}

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Tooltip placement="top" title="Add Post">
                <Fab color="primary" aria-label="add" sx={{
                    position: 'fixed',
                    bottom: 26,
                    right: 26
                }}
                    onClick={() => setOpen(true)}
                >
                    <Add />
                </Fab>
            </Tooltip>
            <AddPostModal open={open} setOpen={setOpen} />

        </>
    )
}

export default MainWrapper