<template>
    <div class="name-block">
        <p>Hello {{ myName }}, from the component</p>

        <p>
            <button v-on:click="changeName">Change my name</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            myName: "Gregor",
            newName: "Dennis"
            }
        },
        methods: {
            changeName() {
                this.myName = this.newName;
            }
        }
    };
</script>

<style scoped>
    .name-block {
        padding: 20px;
        border: 1px solid gold;
        font-family: serif;
        font-size: 32px;
    }

    button {
        padding: 10px 20px;
        border: 0;
        color: white;
        cursor: pointer;
        border-radius: 10px;
        text-transform: uppercase;
        background-color: deeppink;
    }
</style>