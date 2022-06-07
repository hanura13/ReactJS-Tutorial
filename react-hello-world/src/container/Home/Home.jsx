import React, {Component, Fragment} from 'react';
import BlogPost from '../pages/BlogPost/BlogPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import './Home.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';

class Home extends Component {
    state={
        showComponent: true
    }

    render(){
        return(
            <Router>
            <Fragment>
                <div className="navigation">
                    <Link to="/">BlogPost</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/youtube">Youtube</Link>
                </div>
                <Routes>
                <Route path="/" exact element={<BlogPost/>}/>
                <Route path="/product" exact element={<Product/>}/>
                <Route path="/lifecycle" exact   element={<LifeCycleComp/>}/>
                <Route path="/youtube" element={<YoutubeCompPage/>}/>
                </Routes>
            </Fragment>

            </Router>
        )
    }
}

export default Home;