import logo from './logo.svg';
import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {increaseCounter, decreaseCounter} from './redux/action/counterAction';
import MyComponent from "./components/MyComponent";

// Chuyển sang class component
import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div>
                <MyComponent>

                </MyComponent>
                
            </div>
        );
    }
}


// const App = () => {
//     const count = useSelector(state => state.counter.count);
//     const dispatch = useDispatch();
//
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Hello world Hoi Dan IT demo Redux Toolkit
//                 </p>
//                 <div>Count = {count}</div>
//                 <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//                 <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//             </header>
//         </div>
//     );
// }
export default App;
