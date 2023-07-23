<template>
    <MemoForm v-if="memo" :memo="memo" /> 
    <!-- MemoForm에서 받은 속성으로 지정-->
    <!-- memo가 있다면 출력 -->
    <p v-else>지정한 메모는 없습니다.</p>
    <!-- 지정한 memo가 없다면 위 p태그 출력 -->
</template>
<script>
import MemoForm from '@/components/MemoForm.vue'

export default {
    name : 'EditView',
    components:{
        MemoForm
    },
    computed : {
        memo(){
            const id = parseInt(this.$route.params.id)
            return this.$store.getters.getMemoById(id)
        }
    }
}
</script>
