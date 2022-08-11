import React, { Component, useState, useEffect } from "react";
import './Hooks.css';


// class Hooks extends Component {

//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = "ReactJS Hello World";
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah: {this.state.count}</p>
//                 <button className="p-hooks-button" onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title Change: ${count}`;
        return () => {
            document.title = 'ReactJS Hello World!'
        }
    })
    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah: {count}</p>
            <button className="p-hooks-button" onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;