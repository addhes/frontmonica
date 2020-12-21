import React from 'react'
import ReactPlayer from 'react-player'
import Fade from 'react-reveal'

export default function VideoUndangan() {
    return (
        <Fade top>
        <div className="flex flex-wrap justify-between relative md:leading-10 left-3">
            <ReactPlayer className="yt1" width="340px" height="230px" controls url="https://www.youtube.com/watch?v=cU2ZDP6br5U&list=PL4XqgL_QVSuhhEPuQvPDfEL3soKow7Ie4&index=1&t=1s"/>
            <ReactPlayer className="yt2" width="340px" height="230px" controls url="https://www.youtube.com/watch?v=uObVRWEC2ok&list=RDCLAK5uy_lTCjkf-QX-C_U6j8ZL5eM43zQImZS-loo&start_radio=1" />
            <ReactPlayer className="yt3" width="340px" height="230px" controls url="https://www.youtube.com/watch?v=VYKxO1d5N_I" />
        </div>
        </Fade>
    )
}
