<template>
    <div>
        <h3>{{ Card.text }}</h3>
        <p>{{ Card.date }}</p>
        <CardButton v-bind:button="button"/>
    </div>
</template>

<script>
	import CardButton from "@/components/CardButton";

	export default {
		props: ['Card'],
		name: "TodoCard",
		components: {CardButton},
		data() {
			return {
				button: {
					text: 'Done',
					type: '',
                    id: this.Card.id
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
    $card-width: 325px;
    $card-height: 150px;
    div {
        position: relative;
        width: $card-width;
        height: $card-height;
        min-height: 100%;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        border-radius: 9px;
        margin: 10px;
        padding: 5px;
        align-content: space-between;
    }

    h3 {
        font-weight: bold;
        font-size: 21px;
        line-height: 25px;
        color: #323232;
        text-align: left;
        margin: 10px 5px 5px;
    }

    p {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #C4C4C4;
        text-align: left;
        margin: 5px 5px;
    }
</style>