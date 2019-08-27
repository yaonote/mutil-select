export const handleGetDataById = (arr,id) => {
    let res;
    arr.forEach(item => {
        res = item.find(i => i.id === id)
    });
    return res;
}

export const arr2EntityById = (arr) => {
    return arr.reduce((acc,curr) => {
        return {
            ...acc,
            [curr.id]: curr
        }
    },{})
}