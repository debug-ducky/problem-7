function chunk(ar, size) {
    let r = []
    for (v of ar){
        let l = r[r.length-1]
        !l || l.length == size ? r.push([v]) : l.push(v)
    }
    return r
}

console.log(chunk([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1 ], 3))