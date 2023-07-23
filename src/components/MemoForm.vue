<template>
    <h2>new페이지 입니다.</h2>
    <div><input type="text" v-model="title"></div>
    <div><textarea v-model="content"></textarea></div>
    <div class = "center">
        <button @click="save">저장</button>
        <button @click="remove" v-if="memo.id">삭제</button>
    </div>
</template>
<script>
    export default{
        name : 'MemoForm',
        props:[
            'memo'
        ],
        //props: [] 메모라는 것을 받겠습니다. EditView에 memo라는 속성으로 값을 전달 할 수 있다. 
        data() {
            return {
                title:this.memo.title,
                content:this.memo.content,
            }
        },
        methods: {
            save(){
                let memo = {
                    title : this.title,
                    content : this.content,
                }

                if(this.memo.id){
                    memo.id = this.memo.id
                }

                this.$store.commit('save',memo)
                this.$router.push('/') /* 메인페이지에 이동*/
            },
            remove(){
                this.$store.commit('delete', this.memo.id)
                this.$router.push('/')
            }
        },
    }
</script>
<style scoped>
    div{
        margin-bottom: 10px;
    }
    input[type=text]{
        width : 100%;
    }
    textarea{
        width : 100%;
        height: 30em;
    }
    button{
        width: 5em;
        margin: 3px;
    }
    .center{
        text-align: center;
    }
</style>