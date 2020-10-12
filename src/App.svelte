<script>
	import Gun from "gun/gun";
	const gun = Gun("http://localhost:8765/gun");
	const state = {};

	function handleClick() {}
</script>

<style>
</style>

<main>
	<pre>{JSON.stringify(state, null, 2)}</pre>
	<button on:click|preventDefault={handleClick}> click me </button>
</main>
