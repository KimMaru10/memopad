import { createStore } from 'vuex'
import {VuexPersistence} from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: localStorage
})
export default createStore({
  state: {
    count : 0,
    memos : []
  },
  getters: {
    getCount:(state)=>{
      return state.memos.length
    },
    getAll: (state) =>{
      return state.memos
    },
    getMemoById:(state)=>(id)=>{
      return state.memos.find(memo=>memo.id === id)
    }

  },
  mutations: {
    /* 메모를 저장한다. */
    RESTORE_MUTATION : vuexPersist.RESTORE_MUTATION, /*저장소*/
    save(state, newMemo){
      if(newMemo.id){/*메모 내용이 있다면*/
        let x= state.memos.find(memo => memo.id === newMemo.id)
        x.title = newMemo.title
        x.content = newMemo.content
      }else{
        newMemo.id = ++state.count
        state.memos.unshift(newMemo) /*unshift는 추가된 데이터를 최근에 추가된 것이 앞으로 오게끔 함 */
      }
    },
    delete (state, id){
      state.memos = state.memos.filter(memo=>memo.id !== id)

    }
  },
  actions: {

  },
  modules: {
    
  },
  plugins: [vuexPersist.plugin]
})
