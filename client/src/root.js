import React, { useEffect, useState } from "react";
import Navi from "./navi"
import Tempbody from "./tempbody"
import {Switch,Route} from "react-router-dom"
import T1 from "./temp1"
import T2 from "./temp2"
import T3 from "./temp3"
import T4 from "./temp4"
import T5 from "./temp5"
import T6 from "./temp6"
import T7 from "./temp7"

const Root = () => {
    return (
        <div className="root">
            <Navi />
            <Switch>
                <Route exact path="/" component={Tempbody} />
                <Route path ="/visit" component={T1} />
                <Route path ="/buy" component={T2} />
                <Route path ="/togather" component={T3} />
                <Route path ="/think" component={T4} />
                <Route path ="/talk" component={T5} />
                <Route path ="/about" component={T6} />
                <Route path ="/hope" component={T7} />
            </Switch>
        </div>
    )
}

export default Root;