<script>
    import Audioplayer from "./Audioplayer.svelte";
    import { tracks } from './tracks.js';
</script>

<div class="centered">
    {#each tracks as track}
         <Audioplayer {...track}/>
    {/each}
</div>

<style>
    .centered {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		gap: 0.5em;
		max-width: 40em;
		margin: 0 auto;
	}
</style>