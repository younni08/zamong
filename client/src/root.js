import React, { useEffect, useState } from "react";
import Navi from "./navi"
import Index from "./components/index/index"
import {Switch,Route} from "react-router-dom"
import T3 from "./temp3"
import Items from "./components/items/items"
import Item from "./components/item/item"
import Article from "./components/article/article"
import Board from "./components/board/board"
import Map from "./components/map/map"
import Zamong from "./components/zamong/zamong"
import Login from "./components/login/login"
import Rtem from "./components/rtem/rtme"

const Root = () => {
    return (
        <div className="root">
            <Navi />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path ="/board" component={Board} />
                <Route path ="/Rtem" component={Rtem} />
                <Route path ="/items" component={Items} />
                <Route path ="/item" component={Item} />
                <Route path ="/togather" component={T3} />
                <Route path ="/think" component={T3} />
                <Route path ="/about" component={T3} />
                <Route path ="/map" component={Map} />
                <Route path ="/article" component={Article} />
                <Route path ="/zamong" component={Zamong} />
                <Route path ="/login" component={Login} />
                <Route component={T3} />
            </Switch>
        </div>
    )
}

export default Root;