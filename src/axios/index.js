import { dateList,groupList,factoryList } from '@/constant';

export const getDateList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(dateList)
        },500)
    })
}
export const getGroupList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(groupList)
        },500)
    })
}
export const getFactoryList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(factoryList)
        },500)
    })
}

