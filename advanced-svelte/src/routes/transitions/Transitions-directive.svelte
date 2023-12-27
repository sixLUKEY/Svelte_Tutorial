<script>
    let visible = false;
    let status = 'waiting...';
    import { fade } from "svelte/transition";
    import { fly } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

    function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}

    function typewriter( node, { speed = 1 }){
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

        if ( !valid ){
            throw new Error(`This transition only works on elements with a single text node child`)
        }

        const text = node.textContent;
        const duration = text.length / ( speed * 0.01 );

        return {
            duration,
            tick: (t) => {
                const i = Math.trunc( text.length * t );
                node.textContent = text.slice( 0, i )
            }
        };
    }
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
    visible
</label>

<p>
    status : { status }
</p>

{#if visible}
     <p transition:fade>
        Fades in and out
     </p>
     <p in:fly={{ y: 200, duration: 2000 }} out:fade>
        Flies in, fades out
     </p>
     <div
		class="centered"
		in:spin={{ duration: 8000 }}
		out:fade
	>
		<span>transitions!</span>
	</div>
    <p transition:typewriter>
        The quick brown fox jumps over the lazy dog
    </p>
    <p transition:fly={{ y: 200, duration: 2000}}
        on:introstart={() => status = 'intro started'}
        on:outrostart={() => status = 'outro started'}
        on:introend={() => status = 'intro ended'}
        on:outroend={() => status = 'outro ended'}
    >
        Flies in and out
    </p>
{/if}

<style>
    .centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

    span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>