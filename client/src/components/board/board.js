import React,{useState} from "react";

const Board = () => {
    const [expand,setExpand] = useState(false)
    const handleExpand = () => {
        if(expand===false){
            document.getElementById("board_expand").style.height="385px";
            setExpand(true)
        }else{
            document.getElementById("board_expand").style.height="0px";
            setExpand(false)
        }
    }
    return (
        <div className="board">
            <div>
                <div>
                    <span>알-까</span>
                    <span onClick={handleExpand}><i className="xi-caret-down-min"></i></span>
                </div>
                <div className="board_expand" id="board_expand">
                    <div>
                        <input type="text" />
                        <span><i className="xi-search"></i></span>
                    </div>
                    <div>
                        <span>알-텐데 이야기</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>알-템 이야기</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>알-까</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>알-지도 소식</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                    <div>
                        <span>자료</span>
                        <span><i className="xi-arrow-up xi-rotate-45"></i></span>
                    </div>
                </div>
                <div className="board_main">
                    <div className="board_level1">
                        <span>주목할만한 이야기</span>
                        <div>
                            <div className="board_level1_element">
                                <div>
                                </div>
                                <span>[알-템] 재활용 안되는 예쁜 쓰레기, 화장품 포장 쓰레기는 이제 그만.</span>
                            </div>
                            <div className="board_level1_element">
                                <div>
                                </div>
                                <span>[알-지도] 청정 제주도의 제로웨이스트 바람. 제주도의 환경을 지키는 사람들.</span>
                            </div>

                        </div>
                    </div>
                    <div className="board_level2">
                        <div>
                            <div>
                                <span>업로드순</span>
                                <span><i className="xi-caret-down-min xi-2x"></i></span>
                            </div>
                            <div>
                                <span>분류</span>
                                <span><i className="xi-caret-down-min xi-2x"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="board_level3">
                        <div>
                            <span>[알-템] 친환경 빨대, 어디까지 써봤니?</span>
                        </div>
                        <div>
                            <span>[알-지도] 우리동네 제로웨이스샵을 소개합니다…</span>
                        </div>
                        <div>
                            <span>[알-까] ESG 기업이 떠오른다. 우리가 알아야 할…</span>
                        </div>
                        <div>
                            <span>[알-까] 미세먼지 대처, 학교에서는 어떻게 …</span>
                        </div>
                        <div>
                            <span>[자료] 강원도 탄소중립 보드게임 사용 설명서</span>
                        </div>
                        <div>
                            <span>[자료] 다 쓸떼가 있구나. 이루자몽의 쓸떼 프로…</span>
                        </div>
                        <div>
                            <span>[알-까] 미세먼지와 불평등</span>
                        </div>
                        <div>
                            <span>[알-템] 요즘 떠오르는 제로웨이스트 아이템들</span>
                        </div>
                        <div>
                            <span>[알-텐데] 알텐데가 뭐죠?</span>
                        </div>
                        <div>
                            <span>[알-지도] 충청남도에 제로웨이스트샵이 필요해…</span>
                        </div>
                        <div>
                            <span><i className="xi-angle-down-thin xi-2x"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board;