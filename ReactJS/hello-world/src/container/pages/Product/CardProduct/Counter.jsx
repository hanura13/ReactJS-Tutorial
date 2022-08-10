import { Component } from "react";
import { connect } from 'react-redux';
import { GlobalConsumer } from "../../../../context/context";
import ActionType from "../../../../redux/reducer/globalActionType";
import { rootContext } from '../../../Home/Home';

class Counter extends Component {

    render() {
        console.log(this);
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                <input type="text" value={this.props.state.totalOrder} readOnly />
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>
        )


    }
}
export default GlobalConsumer(Counter);