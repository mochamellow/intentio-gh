<script>
	
	import Header from '../components/Header.svelte';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/Footer.svelte';

	let containerWidth;

</script>

<svelte:head>
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap" rel="stylesheet">
</svelte:head>


<Header/>

<div class="spacer"></div>

 <div class="page-content">
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
	
	<img class="lines-1" src="./img/lp-lines-1.svg" alt="lines background illustration">
	<img class="lines-2" src="./img/lines-onwhite-3.svg" alt="lines background illustration">
	<img class="lines-3" src="./img/lines-onwhite-3.svg" alt="lines background illustration">
	<img class="lines-4" src="./img/lp-lines-2.svg" alt="lines background illustration">
    <img class="lines-5" src="./img/lines-onwhite-2.svg" alt="lines background illustration">
	
	<div class="container" id="feature-anchor" bind:clientWidth={containerWidth}>
		<div class="div1">
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
		</div>
		<div class="div2">
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
			<h3>Be aware.</h3>
			<h3>Be accountable.</h3>
			<h3>Be intentional.</h3>
		</div>
	</div>
	
	<main>
	   <div class="center">
		   <img class="sparkle" src="./icons/sparkles.svg" alt="shapes icon">
		   <h2>Features</h2>
	   </div>
	
		<div class="feature-section feature-gap-1">
			<div class="feature-content" style="width: 408px">
				<div class="icons">
					<img src="./icons/book.svg" alt="book icon">
					<img src="./icons/happy.svg" alt="smiley icon">
				</div>
				<div class="text-container">
					<h3 style="width: 18.5rem;">Create Custom Block & Focus Sites</h3>
					<p style="width: 21.6rem;">Block the time-wasting sites that distract you and add the sites you use to work towards your goals into focus sites.</p>
				</div>
			</div>
			<div class="img-container img-container-right">
				<img class="bg-1-topright" src="./img/feature-content-bg-1-topright.svg" alt="background lines">
				<img class="bg-1-bottomleft" src="./img/feature-content-bg-1-bottomleft.svg" alt="background lines">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="feature-content-1" src="./img/feature-content1.png" alt="feature image 1">
			</div>
		</div>
	
		<div class="feature-section feature-gap-2">
			<div class="img-container img-container-left">
				<a href="/intentio-questions"><button id="question-button"><img class="logo-chrome" src="./icons/eye.svg" alt="eye icon" >View Questions</button></a>
				<img class="bg-2-topleft" src="./img/feature-content-bg-2-topleft.svg" alt="background lines">
				<img class="bg-2-bottomright" src="./img/feature-content-bg-2-bottomright.svg" alt="background lines">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="feature-content-2" src="./img/feature-content2.png" alt="feature image 1">
			</div>
			<div class="feature-content" style="width: 408px">
				<div class="icons">
					<img src="./icons/accessibility.svg" alt="book icon">
				</div>
				<div class="text-container">
					<div class="title-container">
						<h3 id="text1" style="width: 18.5rem;">Shift From</h3>
						<div class="one-liner-text-icon">
							<h3 id="text2">Mindless</h3>
							<img class="arrow-forward" src="./icons/arrow-forward.svg" alt="arrow forward icon">
							<h3 id="text2">Mindful</h3>
						</div>
					</div>
					<p style="width: 21.6rem;">When you visit a blocked site, you’ll get asked a short series of questions—designed to snap you out of the mindless state.</p>
				</div>
			</div>
		</div>
	
		<div class="feature-section feature-gap-1">
			<div class="feature-content" style="width: 408px">
				<div class="icons">
					<img src="./icons/chatbox-ellipses.svg" alt="chatbox ellipses icon">
				</div>
				<div class="text-container">
					<h3 style="width: 17rem;">Get Notified & Stay Accountable</h3>
					<p style="width: 20rem; margin-bottom: 0.5rem;">You’ll get notified of the time you have left according to how long you set for yourself on a blocked site.</p>
					<p style="width: 20rem">This helps you to be mindful and less likely to be irritated when you’re blocked from using the site when the time’s up.</p>
				</div>
			</div>
			<div class="img-container img-container-right">
				<img class="bg-3-bottomleft" src="./img/feature-content-bg-3-bottomleft.svg" alt="background lines">
				<img class="bg-3-topright" src="./img/feature-content-bg-3-topright.svg" alt="background lines">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="feature-content-3" src="./img/feature-content3.png" alt="feature image 1">
			</div>
		</div>
	
		<div class="feature-section feature-gap-2">
			<div class="img-container img-container-left">
				<img class="bg-1-topright" src="./img/feature-content-bg-1-topright.svg" alt="background lines">
				<img class="bg-1-bottomleft" src="./img/feature-content-bg-1-bottomleft.svg" alt="background lines">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="feature-content-4" src="./img/feature-content4.png" alt="feature image 4">
			</div>
			<div class="feature-content" style="width: 408px">
				<div class="icons">
					<img src="./icons/stopwatch.svg" alt="stopwatch icon">
				</div>
				<div class="text-container">
					<h3 style="width: 17rem;">Auto Focus Mode</h3>
					<p style="width: 20rem; margin-bottom: 0.5rem;">Start the Pomodoro timer whenever you visit your focus site.</p>
					<p>Never forget about starting a Pomodoro session anymore.</p>
				</div>
			</div>
		</div>
	
		<div class="feature-section feature-gap-1">
			<div class="feature-content" style="width: 408px">
				<div class="icons">
					<img src="./icons/eye-black.svg" alt="chatbox ellipses icon">
				</div>
				<div class="text-container">
					<h3 style="width: 18.43rem;">See Your Intentions at a Glance</h3>
					<p style="width: 21.875rem;">Reveal your browsing intentions, the sites you visited, and the amount of time you spent there.<p>
				</div>
			</div>
			<div class="img-container img-container-right">
				<img class="bg-1-topright" src="./img/feature-content-bg-1-topright.svg" alt="background lines">
				<img class="bg-1-bottomleft" src="./img/feature-content-bg-1-bottomleft.svg" alt="background lines">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="feature-content-5" src="./img/feature-content5.png" alt="feature image 1">
			</div>
		</div>
	
	</main>
	
	<Banner />
	<Footer />
 </div>

<style lang="scss">

	@font-face {
		font-family: 'Sofia Pro';
        font-style: normal;
		font-weight: 100;
        src:local('Sofia Pro'), url(../../../intentio-site/static/fonts/SofiaProRegular.otf) format('otf');
    }
	
	@font-face {
		font-family: 'Sofia Pro';
        font-style: normal;
		font-weight: 500;
        src:local('Sofia Pro'), url(../../../intentio-site/static/fonts/SofiaProMedium.otf) format('otf');
    }

	@font-face {
		font-family: 'SofiaProSemiBold';
		font-style: normal;
		font-weight: normal;
		src:local('SofiaProSemiBold'), url(../../../intentio-site/static/fonts/SofiaProSemiBold.otf) format('otf');
	}

	@font-face {
		font-family: 'Sofia Pro', sans-serif;
        font-style: normal;
		font-weight: bold;
        src:local('Sofia Pro'), url(../../../intentio-site/static/fonts/SofiaProBold.otf) format('otf');
    }

	.lines-1 {
		position: absolute;
		left: 0;
		top: 6.3rem;
		z-index: -1;
	}

	.lines-2 {
		position: absolute;
		transform: scaleX(-1);
		top: 36.25rem;
		right: 0;
		z-index: -1;
	}

	.lines-3 {
		position: absolute;
		transform: scaleY(-1);
		top: 53rem;
		left: 0;
	}

	.lines-4 {
		position: absolute;
		right: 0;
		top: 93rem;
		z-index: -1;
	}
	
	.lines-5 {
		position: absolute;
		left: 0;
		transform: scaleX(-1);
		top: 136rem;
		z-index: -1;
	}

	#question-button {
		position: absolute;
		left: 50%;
		top: 51%;
		transform: translate(-50%, -50%);
		font-family: "Bespoke Slab", sans-serif;
		font-weight: bold;
		padding-top: 1rem;
		padding-bottom: 0.8rem;
		padding-left: 1.25rem;
		padding-right: 1.4rem;
		background-color: #0f0e17;
		border: 0px;
		border-radius: 0.75rem;
		cursor: pointer;
		color: #F9F4EF;
		font-size: 16px;
		box-shadow: 0px 0px 24px rgba(15, 14, 23, 0.32);

		.logo-chrome {
			width: 1.5rem;
			height: 1.5rem;
			vertical-align: middle;
			margin-right: 0.75rem;
			margin-bottom: 4px;
		}
	}

	.title-container {
		#text1 {
			margin-bottom: 0px;
		}
		
		.one-liner-text-icon {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			margin-bottom: 0.5rem;

			#text2 {
				margin-bottom: 0;
			}

			.arrow-forward {
				width: 2.25rem;
				height: 2.25rem;
				margin-bottom: 0.2rem;
			}
		}
	}

	.feature-gap-1 {
		gap: 1.125rem;
	}

	.feature-gap-2 {
		gap: 69px;
	}

	.feature-section {
		display: flex;
		align-items: center;
		margin-bottom: 4rem;

		.feature-content {

			.icons {
				display: flex;
				gap: 1rem;
				margin-bottom: 1rem;

				img {
					width: 2rem;
					height: 2rem;
				}
			}
			
			.text-container {

				h3 {
					font-family: "SofiaProSemiBold", "Satoshi", sans-serif;
					font-weight: 700;
					font-size: 2rem;
					line-height: 2.25rem;
					margin-top: 0;
					margin-bottom: 0.8rem;
				}

				p {
					font-size: 1rem;
					// Sofia Pro Regular
					font-family: "Sofia Pro", "Satoshi", sans-serif;
					font-weight: 500;
					line-height: 1.5rem;
					margin:0;
				}
			}
		}

		.img-container {
			background-color: #E7E1D2;
			border-radius: 1rem;
			border: 2px solid #0f0e17;
			
			&-right {
				box-shadow: 8px 8px #0f0e17;
				position: relative;
			}

			&-left {
				box-shadow: -8px 8px #0f0e17;
				position: relative;
			}

			.feature-content-1 {
				width: 29.75rem;
				margin: 1.5rem;
				z-index: 3;
				position: relative;
			}

			.bg-1 {
			
				&-topright {
					right: 0;
					top: 0;
					position: absolute;
					z-index: 0;
				}

				&-bottomleft {
					left: 0;
					bottom: 0;
					position: absolute;
					z-index: 0;
				}
			}

			.feature-content-2 {
				margin-inline:17px;
				margin-bottom: -5px;
			}

			.bg-2 {
			
				&-topleft {
					left: 0;
					top: 0;
					position: absolute;
					z-index: 0;
				}

				&-bottomright {
					bottom: 0;
					right: 0;
					position: absolute;
					z-index: 0;
				}
			}

			.feature-content-3 {
				width: 23.8rem;
				margin: 1.5rem 4.5rem;
				position: relative;
				z-index: 2;
			}

			.bg-3 {
			
				&-bottomleft {
					left: 0;
					bottom: 0;
					position: absolute;
					z-index: 0;
				}

				&-topright {
					top: 0;
					right: 0;
					position: absolute;
					z-index: 0;
				}
			}

			.feature-content-4 {
				width: 30.11rem;
				margin-top: 3.25rem;
				margin-bottom: 2.375rem;
				margin-right: 0.82rem;
				margin-left: 1.68rem;
				position: relative;
				z-index: 3;
			}

			.feature-content-5 {
				width: 28.9rem;
				margin: 2.78rem 1.84rem;
				position: relative;
				z-index: 3;
			}
		}
	}

	@keyframes slide {
		0% {
			transform: translate(-100%, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.container {
		overflow: hidden;
		display: flex;
		align-items: baseline;
		background: #0f0e17;
		margin: 0 auto;
		white-space: nowrap;

		.div1, .div2 {
			display: flex;
			animation: slide 80s linear infinite;
		}

		h3 {
			// Sofia Pro Regular
			font-family: "Sofia Pro", "Satoshi", sans-serif;
			font-weight: 500;
			color: #F9F4EF;
			font-size: 1.5rem;
			margin-left: 2.5rem;
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
		max-width: 33rem;
		
		h1 {
			// Sofia Pro Bold
			font-family: "Sofia Pro", "Satoshi", sans-serif;
			font-weight: 900;
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
			// Sofia Pro Regular
			font-family: "Sofia Pro", "Satoshi", sans-serif;
			font-weight: 500;
			line-height: 30px;
			font-size: 1.25rem;
			margin-top: 1.5rem;
			margin-bottom: 2rem;
		}

        button {
            font-family: "Bespoke Slab", sans-serif;
            font-weight: bold;
            padding-top: 1rem;
            padding-bottom: 0.85rem;
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

    .center {
        margin-top: 5rem;
        text-align: center;
        align-items: center;
        margin-bottom: 3.5rem;

        .sparkle {
            width: 2rem;
            height: 2rem;
            margin: auto;
        }

        h2 {
            font-family: "SofiaProSemiBold", "Satoshi", sans-serif;
            font-weight: 700;
            font-size: 2rem;
			margin-top: 1rem;
        }
    }

	.spacer {
		height: 6.305rem;
	}

	main{
		max-width: 948px;
		margin: 32px auto;
	}
	

	/* -------------------------------- SCROLLBAR ------------------------------- */
	/* Width*/
	:root::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		background: #0f0e17;
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: #302e2b;
	}

</style>