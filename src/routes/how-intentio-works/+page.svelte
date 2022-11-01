<script>
	import Header from '../../components/Header.svelte';
	import Banner from '../../components/Banner.svelte';
	import Footer from '../../components/Footer.svelte';
    import Modal from '../../components/Modal.svelte';

    let showModal = false;
    const toggleModal = () => {
        showModal = !showModal;
    }

    let showRef = false;
    const toggleRef = () => {showRef = !showRef}
</script>

<svelte:head>
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap" rel="stylesheet">
</svelte:head>

<Modal title="Bottom-up Processing" message="Bottom-up processing is the process of ‘sensation’, whereby the input of sensory information from the external environment is received by our sensory receptors." showModal={showModal} on:click={toggleModal}/>
<Header />

<div class="spacer"></div>
<main>
	
    <div class="center">
        <img class="shapes" src="./icons/shapes.svg" alt="shapes icon">
        <h1>How Intentio Works?</h1>
    </div>

    <p>We used to be able to read books or watch 30-minutes or hour-long TV shows, and it’s easier to actually focus on studying, but technology is changing our attention span. As our digital consumption becomes more bite-sized—we no longer need to pay attention like we used to.</p>

    <p>The payoff from technology is becoming sweeter, faster, and more immediate.</p>

    <p>As technology becomes more sophisticated, it gets better at hijacking our attention. As technology companies are at war for our attention—and as they get better and better in claiming our attention—essentially we lose out on everything else (studying for that exam, working towards that personal project, side hustles, or the things that you actually want to do) because our attention is being grabbed by all of these platforms.</p>

    <p>The mechanism they use to pull our attention away from our goals is through the sensory stimuli that take advantage of <span><a href="#" on:click={toggleModal}>bottom-up processing</a></span>.</p>

    <p>And as technology improves and gets better at claiming our attention—more effort is needed for us to give into controlling our minds and focus on the things we want to do. </p>

    <p>One solution that was found to be useful in increasing mindfulness of social media consumption is by implementing an intervention design by automating digital nudges (Purohit & Holzer, 2021). For instance, researchers at Cornell Tech leveraged nudging and negative reinforcement concepts with their vibration intervention (Okeke et al. 2018) does decrease social media usage; however, most participants felt irritated and annoyed by the digital nudge and returned to their old habits when the intervention was removed. The intervention gave a chance for self-reflection, but it was frequently ignored (Kim, Jung, et al. 2019). </p>

    <p>To avoid making users feel irritated and annoyed by the digital nudge is not to prevent users from scrolling through their newsfeeds, but to reduce it by making it more mindful. The challenge is that the interventions need to be simultaneously strong to allow users to change their behavior—as well as soft enough to avoid backfiring—which may eventually lead to users forsaking the intervention altogether (Purohit & Holzer, 2021).</p>

    <p>Intentio is designed with that approach which was proven to have a 20.58% reduction in weekly digital consumption, and how it made the participants more mindful of their media consumption. However, the research only shows a decrease in the time of the social media platform, but not a reduced number of times the social media platform is opened (Purohit & Holzer, 2021).</p>

    <p>That’s why Intentio takes it a step further in uncovering your intention as you mindlessly visit those digital platforms. </p>

    <p>In addition to helping you become more mindful of your digital consumption—which simultaneously reduces the time you spend on those platforms but also understanding your intention with Intent Questions—snapping you out from the passive and mindless state to active and aware. </p>

    <p>Intentio also doesn’t collect users’ data as it is designed with privacy and ethical concerns in mind, giving you peace of mind in using Intentio as a part of your daily lives.</p>
    <br>
    <p><span class="small-title">TL;DR</span></p>
    <p>
        With Intentio, you can always access your blocked sites. The point is not to force you to stop cold turkey but to understand why you go there in the first place.
    </p>

    <p>Because the internet is undeniably a part of our lives now (and you can always find a way to get your cravings met), it’s a good idea to understand what makes you want to do those things and shift your actions mindfully towards the things you want to do.</p>

    <div class="inline-icon-text">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            {#if showRef}
                <img class="caret-down" src="./icons/caret-down.svg" alt="caret down icon" on:click|self={toggleRef}>
            {/if}
                
            {#if !showRef}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img class="caret-down" src="./icons/caret-forward.svg" alt="caret forward icon" on:click|self={toggleRef}>
            {/if}

        <h3 style="font-family: 'Satoshi', sans-serif; font-weight: 700">References</h3>
    </div>

    
    <ul class="references">
            {#if showRef}
                <li>
                    Purohit, Aditya & Holzer, Adrian. (2021). Unhooked by Design: Scrolling Mindfully on Social Media by Automating Digital Nudges. <span> <a href="https://bit.ly/3EM54Do">https://bit.ly/3EM54Do</a></span>
                </li>
                <li>
                    Purohit, A. K., & Holzer, A. (2019). Functional digital nudges. *Extended Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems*. <span><a href="https://doi.org/10.1145/3290607.3312876">https://doi.org/10.1145/3290607.3312876</a></span>
                </li>
                <li>
                    Okeke, F., Sobolev, M., Dell, N., & Estrin, D. (2018). Good vibrations. *Proceedings of the 20th International Conference on Human-Computer Interaction with Mobile Devices and Services*. <span><a href="https://doi.org/10.1145/3229434.3229463">https://doi.org/10.1145/3229434.3229463</a></span>
                </li>
                <li>
                    KAIST, U. L., Lee, U., & Metrics, O. M. V. A. (2019, March 1). *Goalkeeper: Exploring interaction lockout mechanisms for regulating smartphone use: Proceedings of the ACM ON Interactive, Mobile, wearable and Ubiquitous Technologies: Vol 3, no 1*. Proceedings of the ACM on Interactive, Mobile, Wearable, and Ubiquitous Technologies. <span><a href="https://dl.acm.org/doi/10.1145/3314403">https://dl.acm.org/doi/10.1145/3314403</a></span>
                </li>
            {/if}
        <ul/>
        

    <img class="lines-3" src="./img/lines-onwhite-3.svg" alt="lines background illustration">
</main>
    <img class="lines-1" src="./img/lines-onwhite-1.svg" alt="lines background illustration">
    <img class="lines-2" src="./img/lines-onwhite-2.svg" alt="lines background illustration">

<Banner />
<Footer />

<style lang="scss">


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
        top: 50rem;
    }

    .lines-3 {
        position: absolute;
        transform: translate(0%, -68%);
        max-width: 23rem;
        left: 0;
        z-index: -1;
    }

    .center {
        margin-top: 5rem;
        text-align: center;
        align-items: center;
        margin-bottom: 3rem;

        .shapes {
            width: 2rem;
            height: 2rem;
            margin: auto;
        }

        h1{
            font-family: "SofiaProSemiBold", "Satoshi", sans-serif;
            font-size: 2rem;
            font-weight: 700;
        }
    }




    a {
        color: #0f0e17;
    }

    .inline-icon-text {
        display: flex;
        align-items: center;
        gap: 8px;

        h3 {
            font-family: "SofiaProSemiBold", "Satoshi", sans-serif;
            font-weight: 900;
            font-size: 1.5rem;
            font-weight: normal;
            padding-top: 4px;
        }
    }

    .caret-down {
        width: 1.5rem;
        height: 1.5rem;
        background-size: cover;
        cursor: pointer;
    }

    p {
        // Sofia Pro Regular
        font-family: "Sofia Pro", "Satoshi", sans-serif;
        font-weight: 500;
        line-height: 1.6rem;
        font-size: 1.125rem;
        line-break: normal;
        margin-bottom: 1.12rem;
        text-align: justify;
    }

    .small-title {
        // SOfia Pro Bold
        font-family: "Sofia Pro", "Satoshi", sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
    }

    .references {
        margin-bottom: 5rem;
        padding-left: 1.5rem;

        li {
            // Sofia Pro Regular
        font-family: "Sofia Pro", "Satoshi", sans-serif;
        font-weight: 500;
        text-decoration: dotted;
        line-height: 1.68rem;
        font-size: 1.125rem;
        margin-bottom: 1.125rem;
        text-align: justify;

            a {
                overflow-wrap: break-word;
            }
        }
    }

	:global(body) {
		background: #DAD3C2;
		margin: 0;
		padding: 0;
        overflow-x: hidden;
	}

	.spacer {
		height: 6.305rem;
	}

	main{
		max-width: 948px;
		margin: 32px auto;
		padding-inline: 40px;
	}

    @media screen and (max-width: 570px) {
        main {
            padding-inline: 24px;
        }

        .center {
            margin-top: 2rem;
            margin-bottom: 2rem;

            h1 {
                margin-top: 0.8rem;
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 0.95rem;
            line-height: 1.3rem;
        }

        .references {
            padding-left: 1.5rem;

            li {
                padding-left: 0 ;
                font-size: 0.95rem;
                line-height: 1.4rem;
            }
        }
    }

</style>