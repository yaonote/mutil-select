<template>
    <div>
        <div slot="reference">
            请选择
            <span v-for="item in selectedArr" :key="item.id">
                {{item.parentName}}+{{item.name}}
            </span>
        </div>
        <div class="list-wrap" v-for="list in allList" :key="list.id">
            <div v-for="item in list" :key="item.id" @click.prevent="handleOpenOther(item)">
                {{item.checked}}
            </div>
        </div>
    </div>
</template>

<script>
import { props } from './constant';
import { handleGetDataById,arr2EntityById } from './utils';
export default {
    props: props,
    data() {
        return {
            allList: [],
            selectedArr: [],
            entityData: {}
        }
    },
    computed: {
        checkedIds() {
            return this.selectedArr.map(item => item.id);
        }
    },
    watch: {
        originData(newValue, oldValue) {
            this.allList = [ JSON.parse(JSON.stringify(newValue)) ];
        }
    },
    methods: { 
        handleOpenOther(item) {
            console.log('item =>',item.checked)
            // 这里有一个问题 item.children 的数据没有 改变 暂时不知道是为啥
            if(item.children && item.children.length != 0){
                const newLevelData = item.children.map(item => {
                    return {
                        ...item,
                        checked: this.checkedIds.includes(item.id)
                    }
                })
                this.allList = this.allList.slice(0,item.level).concat([newLevelData])
            }else{
                this.allList = this.handleChecked(this.allList,item.id);
                const filterData = this.selectedArr.filter(i => i.id !== item.id);
                this.selectedArr = [...filterData,item];
                this.$emit('selectedRes',this.selectedArr)
            }
        },
        handleChecked(arr,id) {
            return arr.map(first => {
                return first.map(i => {
                    return i.id === id 
                        ? {...i, checked: !i.checked } 
                        : i
                })
            }) 
        }
    },
    beforeDestroy() {
        this.selectedArr = [];
    }
}
</script>

<style lang="css" scoped>
.list-wrap{
    display: inline-block;
    vertical-align: top;
    min-width: 100px;
}
</style>