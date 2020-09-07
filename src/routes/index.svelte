<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from '../components/Post.svelte';
	import Newsletter from '../components/Newsletter.svelte';

	export let posts;
</script>

<style>
	.Post {
		display: grid;
		justify-content: space-between;
		grid-gap: 15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Francisco Imanol Suarez Inlab</title>
	<meta name="description" content="Blog de Inlab" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@suarez__imanol" />
	<meta name="twitter:creator" content="@suarez__imanol" />
	<meta name="twitter:title" content="Francisco Imanol Suarez Inlab" />
	<meta name="twitter:description" content="Blog de Inlab" />	
	<meta name="twitter:image" content="https://arepa.s3.amazonaws.com/blogposr-cover.png" />
	
	
	
	<meta name="og:title" content="Francisco Imanol Suarez Inlab" />
	<meta name="og:description" content="Blog de Inlab" />
	<meta name="og:image" content="https://arepa.s3.amazonaws.com/blogposr-cover.png" />
	<meta name="og:url" content="https://blog.inlab.com" />
	<meta name="og:name" content="Francisco Imanol Suarez Inlab" />


	<meta name="og:locate" content="es_ES" />
	<meta name="og:type" content="article" />
	<meta name="fb:app_id" content="fan page" />



	
</svelte:head>

<div class="Home">
  <div class="Posts">
    {#each posts as post}
      <Post {post} />
    {/each}
  </div>
</div>