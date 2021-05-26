<template>
    <div class="flex h-screen">
        <div class="m-auto lg:w-1/2 bg-gray-100 rounded py-4 px-6">

            <div v-if="username" class="my-2">
                <p>
                    Hi, <strong class="font-bold">{{ username }}</strong>!
                </p>

                <AppButton type="button" @click="username = null" class="block my-2">Sign Out</AppButton>
            </div>

            <div v-else class="my-2">
                <h2>First example</h2>
                <p>Simple sign in form:</p>
                <AppButton @click="showSignInModal" class="block my-4">Sign In</AppButton>
            </div>

            <p class="my-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

            <h2 class="mt-5">Second example</h2>
            <p>Modal with long content and a scroll bar:</p>
            <AppButton
                @click="showBigContentModal"
                class="block my-4"
            >Big Content</AppButton>

            <p class="my-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

            <h2 class="mt-5">Third example</h2>
            <p>Modal with long content inside it:</p>
            <AppButton
                @click="showTermsOfUseModal"
                class="block my-4"
            >Terms Of Use</AppButton>

            <p class="my-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

            <AppModal
                v-model="showBigContent"
                title="Big Content"
            >
                <p class="my-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>

                <p class="my-4 flex flex-wrap justify-between">
                    <AppButton @click="showSignInModal" class="my-2">Sign In</AppButton>
                    <AppButton @click="showTermsOfUseModal" class="my-2">Terms Of Use</AppButton>
                    <AppButton class="my-2" data-modal-hide>Close This</AppButton>
                </p>

                <p class="my-2" v-for="x of 10">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </AppModal>

            <AppModal
                v-model="showTermsOfUse"
                title="Terms of Use"
            >
                <div style="max-height: 50vh" class="overflow-y-auto" data-modal-lock-scroll>
                    <p class="my-2" v-for="x of 10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </AppModal>

            <AppModal
                v-model="showSignIn"
                title="Sign In"
                animation-show="roll-in-left"
                animation-hide="roll-out-left"
            >
                <AppSignInForm @submit.prevent="signIn" />
            </AppModal>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import AppModal from './components/AppModal.vue'
import AppButton from './components/AppButton.vue'
import AppSignInForm from './components/AppSignInForm.vue'

export default {
    name: 'App',
    components: {
        AppModal,
        AppButton,
        AppSignInForm,
    },
    setup() {
        const showSignIn = ref(false)
        const showBigContent = ref(false)
        const showTermsOfUse = ref(false)

        const username = ref(null)

        return {
            showSignIn,
            showBigContent,
            showTermsOfUse,

            username,

            showSignInModal() {
                showSignIn.value = true
            },

            showBigContentModal() {
                showBigContent.value = true
            },

            showTermsOfUseModal() {
                showTermsOfUse.value = true
            },

            signIn(e) {
                showSignIn.value = false
                username.value = e.target.username.value
                e.target.reset()
            },
        }
    }
}
</script>
