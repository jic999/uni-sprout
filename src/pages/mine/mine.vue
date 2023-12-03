<script setup>
const text = ref('Number is')

const counterStore = useCounterStore()
</script>

<template>
  <div p-sm>
    {{ `${text} ${counterStore.count}` }}
  </div>
</template>
