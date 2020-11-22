<template>
    <div id="app">
        <LogInForm/>
    </div>
</template>

<script>
	import LogInForm from "@/components/LogInForm";
	export default {
		name: 'App',
		components: {LogInForm},
		data() {
		},
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
