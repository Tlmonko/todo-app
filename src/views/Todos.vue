<template>
    <div class="container">
        <h1>Tasks</h1>
        <div class="counter">
            Completed tasks: {{ this.variables.counter }}
        </div>
        <div class="main-container">
            <TodoCard
                    v-for="card of this.cards" :key="card"
                    v-bind:Card="card"
                    v-bind:methods="methods"/>
        </div>
    </div>
</template>

<script>
	import TodoCard from "@/components/TodoCard";

	export default {
		name: "Todos",
		components: {TodoCard},
		data() {
			return {
				methods: {
					remove: (id) => {
						let filtered = this.cards.filter(function (card) {
							return card.id !== id;
						});
						this.cards = filtered
						this.counter++
					}
				},
				variables: {
					counter: 0,
				},
				cards: []
			}
		},
		async mounted() {
			// console.log(1)
			const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
			const todos = await res.json()
            // console.log(todos)
			let result = []
			for (let todo in todos) {
				// console.log(todos[todo])
				const newTodo = {
					id: todos[todo].id,
					text: todos[todo].title,
					date: '5 november 2020'
				}
				result.push(newTodo)
			}
			// console.log(result)
			this.cards = result
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