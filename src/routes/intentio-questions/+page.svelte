
<script>
	
	import Header from '../../components/Header.svelte';
	import Banner from '../../components/Banner.svelte';
	import Footer from '../../components/Footer.svelte';

</script>

<Header />
<div id="line"></div>
<main>
	
    <div class="center">
        <div class="puzzle"></div>
        <h1>Intentio Questions</h1>
    </div>

    <p>When you visit a blocked site, you'll get asked a short series of question—designed to snap you out of the mindless state.</p>

    <img src="img/intentio_questions.png" alt="intentio questions diagram">

</main>
<Banner />
<Footer />

<style lang="scss">
	@font-face {
        font-family: 'SofiaProSemiBold';
        font-style: normal;
        src:local('SofiaProSemiBold'), url(/fonts/SofiaProSemiBold.otf) format('otf');
    }

    .center {
        margin-top: 5rem;
        text-align: center;
        align-items: center;
        margin-bottom: 1.5rem;

        .puzzle {
            background-image: url(icons/puzzle.svg);
            width: 2rem;
            height: 2rem;
            background-size: cover;
            margin: auto;
        }

        h1 {
        font-family: "SofiaProSemiBold";
        font-size: 32px;
        font-weight: 100;
        }
    }

    p {
        max-width: 568px;
        font-size: 1.125rem;
        font-family: "Sofia Pro";
        line-height: 1.6rem;
        text-align: center;
        margin-inline: auto;
        margin-bottom: 4rem;
    }

    img {
        display: flex;
        margin-inline: auto;
        margin-bottom: 5rem;
    }

	:global(body) {
		background: #DAD3C2;
		margin: 0;
		padding: 0;
	}

	#line {
		border-bottom: 2px solid #0f0e17;
	}

	main{
		max-width: 948px;
		margin: 32px auto;
	}


</style>