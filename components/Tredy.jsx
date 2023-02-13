import React, { useEffect, useRef } from 'react'

// icons
import { IoArrowDown } from 'react-icons/io5'

// circle
import CircleType from 'circletype'

// jquery
import $ from 'jquery'

function Tredy() {
    const rotatedRef = useRef(null)

    useEffect(() => {
        new CircleType(rotatedRef.current).radius(100)

        $(window).scroll(function() {
            var offset = $(window).scrollTop()
            offset = offset * 0.4

            $(".circular-text").css({
                "-moz-transform" : "rotate("+ offset +"deg)",
                "-webkit-transform" : "rotate("+ offset +"deg)",
                "-o-transform" : "rotate("+ offset +"deg)",
                "-ms-transform" : "rotate("+ offset +"deg)",
                "transform" : "rotate("+ offset +"deg)"
            })
        })
    }, [])

    return (
        <div className="tredy">
            <div className="circular-text">
            <span id="rotated" ref={rotatedRef}>Scroll Down • Scroll Down • Scroll Down • Scroll Down • Scroll Down • Scroll Down</span>
            </div>
            <div className="arrow"><IoArrowDown name="arrow-down"/></div>
        </div>
    )
}

export default Tredy