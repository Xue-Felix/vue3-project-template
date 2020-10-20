<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";

export default defineComponent({
    props: {
        msg: String
    },
    data() {
        return {
            inputText: "inputText"
        }
    },
    setup (props, ctx) {
        // onBeforeMount(ctx.initPage);
        return {
            // msg: "Hello vue3"
        }
    },
    methods: {
        initPage() {
            console.log(this.inputText);
        }
    },
})
</script>

<style lang="scss" scoped>
    div {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>