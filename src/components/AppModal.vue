<template>
    <Teleport to="body">
        <div class="bg-black/50 fixed top-0 left-0 right-0 bottom-0 min-h-screen w-90 z-50"></div>
        <div class="bg-white rounded-3xl px-8 py-10 max-w-md w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <slot></slot>
        </div>
    </Teleport>
</template>