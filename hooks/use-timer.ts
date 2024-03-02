import{useState , useEffect} from "react"

interface TimerHook{
    formattedTimer: string;
    isTimerFinished: boolean;
}

export const useTimer = (initialSeconds:number):TimerHook =>{
    const [seconds ,setSeconds] = useState(initialSeconds)
    const [isTimerFinished ,  setIsTimerFinished] = useState(false)

    useEffect(() =>{
        const interValId = setInterval(() =>{

            if(seconds >0){
                setSeconds((prev)=>prev-1)
            }else{
                setIsTimerFinished(true)
                clearInterval(interValId)
                return 0
            }

        },1000)
        return ()=> clearInterval(interValId)
    },[seconds])

    const formatSeconds = (s:number):string =>{
        return s < 10 ? `0${s}` : s.toString();
    }

    return{
        formattedTimer: `00:${formatSeconds(seconds)}`,
        isTimerFinished: isTimerFinished,
    }
}