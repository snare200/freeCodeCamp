function steamroller(arr) {
  // I'm a steamroller, baby
    var ret = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            ret = ret.concat(steamroller(arr[i]));
        } else {
            ret.push(arr[i]);
        }
    }
    return ret;
}
steamroller([1, [2], [3, [[4]]]]);