import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector, Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';

const initialState = {
    entities: [],
    error: null,
    entity: null,
    loading: false,
}

//here it returns promise with different states pending,rejected,fullfiled
//middleware logic
const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (input, thunkAPI) => {
        console.log('thunkApi', thunkAPI)
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await (await fetch(url)).json()
        return res
    }
)
//get By Id
const getPostsById = createAsyncThunk('posts/getPostsById',
    async (id, thunkAPI) => {
        console.log('byId', id)
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const res = await (await fetch(url)).json()
        return res
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        //'posts/requestStatus/pending'
        [getPosts.pending]: (state) => {
            console.log('pending')
            state.loading = true
        },
        //'posts/requestStatus/pending'

        [getPosts.fulfilled]: (state, { payload }) => {
            console.log('done')
            state.loading = false
            state.entities = payload
        },
        [getPosts.rejected]: (state) => {
            console.log('rejected')
            state.loading = false
            // state.error = action.error
        },
        [getPostsById.fulfilled]: (state, { payload }) => {
            console.log('payload', payload)
            state.entity = payload
            console.log(state.entity)
        }
    },
})
export const postReducer = postSlice.reducer


const appStore = configureStore({
    reducer: {
        posts: postReducer
    }
})
export default function Posts() {
    const dispatch = useDispatch()
    const { entities, loading, entity } = useSelector((state) => state.posts)

    useEffect(() => {
        //start async call - dispatch()
        dispatch(getPosts())
    }, [])

    const getPostById = id => {
        console.log(id)
        dispatch(getPostsById(id))
    }

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Blog Posts</h2>
            {
                entities.map((post) =>
                    <>
                        <p style={{ cursor: 'hand' }} onClick={() => {
                            getPostById(post.id)
                        }} key={post.id}>{post.title}                        
                        </p>

                    </>

                )}
            {entity ? <div>
                <h2>id: {entity.id} </h2>
                <p>Body: {entity.body}</p>
            </div> : ''}
        </div>
    )
}

const App = () => <div style={{ margin: 50, padding: 50, backgroundColor: 'ButtonFace' }}>
    <Provider store={appStore}>
        <h1 style={{ textAlign: 'center' }}>React Redux Integration App</h1>
        <Posts />
    </Provider>

</div>
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);