import React, {Component} from 'react';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
//import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
//import Product from '../Product/Product';


class Home extends Component {
    state={
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render(){
        return(
            <div>
                {/*<p>Youtube</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="How to see"
                    desc="2x ditonton"/>
                <YouTubeComp 
                    time="4.00" 
                    title="How to Open"
                    desc="3x ditonton"/>
                <YouTubeComp 
                    time="5.12" 
                    title="How to feel"
                    desc="1x ditonton"/>
                <YouTubeComp 
                    time="3.40" 
                    title="How to smell"
                    desc="2x ditonton"/>
                 <YouTubeComp/> */}

                {/*<p>Counter</p>
                <hr/>
                <Product/> */}
                
                <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp/>
                    : null
                }
            </div>
            
        )
    }
}

export default Home;