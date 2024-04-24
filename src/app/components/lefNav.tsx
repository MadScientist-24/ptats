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

const SOURCEBOX = () => {
    return (
    <>
        <div className="w-full h-20 bg-white flex flex-col">
            <div className="h-full w-full bg-lightui flex items-center"> 
            
            <p className="text-center w-full text-black">
                GERADOR 1    
            </p> 
            
            </div>
            <div className="h-8 w-full bg-darkui text-right pr-2">00h00m</div>
        </div>
    </>)
}

export default function LNAV() {
    return (
        <div className="w-full h-full flex flex-col justify-between p-3 align-middle items-center bg-wppdark border border-slate-300 gap-y-10">


        <div className="w-full flex flex-col justify-between gap-y-12 ">
                    <SOURCEBOX></SOURCEBOX>
                    <SOURCEBOX></SOURCEBOX>
                    <SOURCEBOX></SOURCEBOX>
        </div>
             <AUTOBOX></AUTOBOX>
        </div>
    )
}