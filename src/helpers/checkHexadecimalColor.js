export const  checkHexadecimalColor = (color)=> {
    const regex = /^#?([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
}