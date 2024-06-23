import { useState, useEffect } from "react"


function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

export default function MONITOR(props:any) {

const [mmesages, setMmesages] = useState(getRandomInt(props.messages.length))

//     useEffect(() => {
//       const intervalId = window.setInterval(() => {
  
//         fetch("http://"+props.host+":5000/data")
//         .then(res => res.json())
//         .then(data => {
//           setSdata(data)
//           // console.log(data.LEITURAS_ARDUINO.CORRENTE)
//         })
//       }, 1000);
//       return () => window.clearInterval(intervalId)
//   }, [sdata, setSdata])

useEffect (() => {
    const intervaliD2 = window.setInterval(() => {
        setMmesages(getRandomInt(props.messages.length))
    }, 10000)
    return () => window.clearInterval(intervaliD2)
}, [mmesages, setMmesages])


    return (
    <>
        <div style={{height: "*"}} className="w-full pr-[25px] pb-[250px] h-full max-h-full bg-wppdark flex flex-col items-center justify-center p-3 gap-1">
            <div className="h-1/3  items-center content-center text-center">
                <h1 className="text-3xl font-extrabol">{props.messages[mmesages]["TITLE"]}</h1>
            </div>
            <div style={{height: "*"}} className="text-3xl w-full h-full text-left overflow-scroll no-scrollbar">{props.messages[mmesages]["CONTENT"]}</div>

        </div>
    </>)
}