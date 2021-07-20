import React from "react";

const Board = () => {
    return (
        <div className="board">
            <div>
                <div>
                    <span>알-까</span>
                    <span><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="board_main">
                    <div className="board_level1">
                        <span>주목할만한 이야기</span>
                        <div>
                            <div className="board_level1_element">
                                <div>
                                </div>
                                <span></span>
                            </div>

                        </div>
                    </div>
                    <div className="board_level2">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Board;