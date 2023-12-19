<script>
    import EventModifiers from "./EventModifiers.svelte";
    import Inner from "./Inner.svelte";

    function handleMessage( event ){
        alert( event.detail.text );
    }

    let m = {
        x : 0,
        y : 0
    };

</script>

<div on:pointermove={( e ) => {
    m = {
        x: e.clientX, 
        y: e.clientY
        };
}}>
    The pointer is at {m.x} x {m.y}
</div>

<EventModifiers/>

<Inner on:message={handleMessage}/>

<style>
    div {
        z-index: -5;
		position: fixed;
		left: 0;
		top: 15px;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>