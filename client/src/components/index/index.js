import React from "react";
import {Link} from "react-router-dom"

const Index = () => {
    return (
        <div className="index">
            <div>
                <div className="index_level1">
                    <img src="./pics/rtende.svg" alt="logo" />
                </div>
                <div className="index_level2">
                    <div></div>
                    <div></div>
                </div>
                <div className="index_level3">
                    <div></div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className="index_level4">
                    <div></div>
                    <Link to="/rtende">
                        <div>
                            시작
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index;