const SOURCEBOX = (props:any) => {
    return (
    <>
        <div className="w-full min-w-[122px] min-h-[59px] bg-white flex flex-col outline outline-2 outline-black">
            <div className="h-full w-full bg-lightui flex items-center"> 
            
            <p className="text-center w-full text-black">
                {props.variable}   
            </p> 
            
            </div>
            <div className="h-8 w-full bg-darkui text-right pr-2 ">{props.runtime.split(":")[0] + " h " + props.runtime.split(":")[1] + " m " + props.runtime.split(":")[2] + " s"}</div>
        </div>
    </>)
}

const AUTOBOX = () => {
    return (
        <>

            <div className="w-full h-8 bg-lightui flex items-center">
                <p className="text-center w-full text-black">
                    MODO: AUTOMÁTICO
                </p>
            </div>
        </>
    )
}


export default function BNAV(props:any) {
  
    return (
    <>
    <div className="sticky bottom-0 left-0">
            <div className="flex-col">
            <AUTOBOX></AUTOBOX>
            <div className="w-full h-full flex flex-row justify-between">


                        <SOURCEBOX variable="GERADOR 1" runtime={props.data["LEITURAS_ARDUINO"]["RUN_TIME_GERADOR_1"]}></SOURCEBOX>
                        <SOURCEBOX variable="REDE" runtime={props.data["LEITURAS_ARDUINO"]["RUN_TIME_GERADOR_REDE"]}></SOURCEBOX>
                        <SOURCEBOX variable="GERADOR 2" runtime={props.data["LEITURAS_ARDUINO"]["RUN_TIME_GERADOR_2"]}></SOURCEBOX>
            </div>
            
            </div>
    </div>
    </>)
}