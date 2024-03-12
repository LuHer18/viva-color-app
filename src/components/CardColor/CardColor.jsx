import './CardColor.css'

export const CardColor = ({name, id, rgbColor, onChangeRed, onChangeGreen, onChangeBlue, }) => {

    return (
        <div className="flex flex-col">
            <h2 className="text-center text-base font-semibold text-gray-950">{name}</h2>
            <div className="flex items-center justify-between h-10">
                <label className="flex  gap-2 text-sm font-semibold w-14 text-gray-700">Red</label>
                <span className="flex w-12 h-6 justify-center mx-2 border border-gray-400 rounded-md text-gray-500 font-medium">{rgbColor.r}</span>
                <input type="range"  min={0} max={255} onChange={(e)=> onChangeRed(e, id)} value={rgbColor.r} step={1} name="red" />
            </div>
            <div className="flex items-center justify-between h-10">
                <label className="flex gap-2 text-sm font-bold w-14 text-gray-700">Green</label>
                <span className="flex w-12 h-6 justify-center mx-2 border border-gray-400 rounded-md  text-gray-500 font-medium">{rgbColor.g}</span>
                <input type="range" min={0} max={255} onChange={(e)=>onChangeGreen(e,id)} value={rgbColor.g} step={1} name="green" />
            </div>
            <div className="flex items-center justify-between h-10">
                <label className="flex gap-2 text-sm font-bold w-14 text-gray-700">Blue</label>
                <span className="flex w-12 h-6 justify-center mx-2 border border-gray-400 rounded-md text-gray-500 font-medium">{rgbColor.b}</span>
                <input type="range" min={0} max={255} onChange={(e)=>onChangeBlue(e,id) } value={rgbColor.b} step={1} name="blue" />
            </div>

            <h1>Hexa Value</h1>
            
        </div>
    )
}
