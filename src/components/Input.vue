<template>
    <input :placeholder="input.placeholder" :type="input.type"/>
</template>

<script>
	export default {
		props: ['input']
	}
</script>

<style lang="scss" scoped>
    $color: #FFFFFF;
    $padding-left-right: 30px;
    $padding-top-bottom: 23px;
    input {
        background-color: $color;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        margin: 30px;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        width: 254px;
        padding: $padding-top-bottom $padding-left-right;
    }
    input:focus {
        outline: none;
    }
</style>