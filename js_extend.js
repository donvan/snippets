/**
 * @function extend(dest: Object, src?: Object): Object
 * Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter.
 */

function extend(dest) {
    var i, j, len, src;

    for (j = 1, len = arguments.length; j < len; j++) {
        src = arguments[j]

        for (i in src) {
            dest[i] = src[i];
        }
    }

    return dest
}

extend({},{a:1},{b:2,c:3})
extend({})