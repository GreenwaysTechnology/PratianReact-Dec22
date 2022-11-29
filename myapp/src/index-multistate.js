import React from "react";
import ReactDOM from "react-dom/client";

class Comment extends React.Component {
    state = {
        like: 0,
        dislike: 0,
        nutral: 0
    }
    //event listener
    onLike = () => {
        this.setState(prvState => {
            return {
                like: prvState.like + 1,
                dislike: prvState.dislike,
                nutral: prvState.nutral
            }
        })
    }
    onDisLike = () => {
        this.setState(prvState => {
            return {
                like: prvState.like,
                dislike: prvState.dislike + 1,
                nutral: prvState.nutral
            }
        })
    }
    onNutural = () => {
        this.setState(prvState => {
            return {
                like: prvState.like,
                dislike: prvState.dislike,
                nutral: prvState.nutral + 1
            }
        })
    }

    render() {
        console.log('Current State=>', this.state)
        // return <CommentDashBoard like={this.state.like} dislike={this.state.dislike} nutral={this.state.nutral} onLike={this.onLike} onDisLike={this.onDisLike} onNutural={this.onNutural} />
        return <CommentDashBoard {...this.state} onLike={this.onLike} onDisLike={this.onDisLike} onNutural={this.onNutural} />
    }
}

//child component
export const CommentDashBoard = props => {
    return <div>
        <h1>Comment App</h1>
        <h2>Like {props.like} Dislike {props.dislike} Nutral {props.nutral}</h2>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDisLike}>DisLike</button>
        <button onClick={props.onNutural}>Nutral</button>

    </div>
}

const App = () => <div>
    <Comment />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)     