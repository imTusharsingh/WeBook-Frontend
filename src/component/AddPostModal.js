
import { Modal, Box, Typography, TextField, Button, } from '@mui/material'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { uploadPostRequest } from "../Redux/POST/uploadPost/action"



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

const AddPostModal = ({ open, setOpen }) => {

    const [input, setInput] = useState({ files: "", caption: "" })
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
        const { caption } = input
        var form = new FormData();
        form.set('post', input.files);
        if (caption) {
            form.append('caption', caption);
        }

        dispatch(uploadPostRequest(form))
        console.log(form)
        setOpen(false)
    }





    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Upload Post
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
                            id="standard-basic-caption"
                            label="Enter Caption"
                            variant="standard"
                            name='caption'
                            value={input.caption}
                            onChange={handelInput}
                        />
                    </Box>

                    <Button variant="contained" sx={{
                        width: "100%", fontWeight: 600, fontSize: "15px", padding: "10px 0", borderRadius: "2px", bgcolor: "black", '&:hover': {
                            backgroundColor: "#54687a",
                        }

                    }}
                        onClick={handelSubmit}
                    >Add Post</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default AddPostModal