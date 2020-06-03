//emptyImageUrl 1*1透明图片
export var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';


/**
 * 格式化数字位数  formatNum(2.6666,3) => 2.667   默认2位
 * @param {Number} num 
 * @param {Number} digits 
 */
export function formatNum(num, digits) {
    var pow = Math.pow(10, (digits === undefined ? 2 : digits));
    console.log('pow',pow)
    return Math.round(num * pow) / pow;
}

