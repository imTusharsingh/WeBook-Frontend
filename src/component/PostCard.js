import { Comment, Delete, Edit, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { likeRequest } from '../Redux/LIKE/like/action'
import { dislikeRequest } from '../Redux/LIKE/dislike/actions'
import { deletePostRequest } from '../Redux/POST/deletePost/action'
import { updatePostRequest } from '../Redux/POST/updatePost/action'

import CommentDrawer from './CommentAccordin'

import moment from 'moment'




const PostCard = ({ post, isSelfPosts, id, limit }) => {



    const dispatch = useDispatch()
    const { data } = useSelector(state => state.auth)

    const [editId, setEditId] = useState();

    const [caption, setCaption] = useState();

    const [expanded, setExpanded] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [editCaptionOpen, setEditCaptionOpen] = useState(false);

    const handleEditCaptionOpen = (id, caption) => {
        setEditId(id)
        setCaption(caption)
        setEditCaptionOpen(true);
    };

    const handleEditCaptionClose = () => {
        const editData = {
            id: editId,
            caption: caption
        }
        dispatch(updatePostRequest(editData));
        setEditCaptionOpen(false);
        setCaption("")
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDelete = (id) => {
        dispatch(deletePostRequest(id))
    }





    const handelLike = (postId) => {

        dispatch(likeRequest({ postId, isSelfPosts, id, limit: limit - 5 }))
        console.log(postId)
    }
    const handelDisLike = (postId) => {
        dispatch(dislikeRequest({ postId, isSelfPosts, id, limit: limit - 5 }))
        console.log(postId)
    }

    const found = post.likes.find(like => {
        return (
            like.userId === data._id
        )
    })



    return (

        <>
            <Card sx={{
                margin: "10px 0px", boxShadow: "none", border: " 1px solid rgba(0, 0, 0, 0.12)"

            }} key={post._id}>
                <CardHeader
                    sx={{ textTransform: "capitalize" }}
                    avatar={
                        <Avatar sx={{ bgcolor: "red", textTransform: "capitalize" }} >
                            {post.userId.name[0]}
                        </Avatar>
                    }

                    action={
                        isSelfPosts &&
                        <div>
                            <IconButton id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <MoreVert />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => handleEditCaptionOpen(post._id, post.caption)}>
                                    <Edit /> Edit
                                </MenuItem>
                                <MenuItem onClick={() => handleDelete(post._id)} >
                                    <Delete /> Delete
                                </MenuItem>
                            </Menu>
                        </div>
                    }

                    title={post.userId.name}
                    subheader={

                        moment.duration(moment.utc(post.createdAt).diff(moment(new Date()))).humanize(true)

                    }
                />
                <CardMedia
                    component="img"
                    width="100%"
                    image={`/${post.postImage}`}

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Caption </strong>
                        {post.caption}
                    </Typography>

                </CardContent>

                <CardContent sx={{ paddingTop: "2px", paddingBottom: "2px" }}>
                    <Typography variant="body2" color="text.secondary" >
                        {post.likes.length > 1 ?
                            `${post.likes.length} likes` :
                            `${post.likes.length} like`
                        }
                    </Typography>
                </CardContent>


                <CardActions sx={{ paddingTop: "2px", paddingBottom: "2px" }}>

                    {
                        (found) ?
                            <IconButton onClick={() => handelDisLike(post._id)} >
                                <Favorite sx={{ color: "red" }} />
                            </IconButton>
                            :
                            <IconButton onClick={() => handelLike(post._id)} >
                                <Favorite />
                            </IconButton>

                    }

                    <IconButton onClick={() => setExpanded(!expanded)}>

                        <Comment />

                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                </CardActions>
                <CardContent>



                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "10px" }}>

                        <strong>
                            {post.comments.length > 1 ?
                                `${post.comments.length} Comments` :
                                `${post.comments.length} Comment`
                            }
                        </strong>
                    </Typography>

                    <CommentDrawer expanded={expanded} setExpanded={setExpanded} post={post} isSelfPosts={isSelfPosts} id={id} limit={limit} />



                </CardContent>

            </Card>

            <div>


                <Dialog open={editCaptionOpen} onClose={() => setEditCaptionOpen(false)}>
                    <DialogTitle>Edit Caption</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To edit caption, please enter new caption here.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="caption"
                            label="Caption"
                            type="text"
                            fullWidth
                            variant="standard"
                            autoComplete="off"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleEditCaptionClose}>Edit</Button>
                    </DialogActions>
                </Dialog>
            </div>


        </>
    )
}

export default PostCard