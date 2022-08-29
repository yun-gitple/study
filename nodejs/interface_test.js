"use strict";
exports.__esModule = true;
var data1;
var data2;
data1 = {
    org_code: 'a',
    account_num: '2',
    seqno: '1',
    from_date: '2022-10-12',
    to_date: '2022-11-12',
    next_page: '2',
    limit: 1
};
data2 = {
    org_code: 'b',
    account_num: '3',
    seqno: '2',
    from_date: '2023-10-12',
    to_date: '2023-11-12',
    next_page: '2',
    limit: 1
};
//a();
function a() {
    var key1 = "".concat(data1);
    var key2 = "".concat(data2);
    var key11 = "".concat(JSON.stringify(data1));
    var key22 = "".concat(JSON.stringify(data2));
    console.log("".concat(data1));
    console.log("".concat(JSON.stringify(data1)));
    console.log('------------------');
    console.log("".concat(data2));
    console.log("".concat(JSON.stringify(data2)));
    console.log('------------------');
    console.log('same1: ', key1 === key2);
    console.log('same11: ', key11 === key22);
}
;
function calculateLength(v) {
    var length = 0;
    for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
        var axis = _a[_i];
        var coord = v[axis];
        length += Math.abs(coord);
        return length;
    }
}
var vec3D = { x: 3, y: 4, z: 1 };
calculateLength(vec3D);
