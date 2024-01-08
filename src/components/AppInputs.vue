<template>
    <div class="flex flex-col mb-3 text-left">
            <label :for="props.for" class="mb-1 text-sm">{{ label }}</label>
            <input
              :type="props.type"
              class="bg-gray-100 p-4 rounded-md outline-primaryColor placeholder:font-normal dark:bg-slate-950"
              :placeholder="props.placeholder"
              :value="props.value"
              :id="props.id"
              :name="props.name"
            />
          </div>
</template>

<script setup>

const props = defineProps(['label','placeholder','value','id','name','type','for'])

</script>