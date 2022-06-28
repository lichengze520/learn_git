let username: string = '飞飞'
// 接口继承
interface a {
    x: number;
    y: number
}
interface b extends a {
    z: number
}
let arr: b = {
    x: 1,
    y: 2,
    z: 3
}
console.log(arr);
