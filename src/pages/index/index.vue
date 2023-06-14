<script setup>
const counterStore = useCounterStore()
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <div i-carbon:sprout py-md text-48px class="sprout-icon" />
    <div mt-md flex gap-x-md items-center>
      <button @click="counterStore.decrease">
        -
      </button>
      <uni-tag :text="String(counterStore.count)" type="primary" />
      <button @click="counterStore.increase">
        +
      </button>
    </div>
  </view>
</template>

<style lang="scss" scoped>
.sprout-icon {
  color: $uni-color-primary;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
