<script>
	
	import Header from '../components/Header.svelte';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/Footer.svelte';

</script>

<Header />
<div id="line"></div>
<main>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aut ex eviniet dolor sit amet consectetur adipisicing elit. Consequatur lorem ipsum sit amet dolor.</p>
</main>
<Banner />
<Footer />

<style lang="scss">
	@font-face {
        font-family: 'SofiaProSemiBold';
        font-style: normal;
        src:local('SofiaProSemiBold'), url(fonts/SofiaProSemiBold) format('otf');
    }

    p {
        font-family: "SofiaProSemiBold";
    }

	:global(body) {
		background: #DAD3C2;
		margin: 0;
		padding: 0;
		overflow: overlay;
	}

	#line {
		border-bottom: 2px solid #0f0e17;
	}

	main{
		max-width: 948px;
		margin: 32px auto;
	}


</style>