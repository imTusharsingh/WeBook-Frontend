
import { Modal, Box, Typography, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { editUserRequest } from "../Redux/USER/editUserDetails/action"



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    height: "80vh"
};

const EditModal = ({ open, setOpen }) => {

    const [input, setInput] = useState({ files: "", name: "", line1: "", line2: "", state: "", city: "", about: "" })
    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false)
    };

    const handelInput = (e) => {
        e.preventDefault();

        setInput({
            ...input,
            [e.target.name]: (e.target.name === "files") ? e.target.files[0] : e.target.value
        })

    }

    const handelSubmit = () => {
        const { name, line1, line2, state, city, about } = input
        var form = new FormData();
        form.set('profileImg', input.files);
        if (name) {
            form.append('name', name);
        }
        if (line1) {
            form.append('line1', line1);
        } if (line2) {
            form.append('line2', line2);
        } if (state) {
            form.append('state', state);
        } if (city) {
            form.append('city', city);
        } if (about) {
            form.append('about', about)
        }

        dispatch(editUserRequest(form))
        console.log(form)
        setOpen(false)
    }

    const userData = useSelector(state => state.userDetail);

    useEffect(() => {



        setInput({
            name: userData.data.name,
            line1: userData.data.address.line1,
            line2: userData.data.address.line2,
            state: userData.data.address.state,
            city: userData.data.address.city,
            profile: userData.data.about
        })


    }, [])








    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Profile
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: "25px" }}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: "15px 0", width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            id="standard-basic-file"
                            label="Upload Image"
                            variant="standard"
                            type="file"
                            name='files'
                            onChange={handelInput}
                        />


                        <TextField
                            id="standard-basic-name"
                            label="Enter Your Name"
                            variant="standard"
                            name='name'
                            value={input.name}
                            onChange={handelInput}
                        />

                        <TextField
                            id="standard-address-line1"
                            label="Address"
                            type="text"
                            variant="standard"
                            name='line1'
                            value={input.line1}
                            onChange={handelInput}
                        />
                        <TextField
                            id="standard-address-line2"
                            label="Address Line-2"
                            type="text"
                            variant="standard"
                            name='line2'
                            value={input.line2}
                            onChange={handelInput}
                        />
                        <div style={{ display: "flex", gap: "10px" }}>
                            <TextField
                                id="standard-address-city"
                                label="City"
                                type="text"
                                variant="standard"
                                name='city'
                                value={input.city}
                                onChange={handelInput}
                            />
                            <TextField
                                id="standard-address-state"
                                label="State"
                                type="text"
                                variant="standard"
                                name='state'
                                value={input.state}
                                onChange={handelInput}
                            />

                        </div>
                        <TextField
                            id="standard-about"
                            label="About"
                            type="text"
                            variant="standard"
                            multiline
                            name='about'
                            value={input.about}
                            onChange={handelInput}
                        />

                    </Box>

                    <Button variant="contained" sx={{
                        width: "100%", fontWeight: 600, fontSize: "15px", padding: "10px 0", borderRadius: "2px", bgcolor: "black", '&:hover': {
                            backgroundColor: "#54687a",
                        }

                    }}
                        onClick={handelSubmit}
                    >Edit Profile</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default EditModal