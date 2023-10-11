import { useEffect, useRef, useState } from "react"

const EffectExample = () => {

    const [playVideo, setPlayVideo] = useState(false);

    const onPLayPauseClicked = () => {
        setPlayVideo(!playVideo);
    }
    return (
        <div>
            <button onClick={onPLayPauseClicked} >Play/Pause</button>
            <VideoPlayer
                shouldPlay={playVideo}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            ></VideoPlayer>
        </div>
    )
}


const VideoPlayer = ({ src, shouldPlay }) => {

    const videoRef = useRef(null);  
    
    useEffect(()=> { // what pice of code will be executed as an effect
        console.log(videoRef);
        if (shouldPlay) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [shouldPlay]);


    useEffect(()=> { // what pice of code will be executed as an effect
        // it might have some logic on source 
    }, [src]);
    
    useEffect(() => {
        // It will execute only once after first render. 
    }, []);

    // useEffect(() => {

    //     chatConnection.connect();
        
    //     // wrtite 

    //     return () => {
    //         // garbage collection code
    //         chatConnection.disconnect();
    //     }

    // }, []);


    return <video ref={videoRef} height={200} width={200} src={src} loop playsInline />
}

export default EffectExample;

// 1. use effect will execute everytime time component re renders, 
// 