<template>
    <form>
        <div class="mb-4">
            <label
                class="block text-sm mb-2"
                for="username">
                Username
            </label>

            <input
                class="appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                required
                data-modal-focus>
        </div>

        <div class="mb-6">
            <label
                class="block text-sm mb-2"
                for="password">
                Password
            </label>

            <input
                class="appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required>
        </div>

        <div class="flex items-center justify-between">
            <AppButton type="submit">Sign In</AppButton>

            <a
                class="inline-block align-baseline text-sm text-blue-600 hover:text-blue-400"
                href="#">
                Forgot Password?
            </a>
        </div>
    </form>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
    name: 'AppSignInForm',
    components: {
        AppButton,
    },
}
</script>
