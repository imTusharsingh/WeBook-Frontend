import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center", gap: "18px" }}>
                <Typography sx={{ color: "#332771", fontSize: "120px", fontWeight: "800" }}>Oops!</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>404-PAGE NOT FOUND</Typography>
                <Typography variant="body2" sx={{ fontSize: "16px", textAlign: "center", color: "gray" }}>The page you are looking for might have been removed,<br />had its name changed or is temporarily unavailable.
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button sx={{ borderRadius: "18px", }} variant='contained'>GO TO HOMEPAGE</Button>
                </Link>
            </Box>
        </>
    )
}

export default NotFound