import React from "react";
import Navi from "./navi"
import Index from "./components/index/index"
import {Switch,Route} from "react-router-dom"
import T3 from "./temp3"
import Items from "./components/items/items"
import Item from "./components/item/item"
import Article from "./components/article/article"
import Board from "./components/board/board"

import Map from "./components/map/map"
import Map1 from "./components/map/state_1"
import Map2 from "./components/map/state_2"
import Map3 from "./components/map/state_3"
import Map4 from "./components/map/state_4"
import Map5 from "./components/map/state_5"
import Map6 from "./components/map/state_6"
import Map7 from "./components/map/state_7"
import Map8 from "./components/map/state_8"
import Map9 from "./components/map/state_9"
import Map10 from "./components/map/state_10"
import Map11 from "./components/map/state_11"
import Map12 from "./components/map/state_12"
import Map13 from "./components/map/state_13"
import Map14 from "./components/map/state_14"
import Map15 from "./components/map/state_15"
import Map16 from "./components/map/state_16"
import Map17 from "./components/map/state_17"

import Login from "./components/login/login"
import Rtem from "./components/rtem/rtme"
import Rtende from "./components/rtende/rtende"

import Zamong1 from "./components/zamong/rtem_item"
import Zamong2 from "./components/zamong/rtem_cate"
import Zamong3 from "./components/zamong/rtende_article"
import Zamong4 from "./components/zamong/rtende_articlelist"
import Zamong5 from "./components/zamong/rtem_recom"

import Shop from "./components/map_shop/shop"

const Root = () => {
    return (
        <div className="root">
            <Navi />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path ="/rtende" component={Rtende} />
                <Route path ="/board" component={Board} />
                <Route path ="/Rtem" component={Rtem} />
                <Route path ="/items" component={Items} />
                <Route path ="/item" component={Item} />
                <Route path ="/togather" component={T3} />
                <Route path ="/think" component={T3} />
                <Route path ="/about" component={T3} />

                <Route path ="/map" component={Map} />

                <Route path ="/state1" component={Map1} />
                <Route path ="/state2" component={Map2} />
                <Route path ="/state3" component={Map3} />
                <Route path ="/state4" component={Map4} />
                <Route path ="/state5" component={Map5} />
                <Route path ="/state6" component={Map6} />
                <Route path ="/state7" component={Map7} />
                <Route path ="/state8" component={Map8} />
                <Route path ="/state9" component={Map9} />
                <Route path ="/state10" component={Map10} />
                <Route path ="/state11" component={Map11} />
                <Route path ="/state12" component={Map12} />
                <Route path ="/state13" component={Map13} />
                <Route path ="/state14" component={Map14} />
                <Route path ="/state15" component={Map15} />
                <Route path ="/state16" component={Map16} />
                <Route path ="/state17" component={Map17} />

                <Route path ="/shop" component={Shop} />


                <Route path ="/article" component={Article} />

                <Route path ="/login" component={Login} />
                <Route path ="/rtem_item" component={Zamong1} />
                <Route path ="/rtem_cate" component={Zamong2} />
                <Route path ="/rtende_article" component={Zamong3} />
                <Route path ="/rtende_articlelist" component={Zamong4} />
                <Route path ="/rtem_recom" component={Zamong5} />


                <Route component={T3} />
            </Switch>
        </div>
    )
}

export default Root;