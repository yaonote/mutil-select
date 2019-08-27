export const props = {
    originData: {
        type: Array,
        default: () => []
    }
}


const handleParams = (arr) => {
    return arr.map((item,index) => {
        return {
            id: index,
            name: item.group,
            children: item.children.map((child,i) => {
                return {
                    id: i,
                    name: child,
                    parentId: index,
                    parentName:  item.group,
                    checked: false,
                    disabled: false,
                    title: ''
                }
            })
        }
    })
}