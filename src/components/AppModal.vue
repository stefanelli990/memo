<template>
    <Teleport to="body">
        <div class="bg-black/50 fixed inset-0 grid place-items-center overflow-auto p-4">
            <div class="bg-white rounded-3xl px-8 py-10 max-w-md w-full">
            <slot></slot>
        </div>
        </div>
        
    </Teleport>
</template>