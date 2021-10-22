import React from "react";
import {Link} from "react-router-dom";

const ShopListElement = () => {
    return (
        <Link to="/shop" className="map_main_list_element">
            <div>
                <img src="./pics/test.png" alt="shop" />
            </div>
            <div>
                <div>
                    <span>가나다 상점</span>
                </div>
                <span>상점 소개</span>
                <span>주소</span>
            </div>
        </Link>
    )
}

export default ShopListElement;