<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { req } from '@/utils'

const counterStore = useCounterStore()

const imgList = ref([])

async function getData() {
  const { result } = await req('GET', 'https://api.apiopen.top/api/getImages', {
    type: 'beauty',
    page: 1,
    size: 5,
  })
  imgList.value = result.list
  // eslint-disable-next-line no-console
  console.log('imgList ==> ', imgList.value)
}

onLoad(() => {
  getData()
})
</script>

<template>
  <div flex-center flex-col gap-y-lg h-100vh>
    <div i-carbon:sprout text="256rpx teal-600" />
    <image src="/static/logo.png" h-128rpx w-128rpx />
    <div mt-md flex gap-x-md items-center>
      <button @click="counterStore.decrease">
        -
      </button>
      <div>{{ counterStore.count }}</div>
      <button @click="counterStore.increase">
        +
      </button>
    </div>
  </div>
</template>
