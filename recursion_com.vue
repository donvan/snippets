<template>
    <div>
        <div class="list-item" v-for="(item, index) in lists" :key="index">
            <div class="item-name">
                <span>{{item.name}}</span>
            </div>
            <div class="children-item" v-if="item.children">
                <list :list="item.children"></list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"List", //递归调用
    data(){
        lists:[{
            name:'level1-1',
            children:[{
                name:'level1-2',
                children:[{
                    name:'level1-3'
                }]
            },
            ]
        }]
    },
}
</script>