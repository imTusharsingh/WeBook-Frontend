import { combineReducers } from "redux";

//USER
import { registrationReducer } from "./USER/Registration/reducer"
import { loginReducer } from "./USER/login/reducer";
import { userDetailsReducer } from "./USER/getUserDetails/reducer";
import { editUserReducer } from "./USER/editUserDetails/reducer"
import { searchUserReducer } from "./USER/searchUser/reducer"

//POST
import { deletePostReducer } from "./POST/deletePost/reducer";
import { getFriendsPostReducer } from "./POST/getFriendPost/reducer";
import { getPostReducer } from "./POST/getPost/reducer";
import { updatePostReducer } from "./POST/updatePost/reducer";
import { uploadPostReducer } from "./POST/uploadPost/reducer";
import { getPostByIdReducer } from "./POST/getPostById/reducer";

//COMMENT
import { addCommentReducer } from "./COMMENT/addComment/reducer";
import { editCommentReducer } from "./COMMENT/editComment/reducer";
import { deleteCommentReducer } from "./COMMENT/deleteComment/reducer";

//LIKE
import { likeReducer } from "./LIKE/like/reducer";
import { dislikeReducer } from "./LIKE/dislike/reducer";

//FRIENDS
import { acceptFriendRequestReducer } from "./FRIEND/acceptFriendRequest/reducer";
import { getfriendsListReducer } from "./FRIEND/getFriendList/reducer";
import { getRequestSentListReducer } from "./FRIEND/getFriendRequestSentList/reducer";
import { getRequestListReducer } from "./FRIEND/getFriendRequestList/reducer";
import { rejectFriendRequestReducer } from "./FRIEND/rejectFriendRequest/reducer";
import { removeFriendReducer } from "./FRIEND/removeFriend/reducer";
import { removeFriendRequestReducer } from "./FRIEND/removeFriendRequest/reducer";
import { sendFriendRequestReducer } from "./FRIEND/sendFriendRequest/reducer";
import { persistreducer } from "./AuthUser";

//COVERSATION
import { createConversationReducer } from "./Conversation/createConversation/reducer"
import { getConversationReducer } from "./Conversation/getConversation/reducer"

//MESSAGE
import { createMessageReducer } from "./Message/createMessage/reducer"
import { persistMessageReducer } from "./Message/getMessage/reducer"

import { onlineUserReducer } from "./USER/onlineUser/index"

const rootReducer = combineReducers({
    //USER
    login: loginReducer,
    editUser: editUserReducer,
    searchUser: searchUserReducer,
    userDetail: userDetailsReducer,
    registration: registrationReducer,

    //POST
    friendPosts: getFriendsPostReducer,
    deletePost: deletePostReducer,
    Posts: getPostReducer,
    updatePost: updatePostReducer,
    uploadPost: uploadPostReducer,
    postById: getPostByIdReducer,

    //Comment
    addComment: addCommentReducer,
    editComment: editCommentReducer,
    deleteComment: deleteCommentReducer,

    //Like
    like: likeReducer,
    dislike: dislikeReducer,

    //Friend
    acceptFriend: acceptFriendRequestReducer,
    friendRequestList: getRequestListReducer,
    friendList: getfriendsListReducer,
    sentRequestList: getRequestSentListReducer,
    rejectFriend: rejectFriendRequestReducer,
    removeFriend: removeFriendReducer,
    removeFriendRequest: removeFriendRequestReducer,
    sendFriendRequest: sendFriendRequestReducer,

    //Conversation
    conversation: getConversationReducer,
    createConversation: createConversationReducer,

    //Message
    messages: persistMessageReducer,
    createMessage: createMessageReducer,


    auth: persistreducer,
    onlineUser: onlineUserReducer
});

export default rootReducer;