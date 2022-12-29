
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getPostRequest } from '../Redux/POST/getPost/action'
import PostCard from '../component/PostCard'
import PostSkeleton from '../component/PostSkeleton'




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
const Post = () => {
    const classes = useStyles()

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')




    const posts = useSelector(state => state.Posts)

    const dispatch = useDispatch()
    console.log("------------------------------------------------------------------------------------------------------")
    const bla = new Date('2022-02-21T04:03:55.221+00:00')
    console.log(bla)
    console.log(posts)

    posts.posts.sort((a, b) => {
        let da = new Date(a.createdAt),
            db = new Date(b.createdAt);
        return db - da;
    });







    useEffect(() => {

        dispatch(getPostRequest(id))

    }, [dispatch, id])





    return (
        <>
            <div className={classes.root} >


                {posts && posts.loading ? <><PostSkeleton /><PostSkeleton /><PostSkeleton /><PostSkeleton /></> :
                    posts.error ? <div>{posts.error}</div> :

                        (posts.posts.length > 0) ?
                            posts.posts.map((post) => {
                                return (
                                    <PostCard post={post} isSelfPosts={id ? false : true} id={id} key={post._id} />
                                )
                            })
                            : <div>
                                <p>No Post Available</p>
                                <span>Add Posts to see posts!</span>
                            </div>
                }



            </div>
        </>
    )
}

export default Post