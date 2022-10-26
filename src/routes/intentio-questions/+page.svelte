
<script>
	
	import Header from '../../components/Header.svelte';
	import Banner from '../../components/Banner.svelte';
	import Footer from '../../components/Footer.svelte';

</script>

<svelte:head>
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<div class="spacer"></div>

<main>
	
    <div class="center">
        <img class="puzzle" src="./icons/puzzle.svg" alt="puzzle icon">
        <h1>Intentio Questions</h1>
    </div>

    <p>When you visit a blocked site, you'll get asked a short series of question—designed to snap you out of the mindless state.</p>

    <img class="question-diagram" src="./img/intentio-questions.svg" alt="intentio questions diagram">

    <img class="lines-3" src="./img/lines-onwhite-3.svg" alt="lines background illustration">
</main>
    <img class="lines-1" src="./img/lines-onwhite-1.svg" alt="lines background illustration">
    <img class="lines-2" src="./img/lines-onwhite-2.svg" alt="lines background illustration">
<Banner />
<Footer />

<style lang="scss">
	

    .center {
        margin-top: 5rem;
        text-align: center;
        align-items: center;
        margin-bottom: 1.5rem;

        .puzzle {
            width: 2rem;
            height: 2rem;
            margin: auto;
        }

        h1 {
        font-family: "sofia_prosemibold", "Satoshi", sans-serif;
        font-weight: 700;
        font-size: 32px;
        }
    }

    p {
        max-width: 568px;
        font-size: 1.125rem;
        font-family: "sofia_proregular", "Satoshi", sans-serif;
        font-weight: 500;
        line-height: 1.6rem;
        text-align: center;
        margin-inline: auto;
        margin-bottom: 4rem;
    }

    .question-diagram {
        display: flex;
        margin-inline: auto;
        margin-bottom: 5rem;
        max-width: 48.8rem;
    }

	:global(body) {
		background: #DAD3C2;
		margin: 0;
		padding: 0;
	}

	.spacer {
		height: 6.305rem;
	}

	main{
		max-width: 948px;
		margin: 32px auto;
	}

    .lines-1 {
        position: absolute;
        max-width: 22%;
        left: 0;
        top: 20%;
    }

    .lines-2 {
        position: absolute;
        max-width: 22%;
        right: 0;
        top: 70%;
    }

    .lines-3 {
        position: absolute;
        transform: translate(0%, -100%);
        max-width: 22%;
        left: 0;
    }


</style>