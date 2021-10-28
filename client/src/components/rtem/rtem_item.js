import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import Child from "./rtem_child"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Rtem_pick = (props) => {
    const [titile,setTitle] = useState("")
    const [array,setArray] = useState([])
    useEffect(()=>{
        init()
    },[props])

    const init = () => {
        if(props.data===undefined) return 0
        console.log(props)
        setArray(props.data)
        setTitle(props.data[0].rtem_t1_name)
    }
    
    return (
        <div className="rtem_level4">
            <span>{titile}</span>
            <div>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    // infinite
                    itemClass="containeritem"
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 8
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    >
                {
                    array?array.map(c=>{
                        return(
                            <Link to={"/items?c="+titile} key={c.rtem_t2_pk}>
                                <Child 
                                    key={c.rtem_t2_pk}
                                    rtem_t2_key={c.rtem_t2_key}
                                    rtem_t2_type={c.rtem_t2_type}
                                />
                            </Link>
                        )
                    }):""
                }
                </Carousel>
            </div>
        </div>
    )
}

export default Rtem_pick