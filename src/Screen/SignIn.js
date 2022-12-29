import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { loginUserRequest } from '../Redux/USER/login/action'
import { useSelector, useDispatch } from 'react-redux'






const theme = createTheme();

const SignIn = () => {
    const { loading, data, error } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const formdata = new FormData(event.currentTarget);
        console.log({
            email: formdata.get('email'),
            password: formdata.get('password'),
        });
        const input = {
            email: formdata.get('email'),
            password: formdata.get('password'),
        }

        dispatch(loginUserRequest(input))



    };

    if (error) {
        console.log(error)
    } else if (data) {
        console.log(data)
        navigate("/")
    }










    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            marginBottom: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <LoadingButton
                                type="submit"
                                loading={loading}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </LoadingButton>

                            <Grid container>

                                <Grid item>
                                    <Link to="/signup" style={{ textDecoration: "none", color: "blue" }} >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>

            </ThemeProvider>

        </>

    );
}


export default SignIn