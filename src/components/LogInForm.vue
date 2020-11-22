<template>
    <div>
        <form>
            <h2>Email</h2>
            <Input v-bind:input="inputEmail"/><br>
            <h2>Password</h2>
            <Input v-bind:input="inputPassword"/><br>
            <Button v-bind:button="button"/>
        </form>
    </div>
</template>

<script>
	import Input from "@/components/Input";
	import Button from "@/components/Button";
	export default {
		components: {Button, Input},
		data () {
			return {
				inputEmail: {
					placeholder: 'Enter email...',
                    type: 'text'
				},
				inputPassword: {
					placeholder: 'Enter password...',
					type: 'password'
				},
                button: {
					text: 'Login',
                    type: 'submit'
                }
            }
        },
	}
</script>

<style lang="scss" scoped>
    form {
        text-align: left;
        margin: 20px 50px;
    }
    div {
        text-align: center;
    }

    h2 {
        margin: 0 20px;
    }

    Button {
        margin-top: 180px;
    }
</style>