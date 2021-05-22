# fitzgerald-vue

[Fitzgerald](https://github.com/voronkovich/fitzgerald) integration for [Vue](https://vuejs.org/).

## Installation

Install the package using [npm](https://www.npmjs.com/package/npm):

```sh
npm add fitzgerald-vue
```

Or [yarn](https://yarnpkg.com/):

```sh
yarn add fitzgerald-vue
```

## Usage

Create a higher-order component (For example: `./components/AppModal.vue`):

```vue
<template>
    <FitzgeraldModal v-bind="$attrs" :modal="modal">
        <slot />
    </FitzgeraldModal>
</template>

<script>
import 'fitzgerald/src/style.css'
import 'fitzgerald/src/default-theme.css'
import createModal from 'fitzgerald'
import FitzgeraldModal from 'fitzgerald-vue'

export default {
    name: 'AppModal',
    inheritAttrs: false,
    components: {
        FitzgeraldModal,
    },
    setup() {
        const modal = createModal({
            // Options
        })

        return {
            modal,
        }
    }
}
</script>
```

And just use it in your app like this:

```vue
<template>
    <button type="button" @click="showModal = true">Show Modal</button>

    <AppModal v-model="showModal">
        Lorem ipsum... Dolor sit amet?
    </AppModal>
</template>

<script>
import { ref } from 'vue'
import AppModal from './components/AppModal.vue'

export default {
    components: {
        AppModal,
    },
    setup() {
        const showModal = ref(false)

        return {
            showModal,
        }
    }
}
</script>
```

## License

Copyright (c) Voronkovich Oleg. Distributed under the [MIT](LICENSE).
