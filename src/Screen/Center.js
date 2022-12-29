
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getFriendsPostRequest } from '../Redux/POST/getFriendPost/action'
import PostCard from '../component/PostCard'
import InfiniteScroll from "react-infinite-scroll-component";




const useStyles = makeStyles((theme) => ({

    root: {
        position: "relative",


        backgroundColor: "#ffffff",
        boxShadow: 1,
        margin: theme.spacing(.5),
        borderRadius: theme.shape.borderRadius * 2,
        padding: theme.spacing(2),

    }
}))
const Center = () => {
    const classes = useStyles()
    const [limit, setLimit] = useState(5);
    // const [isMore, setIsMore] = useState(true);




    const posts = useSelector(state => state.friendPosts)



    const dispatch = useDispatch()
    console.log((limit - posts.posts.length) > 5 ? false : true)
    const fetchMoreData = () => {
        dispatch(getFriendsPostRequest(limit))

        setLimit(limit + 5);
    };



    useEffect(() => {
        fetchMoreData()
    }, [])

    posts.posts.sort((a, b) => {
        let da = new Date(a.createdAt),
            db = new Date(b.createdAt);
        return db - da;
    });



    return (
        <>
            <div className={classes.root} >



                {
                    (posts.posts.length > 0) ?
                        <InfiniteScroll
                            dataLength={posts.posts.length}
                            next={fetchMoreData}
                            hasMore={(limit - posts.posts.length) > 5 ? false : true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >{
                                posts.posts.map((post) => {
                                    return (
                                        <PostCard post={post} key={post._id} limit={limit} />
                                    )
                                })}
                        </InfiniteScroll>
                        : <div>
                            <p>No Post Available</p>
                            <span>Add Friends To See Posts</span>
                        </div>
                }


            </div>
        </>
    )
}

export default Center