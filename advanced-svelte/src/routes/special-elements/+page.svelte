<script>
	import Folder from './Folder.svelte';
	import { files } from './data.js';

	import RedThing from './RedThing.svelte';
	import BlueThing from './BlueThing.svelte';
	import GreenThing from './GreenThing.svelte';

    import SvelteElement from './SvelteElement.svelte';
	import SvelteWindow from './SvelteWindow.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'green', component: GreenThing },
		{ color: 'blue', component: BlueThing }
	];

	let selected = options[0];
</script>

<Folder name="Home" {files} expanded />

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component}/>

<SvelteElement/>
<SvelteWindow/>