import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { LoadingButton } from '@mui/lab';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem, FormHelperText, FormControl, InputLabel, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserRequest } from "../Redux/USER/Registration/action"
import { State, City } from 'country-state-city';



const theme = createTheme();

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector(state => state.registration)

    const allState = State.getStatesOfCountry("IN");
    const [selectedState, setSelectedState] = useState()
    const [allCityOfSelectedState, setAllCityOfSelectedState] = useState([])
    const [selectedCity, setSelectedCity] = useState()

    useEffect(() => {
        setAllCityOfSelectedState(City.getCitiesOfState("IN", selectedState))
    }, [selectedState])


    console.log(selectedState, selectedCity)



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            address: {
                line1: data.get('line1'),
                line2: data.get('line2'),
                city: data.get('city'),
                state: data.get('state')
            }

        }
        console.log(userData)

        dispatch(registerUserRequest(userData))

    };
    if (error) {
        console.log(error)
    } else if (!loading && message) {
        navigate("/signin")
    }


    return (
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="line1"
                                    label="Address line1"
                                    type="line1"
                                    id="line1"
                                    autoComplete="line1"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="line2"
                                    label="Address line2"
                                    type="line2"
                                    id="line2"
                                    autoComplete="line2"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label1" required>State</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label1"
                                        id="demo-simple-select-state"
                                        name="state"
                                        label="State"
                                        onChange={(e) => setSelectedState(e.target.value)}
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {allState.map(elem => (
                                            <MenuItem value={elem.isoCode}>{elem.name}</MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>select your State</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label2" required>City</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label2"
                                        id="demo-simple-select-city"
                                        name="city"
                                        label="City"
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {allCityOfSelectedState.map(elem => (
                                            <MenuItem value={elem.name}>{elem.name}</MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Select your City</FormHelperText>
                                </FormControl>
                            </Grid>

                        </Grid>

                        <LoadingButton
                            type="submit"
                            loading={loading}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </LoadingButton>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signin" style={{ textDecoration: "none", color: "blue" }}  >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp