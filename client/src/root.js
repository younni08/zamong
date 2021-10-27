import React from "react";
import Navi from "./navi"
import Index from "./components/index/index"
import {Switch,Route} from "react-router-dom"
import T3 from "./temp3"
import Items from "./components/items/items"
import Item from "./components/item/item"
import Index2 from "./components/index/index2"
import Article from "./components/article/article"
import Board from "./components/board/board"

import Map from "./components/map/map"
import ShopList from "./components/map/shoplist"
import Map1 from "./components/map/state"

import Login from "./components/login/login"
import Rtem from "./components/rtem/rtme"
import Rtende from "./etc/rtende"

import Zamong1 from "./components/zamong/rtem_item"
import Zamong2 from "./components/zamong/rtem_cate"
import Zamong3 from "./components/zamong/rtende_article"
import Zamong4 from "./components/zamong/rtende_articlelist"
import Zamong5 from "./components/zamong/rtem_recom"
import Zamong6 from "./components/zamong/shop_registry"

import Shop from "./components/map_shop/shop"
import About from "./etc/about"
import Sste from "./etc/sste"
import Qr from "./etc/qr"

const Root = () => {
    return (
        <div className="root">
            <Navi />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/index" component={Index2} />
                <Route path ="/rtende" component={Rtende} />
                <Route path ="/board" component={Board} />
                <Route path ="/Rtem" component={Rtem} />
                <Route path ="/items" component={Items} />
                <Route path ="/item" component={Item} />
                <Route path ="/project" component={Sste} />
                <Route path ="/qr" component={Qr} />

                <Route path ="/map" component={Map} />
                <Route path ="/about" component={About} />

                <Route path ="/state" component={Map1} />
                <Route path ="/shop" component={Shop} />
                <Route path ="/shoplist" component={ShopList} />


                <Route path ="/article" component={Article} />

                <Route path ="/login" component={Login} />
                <Route path ="/rtem_item" component={Zamong1} />
                <Route path ="/rtem_cate" component={Zamong2} />
                <Route path ="/rtende_article" component={Zamong3} />
                <Route path ="/rtende_articlelist" component={Zamong4} />
                <Route path ="/rtem_recom" component={Zamong5} />
                <Route path ="/rtem_shopregistry" component={Zamong6} />


                <Route component={T3} />
            </Switch>
        </div>
    )
}

export default Root;