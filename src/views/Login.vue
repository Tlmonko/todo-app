<template>
    <div class="container">
        <div class="form-div">
            <div class="content">
                <h1>Welcome to a<br> todo app</h1>
                <LogInForm/>
            </div>
        </div>
        <img src="@/assets/img.png">
    </div>
</template>

<script>
	import LogInForm from "@/components/LogInForm";

	export default {
		name: "Login",
		components: {LogInForm}
	}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        text-align: center;
    }

    .form-div {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    img {
        height: 100vh;
    }

    h1 {
        margin: 50px;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color: #323232;
    }

    @media (min-width: 1380px) {
        .content {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    @media (max-width: 1380px) {
        img {
            display: none;
        }

        .container {
            display: block;
        }
    }
</style>