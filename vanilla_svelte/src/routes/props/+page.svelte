<script>
    import Nested from "./Nested.svelte";
    import PackageInfo from "./PackageInfo.svelte";

    const pkg = {
        name: 'Svelte',
        speed: 'Blazing',
        version: 4,
        website: 'https://svelte.dev'
    };
</script>

<Nested answer={42} />
<Nested />

<PackageInfo 
{...pkg}
/>