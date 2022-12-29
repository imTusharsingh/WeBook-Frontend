import { Delete, Edit, ExpandMore, MoreVert } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Divider, FormControl, IconButton, Input, InputLabel, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addCommentRequest } from "../Redux/COMMENT/addComment/actions"
import { deleteCommentRequest } from "../Redux/COMMENT/deleteComment/actions"
import { editCommentRequest } from "../Redux/COMMENT/editComment/actions"

const CommentDrawer = ({ expanded, setExpanded, post, isSelfPosts, id, limit }) => {

    const [newComment, setNewComment] = useState('');
    const [oldComment, setOldComment] = useState('');
    const [commentId, setCommentId] = useState();
    const [isEdit, setIsEdit] = useState(false)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event, _id, comment) => {
        setAnchorEl(event.currentTarget);
        setCommentId(_id);
        setOldComment(comment);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOldComment("");
    };

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    const handleChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (e, _id) => {
        e.preventDefault();
        const commentdata = {
            id: _id,
            comment: newComment
        }
        dispatch(addCommentRequest({ commentdata, isSelfPosts, id, limit: limit - 5 }))
        setNewComment("")
    }

    const handleDelete = (post_id) => {
        const commentdata = {
            post_id,
            comment_id: commentId
        }
        dispatch(deleteCommentRequest({ commentdata, isSelfPosts, id, limit: limit - 5 }))
    }

    const handleEdit = () => {
        console.log({ oldComment, _id: commentId })
        setIsEdit(true);
        setNewComment(oldComment);
    }

    const handleCommentEdit = (e) => {
        e.preventDefault();
        const commentdata = {
            comment_id: commentId, comment: newComment
        }
        dispatch(editCommentRequest({ commentdata, isSelfPosts, id, limit: limit - 5 }))
        setIsEdit(false);
        setNewComment("");
        console.log({ comment_id: commentId, comment: newComment })
    }


    return (
        <>
            <Accordion expanded={expanded} >

                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={() => setExpanded(!expanded)}
                >
                    <Typography variant="body2" color="text.secondary" >{expanded ? "All Comments" : "View all Comments"}</Typography>

                </AccordionSummary>

                <AccordionDetails>
                    {post.comments.slice(0).reverse().map(comment => {
                        return (
                            <React.Fragment key={comment._id}>
                                <Divider sx={{ width: "100%" }} />
                                <div style={{ display: 'flex', margin: "8px 0px" }} >
                                    <Avatar alt={comment.userId.name} src={`/${comment.userId.profileImg}`}
                                        sx={{ bgcolor: "red", height: "30px", width: "30px", fontSize: "15px" }}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ margin: "0px 10px" }}>
                                        <strong> {comment.userId.name} </strong>

                                        {comment.comment}
                                    </Typography>
                                    {(auth.data._id === comment.userId._id) &&
                                        <>
                                            <IconButton aria-label="delete" sx={{ marginLeft: "auto", height: "22px" }}
                                                onClick={(e) => handleClick(e, comment._id, comment.comment)}
                                            >
                                                <MoreVert />
                                            </IconButton>
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
                                                <MenuItem onClick={() => handleEdit()}>
                                                    <Edit /> Edit
                                                </MenuItem>
                                                <MenuItem onClick={() => handleDelete(post._id)}>
                                                    <Delete /> Delete
                                                </MenuItem>

                                            </Menu>
                                        </>
                                    }

                                </div>

                            </React.Fragment>
                        )
                    })}

                    <Box
                        component="form"

                        sx={{
                            display: "flex", alignItems: "flex-end", gap: "10px", position: "sticky", bottom: "22px", backgroundColor: "white"
                        }}
                        noValidate
                        autoComplete="off"

                    >
                        <FormControl variant="standard" style={{ width: "90%" }}  >
                            <InputLabel htmlFor="component-simple">Comment</InputLabel>
                            <Input id="component-simple" value={newComment} onChange={handleChange} />
                        </FormControl>
                        {(isEdit) ?
                            <Button type='submit' onClick={(e) => handleCommentEdit(e)}>Edit</Button> :
                            <Button type='submit' onClick={(e) => handleCommentSubmit(e, post._id)}>Submit</Button>
                        }
                    </Box>
                </AccordionDetails>
            </Accordion>


        </>
    )
}

export default CommentDrawer