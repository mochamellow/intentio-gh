<script>
	
	import Header from '../components/Header.svelte';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/Footer.svelte';

</script>

<Header />
<div id="line"></div>
<main>
	<section class="first-section">
		<div class="main-left">
			<h1>Stop Browsing</h1>
			<div class="line-icon-text">
				<img class="trail-sign" src="./icons/trail-sign.svg" alt="trail sign icon">
				<h1>Mindlessly &</h1>
			</div>
			<h1>Become Intentional</h1>
			<p>Uncover your true intentions on internet consumption and shift your actions mindfully towards the things you actually want to do.</p>
			<button><img class="logo-chrome" src="./icons/logo-chrome.svg" alt="chrome logo" >Add to Chrome</button>
		</div>
		<img class="homepage-ui" src="./img/homepage-ui.png" alt="Homepage Design">

	</section>

</main>

<div class="tagliner">
	<div class="marquee">
		<h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3>
	</div>
	<div class="marquee">
		<h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3> <h3>Be aware.</h3> <h3>Be accountable.</h3> <h3>Be intentional.</h3>
	</div>
</div>

<main>
	<p>hello</p>
</main>

<Banner />
<Footer />

<style lang="scss">

	@keyframes marquee {
		0% {
			transform: translate(-100%, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.tagliner {
		display: flex;
		align-items: baseline;
		background: #0f0e17;
		gap: 2.5rem;
		overflow: hidden;

		.marquee {
			display: flex;
			gap: 2.5rem;
			white-space: nowrap;
			animation: marquee 140s linear infinite;
		}

		h3 {
			font-family: "Sofia Pro";
			font-weight: normal;
			color: #F9F4EF;
			font-size: 1.5rem;
		}
	}

	.first-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 5rem auto;

		.homepage-ui {
			max-width: 21rem;
		}
	}

	.main-left {
		max-width: 32rem;
		
		h1 {
			font-family: "Sofia Pro";
			font-weight: bold;
			font-size: 3.5rem;
			margin-block: 0.1rem;
		}

		.line-icon-text {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-top: 0.4rem;

			.trail-sign {
				margin-bottom: 0.5rem;
			}
		}

		p {
			max-width: 31rem;
			font-family: "Sofia Pro";
			font-weight: normal;
			line-height: 30px;
			font-size: 1.25rem;
			margin-top: 1.5rem;
			margin-bottom: 2rem;
		}

        button {
            font-family: "Bespoke Slab";
            font-weight: bold;
            padding-top: 1rem;
            padding-bottom: 0.8rem;
            padding-left: 1.25rem;
            padding-right: 1.4rem;
            margin-top: 0.4rem;
            background-color: #0f0e17;
            border: 0px;
            border-radius: 0.75rem;
            cursor: pointer;
            color: #F9F4EF;
            font-size: 16px;
            
            .logo-chrome {
                width: 1.5rem;
                height: 1.5rem;
                vertical-align: middle;
                margin-right: 0.75rem;
                margin-bottom: 4px;
            }
        }
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

	@font-face {
        font-family: 'SofiaProSemiBold';
        font-style: normal;
        src:local('SofiaProSemiBold'), url(./fonts/SofiaProSemiBold) format('otf');
    }

</style>