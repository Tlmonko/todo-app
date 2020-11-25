<template>
    <div class="container">
        <h1 class="Title">Tasks</h1>
        <div class="counter">
            Completed tasks: {{ getComplitedTasks }}
        </div>
        <div class="main-container">
            <TodoCard
                    v-for="card of getTodos" :key="card"
                    v-bind:Card="card"/>
            <a class="new-task">
                <div class="new-task-div">
                    <div class="new-task-text">
                        <h1 class="plus">+</h1>
                        <p>Create new task</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
	import TodoCard from "@/components/TodoCard";
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: "Todos",
		components: {TodoCard},
		computed: mapGetters(['getTodos', 'getComplitedTasks']),
		methods: mapActions(['fetchTodos']),
		async mounted() {
			this.fetchTodos()
		}
	}
</script>

<style lang="scss" scoped>
    $card-width: 325px;
    $card-height: 150px;

    .main-container {
        display: flex;
        margin: 100px 30vh;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }

    .Title {
        font-size: 48px;
        line-height: 56px;
        color: #323232;
        margin-top: 5vh;
    }

    .counter {
        position: absolute;
        background-color: #FFE3D3;
        width: 200px;
        padding: 10px;
        border-radius: 13px 0 0 13px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        right: 0;
        top: 6vw;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #323232;
    }

    .new-task-div {
        position: relative;
        display: flex;
        justify-content: center;
        width: $card-width;
        height: $card-height;
        background-color: #F7F7F7;
        border-radius: 9px;
        padding: 5px;
        margin: 10px;
        align-content: center;
    }

    .plus {
        margin: 0;
        color: #999999;
        font-weight: bolder;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .new-task-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bolder;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #323232;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .new-task-div:hover {
        background-color: #F0F0F0;
    }
</style>