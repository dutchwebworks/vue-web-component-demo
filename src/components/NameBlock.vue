<template>
    <div class="name-block">
        <h2 class="name-block__title"><slot>Your username</slot></h2>

        <p class="name-block__username">{{ myName }}</p>

        <p class="name-block__cta">
            <button 
                @click="changeName"
                class="name-block__button">
                {{ button }}
            </button>
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            button: {
                type: String,
                default: "Change username"
            }
        },
        data() {
            return {
                myName: "Gregor",
                newName: "Ulrich"
            }
        },
        methods: {
            changeName() {
                this.myName = this.newName;
            }
        }
    };
</script>

<style>
    .name-block {
        max-width: 200px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #999;
        border-radius: 10px;
        font-family: Arial, sans-serif;
        font-size: 32px;
        background: linear-gradient(to bottom, #eee 0%, #999 80%);
    }

    .name-block__title,
    .name-block__username,
    .name-block__cta {
        margin: 5px 0;
        text-align: center;
    }

    .name-block__title {
        font-size: 18px;
        font-weight: 700;
        color: deepskyblue;
    }

    .name-block__username {
        margin: 20px 0;
        font-size: 45px;
    }

    .name-block__button {
        padding: 10px 20px;
        border: 0;
        color: white;
        cursor: pointer;
        border-radius: 10px;
        background-color: deepskyblue;
    }
</style>