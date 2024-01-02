<svelte:options immutable />

<script>
    import { afterUpdate } from "svelte";
    import flash from './flash.js';

    export let todo;

    let element;

    afterUpdate(() => {
        flash(element);
    })
</script>

<!-- This element will flash red whenever todo object changes -->

<li bind:this={element}>
    <label>
        <input type="checkbox" checked={todo.done} on:change>
        {todo.text}
    </label>
</li>