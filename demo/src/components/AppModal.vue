<template>
    <FitzgeraldModal v-bind="$attrs" :modal="modal">
        <button
            class="float-right text-gray-500 text-4xl font-extrabold hover:text-red-500"
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
            default: null
        }
    },
    setup() {
        const modal = createModal({
            aria: {
                labelledBy: '[data-modal-labelledby]'
            },
            class: {
                backdrop: 'bg-purple-300 opacity-75',
                content: 'bg-white shadow-2xl rounded-xl p-6 mx-4 md:w-1/2 xl:w-1/3 focus:outline-none',
            },
            focus: '[data-modal-focus]',
            hide: {
                click: '[data-modal-hide]',
            },
            animate: {
                content: {
                    show: 'roll-in-left',
                    hide: 'roll-out-left',
                }
            }
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
