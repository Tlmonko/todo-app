<template>
    <div>
        <NewTask/>
        <div v-bind:class="{displayNone: this.getNowCreatingTask, container: true}">
            <h1 class="Title">Tasks</h1>
            <div class="counter">
                <a class="complited-tasks">Completed tasks: </a>
                {{ getComplitedTasks }}
            </div>
            <div class="floating-new-task" v-on:click="this.changeState">
                <h1 class="plus-text">+</h1>
            </div>
            <div class="main-container">
                <TodoCard
                        v-for="card of getTodos" :key="card"
                        v-bind:Card="card"/>
                <button class="new-task-div" v-on:click="this.changeState">
                    <div class="new-task-text">
                        <h1 class="plus">+</h1>
                        <p>Create new task</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
	import TodoCard from "@/components/TodoCard";
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import NewTask from "@/components/NewTask";

	export default {
		name: "Todos",
		components: {NewTask, TodoCard},
		computed: mapGetters(['getTodos', 'getComplitedTasks', 'getNowCreatingTask']),
		methods: {
			...mapActions(['fetchTodos']),
			...mapMutations(['changeState'])
		},
		async mounted() {
			this.fetchTodos()
		}
	}
</script>

<style lang="scss" scoped>
    $card-width: 325px;
    $card-height: 150px;

    .floating-new-task {
        z-index: 10;
        position: fixed;
        right: 30px;
        bottom: 30px;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background-color: #FFE3D3;
        align-content: center;
        display: none;
    }

    .plus-text {
        display: table-cell;
        vertical-align: middle;
        font-size: 40px;
        font-weight: normal;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .displayNone {
        display: none !important;
    }

    .main-container {
        display: flex;
        margin: 100px 30vh;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }

    @media (max-width: 1320px) {
        .main-container {
            margin: 100px 150px;
        }
    }

    @media (max-width: 1200px) {
        .complited-tasks {
            display: none;
        }
        .counter {
            width: auto !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
        }
    }

    @media (max-width: 1030px) {
        .main-container {
            margin: 100px 50px;
        }
    }

    @media (max-width: 815px) {
        .main-container {
            margin: 100px 0;;
        }

        .floating-new-task {
            display: table;
        }

        .new-task-div {
            display: none !important;
        }
    }

    .Title {
        font-size: 48px;
        line-height: 56px;
        color: #323232;
        margin-top: 5vh;
    }

    .counter {
        z-index: 10;
        position: fixed;
        background-color: #FFE3D3;
        width: 200px;
        padding: 10px;
        border-radius: 13px 0 0 13px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        right: 0;
        top: 6vh;
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

    button {
        outline: none !important;
        border: 0 !important;
    }
</style>