export default function RNAV(props:any) {
    const style = 100 - Number(props.data["LEITURAS_ARDUINO"]["COMBUSTIVEL"])
    return (
    <>
    <div className="w-full h-full bg-wppdark border flex flex-col justify-between p-3 gap-y-2">
        <div className="w-full h-8 bg-orange-600 text-black text-center">
            {props.data["LEITURAS_ARDUINO"]["COMBUSTIVEL"]}%
        </div>
        <div className="w-full h-full bg-green-500 justify-start">
            <div style={{height: style + "%"}} className="w-full bg-red-600"></div>
        </div>
        <div className="flex w-full h-16 bg-green-300">
        
            <svg fill="#000000" className="fill-current text-black bg-orange-600" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M274.87,98.67H146.71a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H274.87a8,8,0,0,0,8-8V106.67A8,8,0,0,0,274.87,98.67Zm-8,85.32H154.71V114.67H266.87Zm-56.08,56.64a8,8,0,0,0-5.66,2.35c-3.69,3.7-36,36.9-36,63,0,27.95,18.71,50.68,41.71,50.68S252.51,334,252.51,306c0-26.12-32.36-59.32-36-63A8,8,0,0,0,210.79,240.63Zm0,100.05c-14.17,0-25.71-15.56-25.71-34.68,0-13.67,15.41-34,25.7-45.63,10.12,11.48,25.73,32.07,25.73,45.63C236.51,325.12,225,340.68,210.79,340.68ZM436.05,225.13l-47.72-79.9a8,8,0,0,0-13.74,8.2l29.53,49.45a36,36,0,0,0,17,67.79h.13V325.4a29.28,29.28,0,0,1-58.55,0V229.27a45.42,45.42,0,0,0-37.28-44.56V84a28,28,0,0,0-28-28H124.22a28,28,0,0,0-28,28v313.3H92.79a18,18,0,0,0-18,18V438a18,18,0,0,0,18,18h236a18,18,0,0,0,18-18V415.32a18,18,0,0,0-18-18h-3.42V201.11a29.46,29.46,0,0,1,21.28,28.16V325.4a45.28,45.28,0,0,0,90.55,0V229.27A8,8,0,0,0,436.05,225.13ZM330.8,415.32V438a2,2,0,0,1-2,2h-236a2,2,0,0,1-2-2V415.32a2,2,0,0,1,2-2h236A2,2,0,0,1,330.8,415.32Zm-218.58-18V84a12,12,0,0,1,12-12H297.38a12,12,0,0,1,12,12v313.3Zm309-142.65a20,20,0,0,1-8.87-38l8.87,14.84Z"/></svg>
        </div>
    </div>
    </>)
}
   