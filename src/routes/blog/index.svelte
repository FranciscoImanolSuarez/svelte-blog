<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import readingTime from '../../utils/readingTime';
    import randomEmoji from '../../utils/randomEmoji';
    import formatIsoTime from '../../utils/formatIsoTime';
	export let posts;
</script>


<style>


.blog-card {
	 display: block;
	 position: relative;
	 background: #444;
	 background-size: cover;
	 background-position: center;
	 background-repeat: no-repeat !important;
	 width: 85%;
	 max-width: 700px;
	 height: 380px;
	 box-shadow: 4px 8px 28px rgba(39, 44, 49, .1), 1px 3px 8px rgba(39, 44, 49, .075);
	 margin: 15vh auto;
	 overflow: hidden !important;
}
 .blog-card:hover {
	 box-shadow: 0 0 1px rgba(39, 44, 49, .2), 0 3px 16px rgba(39, 44, 49, .25);
	 transform: translate3D(0, -0.5px, 0);
}
 .blog-card .content-mask {
	 display: inline-block;
	 background: rgba(255, 255, 255, 0.9);
	 width: 61%;
	 height: 100%;
	 padding: 0.75em 0 0.75em 2.5em;
	 overflow: hidden;
	 z-index: 5;
}
 .blog-card .horizontal {
	 display: inline-block;
	 position: relative;
	 background: linear-gradient(to top right, rgba(255, 255, 255, 0.9) 50%, transparent 0);
	 height: 101%;
	 width: 20%;
	 top: -5%;
	 right: 0.8%;
	 overflow: hidden;
}
 .blog-card.python {
	 background-image: url('https://sg.fiverrcdn.com/photos/115522316/original/0f1ff5d0ae8e6d044d936feaa91630dcec3a0941.jpg?1533894592');
}
 .blog-card.web {
	 background: url('https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2016/12/improving-website-performance-using-a-content-delivery-network-cdn.jpg');
}
 .content-container {
	 margin-right: -5vw;
}
 .category {
	 display: inline-block;
	 background: #e23f7e;
	 color: rgba(255, 255, 255, 0.9);
	 font-weight: 500;
	 letter-spacing: 1px;
	 text-align: center;
	 min-width: 45px;
	 border-radius: 5px;
	 box-shadow: 0 0 1px rgba(172, 28, 56, .1), 0 2px 6px rgba(172, 28, 56, .175);
	 margin: 3vh 2px 2.5vh;
	 padding: 6px 8px;
	 cursor: pointer;
	 z-index: 9;
}
 .category.python {
	 background: #2a9d5a;
}
 .category:hover {
	 box-shadow: 0 0 1px rgba(10, 96, 58, .2), 0 3px 6px rgba(39, 44, 49, .25);
}
 h1 {
	 background: transparent;
	 color: rgba(0, 0, 0, 0.9);
	 font-family: 'Nunito', 'Open Sans', sans-serif;
	 font-size: 2.5em;
	 font-weight: 800;
	 line-height: 1.2;
	 height: auto;
	 border-bottom: 2px solid rgba(204, 204, 204, 0.75);
	 margin-top: 0;
	 margin-bottom: 0.35em;
	 padding-bottom: 5px;
}
 p {
	 font-size: 1.1em;
	 line-height: 1.4;
	 width: 100%;
	 margin-top: 0.3em;
	 padding-left: 2px;
	 z-index: 9;
}
 .post-detail {
	 color: rgba(0, 0, 0, 0.55);
	 margin-top: 6.5vh;
	 padding-left: 2px;
	 vertical-align: middle;
}
 .post-detail .icon svg {
	 position: relative;
	 width: 14px;
	 top: 2.25px;
	 margin-right: 7px;
}
 .post-detail .date {
	 color: rgba(0, 0, 0, 0.65);
	 font-size: 0.85em;
}
 .credit {
	 position: relative;
	 font-family: 'Nunito' Helvetica, sans-serif;
	 font-size: 1.5em;
	 font-weight: 200;
	 text-align: center;
	 bottom: 0.75em;
	 margin-bottom: 10vh;
}
 .credit .creator-link {
	 color: #000;
	 font-family: "Kaushan Script", "Lato", Helvetica, sans-serif;
	 font-size: 1.05em;
	 font-weight: 600;
	 letter-spacing: 0.5px;
	 text-decoration: none;
	 transition: all 300ms linear;
}
 .credit .creator-link:hover {
	 color: #fff;
	 text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
	 transition: all 350ms linear;
}
 
</style>


<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<!-- <div>
{#each posts as post}
		
<div class="card-deck">
<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{post.title}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  </div> 
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</div> -->
