import React from "react";

const MongArticle = () => {

    return (
        <div className="mong_item">
            <span>*는 필수 항목입니다.</span>
            <div>
                <div className="mong_item_manager3">
                    <div className="mong_item_general">
                        <div>
                            <span>제목*</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>커버 이미지</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="file" className="image" id="mong_rtende_image" />
                        </div>
                    </div>
                </div>
                <div className="mong_item_manager3">
                    <div className="mong_item_general">
                        <div>
                            <span>테그*</span>
                            <span>,로 분리해주세요</span>
                        </div>
                        <div className="general_input">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="mong_item_general">
                        <div>
                            <span>첨부파일</span>
                            <span></span>
                        </div>
                        <div className="general_input">
                            <input type="file" multiple className="image" id="mong_rtende_file" />
                        </div>
                    </div>
                </div>
                
                
                <div className="mong_item_general_submit">
                    <span>입력하기</span>
                </div>
            </div>
        </div>
    )
}
export default MongArticle;