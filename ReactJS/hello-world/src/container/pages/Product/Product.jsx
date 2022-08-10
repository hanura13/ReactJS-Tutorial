import React, { Component, Fragment } from "react";
import GlobalProvider, { GlobalConsumer } from "../../../context/context";
import CardProduct from "./CardProduct/CardProduct";
import './Product.css';


class Product extends Component {

    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://docs.microsoft.com/id-id/windows/apps/design/signature-experiences/images/iconography_systemicons.svg" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

// const mapStateProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateProps)(Product);
export default GlobalConsumer(Product);