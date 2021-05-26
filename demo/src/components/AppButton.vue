<template>
    <button
        class="
            bg-purple-500 hover:opacity-75
            text-white font-bold
            py-2 px-6
            rounded
        "
        type="button"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton',
}
</script>
