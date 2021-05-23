<template>
    <div class="flex h-screen">
        <div class="m-auto lg:w-1/2 bg-gray-100 rounded py-4 px-6">
            <h1 class="text-2xl mb-4">Fitzgerald Demo</h1>

            <p v-if="username" class="my-2">
                Hi, <strong class="font-bold">{{ username }}</strong>!
                <button type="button" class="text-blue-400 underline inline-block ml-1" @click="username = null">Sign Out</button>
            </p>
            <p v-else class="my-2">
                <button type="button" class="text-blue-400 underline" @click="showSignInModal = true">Sign In</button>
            </p>

            <p class="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

            <p class="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

            <p class="my-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

            <AppModal v-model="showSignInModal" title="Sign In">
                <AppSignInForm @submit.prevent="signIn" />
            </AppModal>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import AppModal from './components/AppModal.vue'
import AppSignInForm from './components/AppSignInForm.vue'

export default {
    name: 'App',
    components: {
        AppModal,
        AppSignInForm,
    },
    setup() {
        const showSignInModal = ref(false)
        const username = ref(null)

        return {
            showSignInModal,
            username,

            signIn(e) {
                showSignInModal.value = false
                username.value = e.target.username.value
                e.target.reset()
            }
        }
    }
}
</script>
