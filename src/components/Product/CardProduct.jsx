import React from 'react';

export default class CardProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            order: 0
        }
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlusEvent = (event) => {
        this.setState({
            order: this.state.order + 1
        }, () => {

            this.handleCounterChange(this.state.order);
        });
    }

    handleMinusEvent = (event) => {

        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {

                this.handleCounterChange(this.state.order);
            })
        }
    }


    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://pbs.twimg.com/profile_images/1538082356736708609/J0B2mDBu_400x400.jpg" alt="Produk Gambar" />
                </div>
                <p className="product-title">Ini merupakan dagangan</p>
                <p className="product-price">Rp 500.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinusEvent}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlusEvent}>+</button>
                </div>
            </div>
        );
    }
}