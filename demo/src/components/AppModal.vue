<template>
    <FitzgeraldModal v-bind="$attrs" :modal="modal">
        <button
            class="
                float-right
                text-gray-500 text-4xl font-extrabold
                hover:text-red-500
            "
            aria-label="close"
            data-modal-hide
        >&times;</button>

        <h2 v-if="title" class="mb-6 text-2xl" data-modal-labelledby>
            {{ title }}
        </h2>

        <slot />
    </FitzgeraldModal>
</template>

<script>
import 'fitzgerald/src/style.css'
import createModal from 'fitzgerald'
import FitzgeraldModal from 'fitzgerald-vue'

export default {
    name: 'AppModal',
    inheritAttrs: false,
    components: {
        FitzgeraldModal,
    },
    props: {
        title: {
            type: String,
            required: false,
            default: '',
        },
        class: {
            type: String,
            required: false,
            default: '',
        },
        animationShow: {
            type: String,
            required: false,
            default: 'scale-in-center',
        },
        animationHide: {
            type: String,
            required: false,
            default: 'scale-out-center',
        },
    },
    setup(props) {
        const modal = createModal({
            class: {
                backdrop: `
                    bg-black
                    opacity-0
                    transition-opacity duration-500
                `,
                content: `
                    bg-white
                    shadow-2xl
                    rounded-xl
                    my-4 p-6 mx-4 md:w-1/2 xl:w-1/3
                    focus:outline-none
                    ${props.class}
                `,
            },
            hide: {
                click: '[data-modal-hide]',
            },
            focus: '[data-modal-focus]',
            aria: {
                labelledBy: '[data-modal-labelledby]'
            },
            animate: {
                backdrop: {
                    show: 'opacity-75',
                },
                content: {
                    show: props.animationShow,
                    hide: props.animationHide,
                }
            },
            lockScroll: '[data-modal-lock-scroll]',
        })

        return {
            modal,
        }
    }
}
</script>

<style scoped>
[data-modal-hide] {
    margin: -0.6rem 0 0 0;
}
</style>
