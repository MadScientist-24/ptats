import { useState, useEffect } from "react"



export default function MONITOR(props:any) {
//     const [sdata, setSdata] = useState([{}])

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

const handleclick = () => {
    fetch("http://"+props.host+":5000/ledon")
}

const handleclick2 = () => {
    fetch("http://"+props.host+":5000/ledoff")
}

    return (
    <>
        <div style={{height: "*"}} className="w-full pr-[25px] pb-[250px] h-full max-h-full bg-wppdark flex flex-col items-center justify-center p-3 gap-1">
            <div className="h-1/3  items-center content-center text-center">
                <h1 className="text-3xl font-extrabol">{props.messages[0]["TITLE"]}</h1>
            </div>
            <div style={{height: "*"}} className="text-3xl w-full h-full text-left overflow-scroll no-scrollbar">{props.messages[0]["CONTENT"]}</div>

        </div>
    </>)
}