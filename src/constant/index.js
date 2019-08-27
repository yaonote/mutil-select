const data1 =  [ 
    {"children":["全年","04月","05月","06月","07月","08月"], "group":"2019" },
    {"children":["全年","08月","09月","10月","11月"], "group":"2018" }
]

const handleParams = (arr) => {
    return arr.map((item,index) => {
        const level = 1;
        return {
            id: index,
            name: item.group,
            checked: false,
            level: level,
            canSelect: false,
            children: item.children.map((child,i) => {
                return {
                    id: `${i}_${index}`,
                    name: child,
                    parentId: index,
                    parentName:  item.group,
                    checked: false,
                    disabled: false,
                    canSelect: true,
                    title: '',
                    level: level + 1,
                }
            })
        }
    })
}
export const dateList = handleParams(data1);
export const groupList = handleParams(data1);
export const factoryList = handleParams(data1);

