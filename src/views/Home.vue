<template>
  <div class="home">
    <div class="active">
      <van-uploader :before-read="beforeRead" capture="camera">
        <van-button icon="photo" type="primary">拍照上传</van-button>
      </van-uploader>
      <van-uploader :before-read="beforeRead" :multiple="true">
        <van-button icon="photo" type="primary">多选图片</van-button>
      </van-uploader>
    </div>
    <div>
      <div v-for="item in file" :key="item.name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    beforeRead(file) {
      console.log(file);
      this.file = file;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  margin-top: 100px;
  .active {
    display: flex;
    justify-content: space-around;
  }
}
</style>
