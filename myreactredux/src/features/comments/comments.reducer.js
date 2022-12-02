import { likeAction, dislikeAction } from "./comments.actions"

const CommentsReducer = (state = { like: 10, dislike: 10 }, action) => {
    switch (action.type) {
        case likeAction:
            //immutable logic 
            return { ...state, like: state.like + 1 }
        case dislikeAction:
            //immutable logic 
            return { ...state, dislike: state.dislike + 1 }
        default:
            return state; //default state//initali state would be render during inital render
    }
}
export { CommentsReducer }