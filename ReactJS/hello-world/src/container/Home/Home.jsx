
//Libraries
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//pages
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import BlogPost from "../pages/BlogPost/BlogPost";
import YoutubeComp from "../pages/YoutubeComp/YoutubeComp";
import Hooks from "../pages/Hooks/Hooks";

//Styling
import "./Home.css"
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";



class Home extends Component {

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtubecomp">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />} />
                        <Route path="/detail-post/:id" element={<DetailPost />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/lifecycle" element={<LifeCycleComp />} />
                        <Route path="/youtubecomp" element={<YoutubeComp />} />
                        <Route path="/hooks" element={<Hooks />} />
                    </Routes>
                </Fragment>
            </BrowserRouter >

        )
    }

}

export default GlobalProvider(Home);