<script setup>
const counterStore = useCounterStore()
</script>

<template>
  <view flex-center flex-col gap-y-lg h-100vh>
    <div i-carbon:sprout text="256rpx teal-600" />
    <image src="/static/logo.png" h-128rpx w-128rpx />
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
