import React from "react";


export default class LifeCycle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }
    }

    static getDriverStateFromProps(props, state) {

    }

    componentDidMount() {
        this.setState({
            count: 2
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {

    }

    componentWillUnmount() {

    }


    render() { // Termasuk Lifecycle
        return (
            <button>Componen Button {this.state.count}</button>
        )
    }
}