import { useSelector, useDispatch } from 'react-redux';
import { CounterDashBoard } from './counterdashboard';

//Higher Order Component
//This Component only Subscribes state as prop and dispatch as Prop 
//and again its as prop to another child  child
const Counter = props => {
    const counter = useSelector(appState => appState.counterReducer.counter)
    return <CounterDashBoard counter={counter} />
}
export { Counter }