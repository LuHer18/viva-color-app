
export const CardColor = ({name, rgbColor, onChangeRed, onChangeBlue, onChangeGreen}) => {

    return (
        <div>
            <h1>{name}</h1>
            <div className="flex gap-2">
                <label className="flex gap-2">Red:<span>{rgbColor.r}</span></label>
                <input type="range" min={0} max={250} onChange={onChangeRed} value={rgbColor.r} step={1} name="red" />
            </div>
            <div className="flex gap-2">
                <label className="flex gap-2">Green:<span>{rgbColor.g}</span></label>
                <input type="range" min={0} max={250} onChange={onChangeGreen} value={rgbColor.g} step={1} name="green" />
            </div>
            <div className="flex gap-2">
                <label className="flex gap-2">Blue:<span>{rgbColor.b}</span></label>
                <input type="range" min={0} max={250} onChange={onChangeBlue} value={rgbColor.b} step={1} name="blue" />
            </div>
        </div>
    )
}
