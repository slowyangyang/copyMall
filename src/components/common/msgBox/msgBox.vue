<template>
  <div class="msgmain">
    <div class="msgbox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
      <div @click='cancelHandel'>{{cancel}}</div>
      <div @click='okHandel'>{{ok}}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "msgBox",
  data() {
      return {}
  },
  components: {},
  methods: {
    
  }
}
</script>

<style scoped>
.msgmain{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  z-index: 999;
}
.msgbox{
  width: 4.5rem;
  height: 3rem;
  font-size: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  background-color: #fff;
  box-shadow: 0.01rem 0.01rem 0.5rem 0 #ccc;
}
.msgbox h2{
  font-size: 0.35rem;
  font-weight: bold;
  line-height: 0.7rem;
}
.msgbox p{
  padding-top: 0.1rem;
  line-height: 0.8rem;
}
.msgbox > div{
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 0.01rem solid #999;
}
.msgbox > div div{
  flex: 1;
  text-align: center;
  line-height: 0.8rem;
  border-right: 0.01rem solid #999;
}
.msgbox > div div:last-child{
  border-right: 0;
}
</style>
