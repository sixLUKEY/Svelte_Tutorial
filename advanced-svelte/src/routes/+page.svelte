<script>
    export const routes = [
        {
            name: 'motion',
            href: 'motion'
        }
    ]
</script>

<nav>
    <ul>
        {#each routes as { name, href }}
             <li>
                <a {href}>{name}</a>
             </li>
        {/each}
    </ul>
</nav>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
