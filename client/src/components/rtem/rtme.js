import React from "react";
import {Link} from "react-router-dom"

const Rtem = () => {
    return (
        <div className="rtem">
            <div>
                <div>
                    <span>알-템</span>
                    <span><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="rtem_main">
                    <div className="rtem_level1">
                        <input type="text" placeholder="예) 대나무 칫솔" />
                        <span><i className="xi-search"></i></span>
                    </div>
                    <div className="rtem_level2">
                        <div>
                            <span>광고 배너</span>
                        </div>
                        <div>
                            <span className="on"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="rtem_level3">
                        <span>이루자몽 PICK</span>
                        <div>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                        </div>
                    </div>
                    <div className="rtem_level4">
                        <span>부엌</span>
                        <div>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=부엌">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                        </div>
                    </div>
                    <div className="rtem_level4">
                        <span>화장실</span>
                        <div>
                            <Link to="/items?c=화장실">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=화장실">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=화장실">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=화장실">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                        </div>
                    </div>
                    <div className="rtem_level4">
                        <span>생활</span>
                        <div>
                            <Link to="/items?c=생활">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=생활">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=생활">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                            <Link to="/items?c=생활">
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rtem;