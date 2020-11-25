<template>
    <button :type="button.type" v-on:click="removeItem(button.id)">
        {{ button.text }}
    </button>
</template>

<script>
	import {mapMutations} from 'vuex'

	export default {
		props: ['button'],
		methods: {
			...mapMutations(['removeTodo']),
            removeItem(itemId) {
				this.removeTodo(itemId)
            }
		}
	}
</script>

<style lang="scss" scoped>
    $color: #FFFFFF;
    $padding-left-right: 145px;
    $padding-top-bottom: 16px;
    button {
        background-color: $color;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #C3FEDA;
        padding: $padding-top-bottom $padding-left-right;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        position: absolute;
        bottom: 5px;
        left: 5px;
    }

    button:hover {
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
    }

    button:focus {
        outline: none;
    }
</style>