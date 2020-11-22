<template>
    <div id="app">
    <Button v-bind:text="buttonText"/>
    </div>
</template>

<script>
import Button from "@/components/Button";
	export default {
		name: 'App',
        data () {
			return {
				buttonText: 'Login'
            }
        },
		components: {Button}
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
