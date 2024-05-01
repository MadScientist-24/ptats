import { useEffect, useState } from "react";

const VARBOX = (props:any) => {
  return (<>
        <div className="h-16 w-48 bg-black flex flex-col">
          <div className="h-1/2 bg-lightui text-center p-2">
            <p className="text-black ">{props.variable}</p>
          </div>
          <div className="h-1/2 text-center p-1 bg-darkui">{props.value}</div>
        </div>
  </>)
}

export default function NAV(props:any) {
  const sdata = props.data

//   const [sdata, setSdata] = useState([{}])

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {

//       fetch("http://127.0.0.1:5000/data")
//       .then(res => res.json())
//       .then(data => {
//         setSdata(data)
//         // console.log(data.LEITURAS_ARDUINO.CORRENTE)
//       })
//     }, 1000);
//     return () => window.clearInterval(intervalId)
// }, [sdata, setSdata])

    return (
      <>
        <div className="h-32 w-full bg-wppdark flex flex-row relative items-center justify-between pl-10 pr-10 border">
          <VARBOX variable="TENSÃO" value={sdata["LEITURAS_ARDUINO"]["TENSAO"]}/>
          <VARBOX variable="CORRENTE" value={sdata["LEITURAS_ARDUINO"]["CORRENTE"]}/>
          <VARBOX variable="POTENCIA" value={sdata["LEITURAS_ARDUINO"]["POTENCIA"]}/>
          <VARBOX variable="QUALQUER" value={sdata["LEITURAS_ARDUINO"]["Qualquer"]}/>
        </div>
      </>
     );
  }
  