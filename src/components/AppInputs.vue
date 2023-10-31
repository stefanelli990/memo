<template>
    <div class="flex flex-col mb-4">
            <label class="mb-1">{{ label }}</label>
            <input
              type="text"
              class="bg-gray-100 p-4 rounded-md outline-primaryColor"
              :placeholder="placeholder"
              :value="value"
              :id="id"
              :name="name"
            />
          </div>
</template>

<script setup>

const props = defineProps(['label','placeholder','value','id','name'])

</script>