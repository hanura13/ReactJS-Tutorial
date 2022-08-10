import React, { Children, Component, createContext } from "react";

const rootContext = createContext();

//Provider
const Provider = rootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class PrentComponent extends Component {
            state = {
                totalOrder: 5
            }

            dispatch = (action) => {
                switch (action.type) {
                    case 'PLUS_ORDER':
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })
                    case 'MINUS_ORDER':
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                }
            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }

    )
}
export default GlobalProvider;

//Consumer
const Consumer = rootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )

                            }
                        }
                    </Consumer >
                )
            }
        }


    )
}
