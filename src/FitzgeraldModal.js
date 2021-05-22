import { watchEffect, onUnmounted, h, Teleport } from 'vue'

export default {
    emits: [
        'update:modelValue',
    ],

    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
        modal: {
            type: Object,
            required: true,
        }
    },

    setup(props, { emit, slots }) {
        const modal = props.modal

        watchEffect(() => {
            props.modelValue ? modal.show() : modal.hide()
        })

        modal.on('show', () => {
            emit('update:modelValue', true)
        })

        modal.on('hide', () => {
            emit('update:modelValue', false)
        })

        onUnmounted(modal.destroy)

        return () => h(
            Teleport,
            {
                to: modal.content,
            },
            slots.default()
        )
    },
}
