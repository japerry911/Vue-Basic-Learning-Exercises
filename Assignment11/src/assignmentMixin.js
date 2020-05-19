export const assignmentMixin = {
    data() {
        return {
            text: 'skylord'
        };
    },
    filters: {
        reverseText(value) {
            return value.split('').reverse().join('');
        }
    },
    computed: {
        reverseTextComputed() {
            return this.text.split('').reverse().join('');
        },
        appendLengthComputed() {
            return `${this.text} - (${this.text.length})`;
        }
    }
}