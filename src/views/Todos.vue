<template>
    <div class="container">
        <h1>Tasks</h1>
        <div class="counter">
            Completed tasks: {{ getComplitedTasks }}
        </div>
        <div class="main-container">
            <TodoCard
                    v-for="card of getTodos" :key="card"
                    v-bind:Card="card"/>
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
    .main-container {
        display: flex;
        margin: 100px 30vh;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }

    h1 {
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
</style>