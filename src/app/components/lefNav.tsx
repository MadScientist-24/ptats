const AUTOBOX = () => {
    return (
        <>
            <div className="w-full h-20 bg-lightui flex items-center">
                <p className="text-center w-full text-black">
                    MODO: AUTOMÁTICO
                </p>
            </div>
        </>
    )
}

const SOURCEBOX = (props:any) => {
    return (
    <>
        <div className="w-full h-20 bg-white flex flex-col">
            <div className="h-full w-full bg-lightui flex items-center"> 
            
            <p className="text-center w-full text-black">
                {props.variable}   
            </p> 
            
            </div>
            <div className="h-8 w-full bg-darkui text-right pr-2">{props.runtime.split(":")[0] + " h " + props.runtime.split(":")[1] + " m " + props.runtime.split(":")[2] + " s"}</div>
        </div>
    </>)
}

export default function LNAV(props:any) {
    return (
        <div className="w-full h-full flex flex-col justify-between p-3 align-middle items-center bg-wppdark border border-slate-300 gap-y-10">


        <div className="w-full flex flex-col justify-between gap-y-12 ">
                    <SOURCEBOX variable="GERADOR 1" runtime={props.data["LEITURAS_ARDUINO"]["RUN_TIME_GERADOR_1"]}></SOURCEBOX>
                    <SOURCEBOX variable="REDE" runtime={props.data["LEITURAS_ARDUINO"]["RUN_TIME_GERADOR_REDE"]}></SOURCEBOX>
                    <SOURCEBOX variable="GERADOR 2" runtime={props.data["LEITURAS_ARDUINO"]["RUN_TIME_GERADOR_2"]}></SOURCEBOX>
        </div>
             <AUTOBOX></AUTOBOX>
        </div>
    )
}