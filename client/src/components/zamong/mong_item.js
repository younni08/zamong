import React from "react";

const MongItem = () => {
    return (
        <div className="mong_item">
            <span>*는 필수 항목입니다.</span>
            <div>
                <div className="mong_item_general">
                    <div>
                        <span>대분류*</span>
                        <span>부엌</span>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="mong_item_general">
                    <div>
                        <span>중분류*</span>
                        <span>칫솔</span>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="mong_item_general">
                    <div>
                        <span>소분류*</span>
                        <span>대나무 칫솔</span>
                    </div>
                    <div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default MongItem;