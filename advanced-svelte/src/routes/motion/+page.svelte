<script>
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    import Springs from "./Springs.svelte";

    const progress = tweened(0 ,{
        duration: 400,
        easing: cubicOut
    });
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0)}>
	0%
</button>

<button on:click={() => progress.set(0.25)}>
	25%
</button>

<button on:click={() => progress.set(0.5)}>
	50%
</button>

<button on:click={() => progress.set(0.75)}>
	75%
</button>

<button on:click={() => progress.set(1)}>
	100%
</button>

<Springs/>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>
