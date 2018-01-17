export const Ex4Mixin = {
    data() {
        return {
            e4test: "This is a Test!",
        }
    },
    computed: {
        e4testAddCount() {
            return this.e4test + ' (' + this.e4test.length + ')';
        }
    }
}