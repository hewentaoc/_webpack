<template>
  <div>
      <h1>Home</h1>
      <h2>{{name}}</h2>
      <div>
          <span>test</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'hwt'
        }
    },
}
</script>

<style lang='less'>
  h1 {
    text-align: center;
    color: green;
  }
  div {
    text-align: center;
    span {
        color: red;
    }
  }
</style>