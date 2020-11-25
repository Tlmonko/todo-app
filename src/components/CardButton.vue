<template>
    <button :type="button.type" v-on:click="button.removeItem()">
        {{ button.text }}
    </button>
</template>

<script>
	export default {
		props: ['button']
	}
</script>

<style lang="scss" scoped>
    $color: #FFFFFF;
    $padding-left-right: 140px;
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
        margin-top: 35px;
    }
    button:hover {
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
    }
    button:focus {
        outline: none;
    }
</style>