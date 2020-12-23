import React from 'react'
import ReactPlayer from 'react-player'
import Fade from 'react-reveal'

export default function VideoUndangan() {
    return (
        <div className="ytt flex flex-wrap justify-between relative md:leading-10 px-10 md:px-0">
            <Fade left>
            <ReactPlayer className="yt1" width="auto" height="240px" controls url="https://www.youtube.com/watch?v=cU2ZDP6br5U&list=PL4XqgL_QVSuhhEPuQvPDfEL3soKow7Ie4&index=1&t=1s"/>
            <ReactPlayer className="yt2" width="auto" height="240px" controls url="https://www.youtube.com/watch?v=uObVRWEC2ok&list=RDCLAK5uy_lTCjkf-QX-C_U6j8ZL5eM43zQImZS-loo&start_radio=1" />
            <ReactPlayer className="yt3" width="auto" height="240px" controls url="https://www.youtube.com/watch?v=VYKxO1d5N_I" />
            </Fade>
        </div>
    )
}
