export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        };
    }, 
    computed: {
        filteredFruits() {
            return this.fruits.filter(fruit => fruit.toLowerCase().match(this.filterText.toLowerCase()));
        }
    },
    created() {
        console.log('created');
    }
};