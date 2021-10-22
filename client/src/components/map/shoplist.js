import React from "react";
import ShopListElement from "./shoplist_element";

const ShopList = () => {
    return (
        <div className="shoplist">
            <div>
                <div className="map_main_navi">
                    <div>
                        <div>
                            <div>
                                <img src="./pics/refill1.png" alt="refill" />
                                <span>서제 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill2.png" alt="refill" />
                                <span>화장품 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill3.png" alt="refill" />
                                <span>곡류 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill4.png" alt="refill" />
                                <span>팝업 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill5.png" alt="refill" />
                                <span>반려용품 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill6.png" alt="refill" />
                                <span>비건 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill7.png" alt="refill" />
                                <span>무포장 리필</span>
                            </div>
                            <span></span>
                        </div>
                        <div>
                            <div>
                                <img src="./pics/refill8.png" alt="refill" />
                                <span>공작소 리필</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="shoplist_page">
                    <span className="on">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                <div className="shoplist_list">
                    <ShopListElement />
                    <ShopListElement />
                    <ShopListElement />
                    <ShopListElement />
                </div>
            </div>
        </div>
    )
}

export default ShopList;