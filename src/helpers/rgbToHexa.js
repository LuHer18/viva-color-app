
export const rgbToHexa = ({r, g , b, id}) => {

    return ((1 << 24)+ (r << 16) + (g << 8) + b).toString(16).slice(1)
  
}
