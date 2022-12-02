import { useSelector, useDispatch } from 'react-redux';
import { dislikeAction, likeAction } from './comments.actions';

const Comments = props => {
    const { like, dislike } = useSelector(appState => appState.commentsReducer)
    const dispatch = useDispatch()

    return <div>
        <h1>Like {like} Dislike {dislike}</h1>
        <button onClick={() => {
            dispatch({ type: likeAction })
        }}>Like</button>
        <button onClick={() => {
            dispatch({ type: dislikeAction })
        }}>Dislike</button>
    </div>

}
export { Comments }