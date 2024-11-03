<script>
	import { page } from '$app/stores';
	import logo from '$lib/img/logo.svg';
	import Menu from "./menu.svelte";

	let tabs = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
	];

</script>


<header>
	<div class="logo">
		<a href="/">
			<img src="{logo}" alt="OW" />
		</a>
	</div>

	<nav>
		<ul>
			{#each tabs as tab}
				<li aria-current={$page.url.pathname === tab.url ? 'page' : undefined}>
					<a href="{tab.url}">{tab.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<Menu {tabs}/>
</header>


<style>
	header {
		display: flex;
		z-index: 10;
		padding: .5em clamp(0em, 2vw, 5em);
		justify-content: space-between;
		background-color: var(--color-theme-3);
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.logo img {
		margin-left: 3vw;
		height: 3.2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		view-transition-name: navbar;
	}

	ul {
		display: flex;
		justify-content: center;
		padding: 0 1em;
		margin: 0;
		gap: 4em;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		content: '';
		width: 100%;
		height: 3px;
		position: absolute;
		bottom: 10px;
		left: 0;
		background-color: var(--color-bg-1);
		view-transition-name: indicator;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-bg-2);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: .2em;
		text-decoration: none;
	}

	@media (max-width: 1100px) {
		ul {
			display: none;
		}
	}
</style>
