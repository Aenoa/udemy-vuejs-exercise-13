<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                {{ test | reversed }} 
                <hr />
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                {{ test | addCharCount }} - {{ test | addCharCount | reversed }} -  {{ test | reversed | addCharCount }}
                <hr />
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                {{ testAddCount }} - {{ testReverse }}
                <hr />
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                {{ e4testAddCount }} - {{ e4test }}
            </div>
        </div>
    </div>
</template>

<script>
    import { Ex4Mixin } from './Ex4Mixin.js';
    export default {
        mixins: [Ex4Mixin],
        data() {
            return {
                test: "This is a Test!",
            }
        },
        filters: {
            reversed(e) {
                return e.split('').reverse().join('');
            }
        },
        computed: {
            testReverse() {
                return this.test.split('').reverse().join('');
            },
            testAddCount() {
                return this.test + ' (' + this.test.length + ')';
            }
        }
    }
</script>

<style>
</style>
