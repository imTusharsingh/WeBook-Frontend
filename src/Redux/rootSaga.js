import { all } from "redux-saga/effects"



import { registerationSaga } from "./USER/Registration/saga"
import { loginSaga } from "./USER/login/saga"
import { getUserSaga } from "./USER/getUserDetails/saga"
import { editUserSaga } from "./USER/editUserDetails/saga"
import { searchUserSaga } from "./USER/searchUser/saga"

import { getPostSaga } from "./POST/getPost/saga"
import { getFriendsPostSaga } from "./POST/getFriendPost/saga"
import { deletePostSaga } from "./POST/deletePost/saga"
import { updatePostSaga } from "./POST/updatePost/saga"
import { uploadPostSaga } from "./POST/uploadPost/saga"
import { getPostByIdSaga } from "./POST/getPostById/saga"

import { deleteCommentSaga } from "./COMMENT/deleteComment/saga"
import { addCommentSaga } from "./COMMENT/addComment/saga"
import { editCommentSaga } from "./COMMENT/editComment/saga"

import { likeSaga } from "./LIKE/like/saga"
import { dislikeSaga } from "./LIKE/dislike/saga"


import { acceptFriendSaga } from "./FRIEND/acceptFriendRequest/saga"
import { getFriendsListSaga } from "./FRIEND/getFriendList/saga"
import { getRequestListSaga } from "./FRIEND/getFriendRequestList/saga"
import { getRequestSentListSaga } from "./FRIEND/getFriendRequestSentList/saga"
import { rejectFriendSaga } from "./FRIEND/rejectFriendRequest/saga"
import { removeFriendSaga } from "./FRIEND/removeFriend/saga"
import { removeFriendRequestSaga } from "./FRIEND/removeFriendRequest/saga"
import { sendFriendSaga } from "./FRIEND/sendFriendRequest/saga"


import { getConversationSaga } from "./Conversation/getConversation/saga"
import { createConversationSaga } from "./Conversation/createConversation/saga"

import { getMessageSaga } from "./Message/getMessage/saga"
import { createMessageSaga } from "./Message/createMessage/saga"



function* rootSaga() {
    yield all([
        //USER
        loginSaga(),
        getUserSaga(),
        editUserSaga(),
        searchUserSaga(),
        registerationSaga(),

        //POST
        getFriendsPostSaga(),
        getPostSaga(),
        getPostByIdSaga(),
        deletePostSaga(),
        updatePostSaga(),
        uploadPostSaga(),

        //COMMENT
        addCommentSaga(),
        editCommentSaga(),
        deleteCommentSaga(),

        //LIKE
        likeSaga(),
        dislikeSaga(),

        //FRIEND
        acceptFriendSaga(),
        getFriendsListSaga(),
        getRequestListSaga(),
        getRequestSentListSaga(),
        rejectFriendSaga(),
        removeFriendSaga(),
        removeFriendRequestSaga(),
        sendFriendSaga(),

        //Conversation
        getConversationSaga(),
        createConversationSaga(),

        //Message
        getMessageSaga(),
        createMessageSaga()
    ])
}

export default rootSaga