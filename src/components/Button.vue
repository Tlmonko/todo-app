<template>
    <Button>
        {{ text }}
    </Button>
</template>

<script>
	export default {
		props: ['text']
	}
</script>

<style lang="scss" scoped>
    $color: #FFE3D3;
    $padding-left-right: 130px;
    $padding-top-bottom: 16px;
    button {
        background-color: $color;
        border-radius: 10px;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        padding: $padding-top-bottom $padding-left-right;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
    }
    button:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }
    button:focus {
        outline: none;
    }
</style>