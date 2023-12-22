<script>
    let visible = true;
    import { fade } from "svelte/transition";
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
</label>

{#if visible}
     <p transition:fade>
        Fades in and out
     </p>
{/if}