import React, { Component, Fragment } from "react";
import Counter from "./Counter";


class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-product">
                    <img src="https://images.tokopedia.net/img/cache/300-square/product-1/2020/10/5/104177027/104177027_d0f5eb10-3f9e-4cfb-888f-8051d5b2a492_1181_1181.webp?ect=4g" alt="produk" />
                </div>
                <p className="product-title">Daging Ayam</p>
                <p className="product-price">Rp.40.000</p>
                <Counter />
            </div>
        );
    }
}


export default CardProduct;