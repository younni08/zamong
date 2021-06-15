import React from "react";
import Workshopbox from "./workshipbox"

const Workshop = () => {
    return (
        <div className="workshop">
            <div>
                <div className="workshop_navi">
                    <span>전체</span>
                    <span>아이템</span>
                    <span>아이템</span>
                    <span>아이템</span>
                    <span>아이템</span>
                </div>
                <div className="workshop_searchbar">
                    <div>
                        <select>
                            <option>전체</option>
                            <option>등등</option>
                        </select>
                        <input />
                    </div>
                    <span>검색</span>
                </div>
                <div className="workshop_body">
                    <Workshopbox />
                    <Workshopbox />
                    <Workshopbox />
                    <Workshopbox />
                </div>
                <div className="workshop_paging">
                    <div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workshop;