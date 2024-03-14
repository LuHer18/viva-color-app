
export const hexaToRgb = (hexavalue, id)=> {
    return {
        r: hexavalue >> 16,
        g: hexavalue >> 8 & 255,
        b: hexavalue & 255,
        id: id
    }
}