<template>
    <div v-bind:class="{displayNone: !this.getNowCreatingTask}">
        <form @submit.prevent="submit">
            <h1>New Task</h1>
            <h2>Task name</h2>
            <input placeholder="Enter task name" type="text" v-model="taskName"/><br>
            <button type="submit">
                Create
            </button>
        </form>
    </div>
</template>

<script>
	import {mapMutations, mapGetters} from 'vuex'

	export default {
		name: "NewTask",
		computed: mapGetters(['getNowCreatingTask']),
		methods: {
			...mapMutations(['createTodo', 'changeState']),
			submit() {
				this.createTodo(this.taskName)
				this.changeState()
			}
		}
	}
</script>

<style lang="scss" scoped>
    .displayNone {
        display: none !important;
    }

    h1 {
        font-size: 48px;
        line-height: 56px;
        color: #323232;
    }

    $color: #FFFFFF;
    $padding-left-right: 30px;
    $padding-top-bottom: 23px;

    $color-btn: #FFE3D3;
    $padding-left-right-btn: 130px;
    $padding-top-bottom-btn: 16px;

    button {
        color: #323232;
        background-color: $color-btn;
        border-radius: 10px;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        padding: $padding-top-bottom-btn $padding-left-right-btn;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        margin: 100px 20px 20px;
    }

    button:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    button:focus {
        outline: none;
    }


    input {
        background-color: $color;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        margin: 20px;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #999999;
        width: 254px;
        padding: $padding-top-bottom $padding-left-right 78px;
    }

    input:focus {
        outline: none;
    }

    form {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-bottom: 100px;
    }

    div {
        display: flex;
        justify-content: center;
    }
</style>