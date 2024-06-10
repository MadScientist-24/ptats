import { useEffect, useState } from "react";

const VARBOX = (props:any) => {
  return (<>
        <div className=" w-full h-full max-h-[108px] min-h-[59px] min-w-[122px] bg-black flex flex-col outline outline-2 outline-black">
          <div className="h-full bg-lightui text-center p-2 items-center content-center">
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
          <div className="sticky top-0 left-0">
            <div className=" h-full w-full bg-wppdark flex flex-row relative items-center justify-between border">
              <VARBOX variable="TENSÃO" value={sdata["LEITURAS_ARDUINO"]["TENSAO"]}/>
              <VARBOX variable="CORRENTE" value={sdata["LEITURAS_ARDUINO"]["CORRENTE"]}/>
              <VARBOX variable="POTENCIA" value={sdata["LEITURAS_ARDUINO"]["POTENCIA"]}/>
            </div>
          </div>
      </>
     );
  }
  