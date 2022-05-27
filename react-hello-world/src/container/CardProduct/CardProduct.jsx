import React, {Component} from "react";

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleOnCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue)
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleOnCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleOnCounterChange(this.state.order);
            })
        }
       
    }

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                         <img src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/4/12/05b195b4-7a1e-43a5-93e7-b3a5b115cd66.jpg" alt=""/>
                     </div>
                     <p className="product-title">Daging sapi khas wagyu ala ala</p>
                     <p className="product-price">Rp. 34.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>&#8210;</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}><span>&#43;</span></button>
                    </div>
                </div>
           
        );
    }
}

export default CardProduct;