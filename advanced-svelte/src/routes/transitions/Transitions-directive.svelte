<script>
    let visible = true;
    import { fade } from "svelte/transition";
    import { fly } from "svelte/transition";
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
</label>

{#if visible}
     <p transition:fade>
        Fades in and out
     </p>
     <p in:fly={{ y: 200, duration: 2000 }} out:fade>
        Flies in, fades out
     </p>
{/if}