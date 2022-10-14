import React, { Fragment } from 'react';
import CardProduct from "./CardProduct";

export default class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            order: 0
        }
    }

    onCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="Initeh logo" />
                    </div>
                    <div className="troley">
                        <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="Keranjang" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(Value) => this.onCounterChange(Value)} />
            </Fragment>
        );
    }
}