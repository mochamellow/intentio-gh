<script>
    import MobileNav from './MobileNav.svelte';

    let showNav = false;
    const toggleNav = () => {
        showNav = !showNav;
    }

</script>

<MobileNav showNav={showNav} on:click={toggleNav}/>

<header>
    <div class="content">
        <a href="/"><h1><img class="logo" src="./intentio-logo.svg" alt="intentio-logo"></h1></a>
        <div class="nav">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img class="menu" src="./icons/menu.svg" alt="menu icon" on:click={toggleNav}>
            <a href="/#feature-anchor">
                <div class="inline-icon-text">
                    <img src="./icons/sparkles-filled.svg" alt="sparkles icon">
                    <h4>Features</h4>
                </div>
            </a>
            <a href="/how-intentio-works">
                <div class="inline-icon-text">
                    <img src="./icons/shapes-filled.svg" alt="shapes icon">
                    <h4>How Intentio Works?</h4>
                </div>
            </a>
            <a href="/intent-questions">
                <div class="inline-icon-text">
                    <img src="./icons/puzzle-filled.svg" alt="puzzle icon">
                    <h4>Intent Questions</h4>
                </div>
            </a>
        </div>
    </div>
</header>

<style lang="scss">

    @media screen and (max-width: 570px) {
        header {
            .content {
                padding-inline: 24px;
            }
        }
    }
    
	@media screen and (max-width: 820px) {

        h1 {
            margin-block: 0.8rem;
        }

        .nav {
            a {
                display: none;
            }
            
            .menu {
                display: flex;
                scale: 1.5;
            }
        }
    }

    .menu {
        display: none;
    }

    header {
        position: fixed;
        z-index: 10;
        top: 0;
        width: 100%;
        border-bottom: 2px solid #0f0e17;
        background-color: #DAD3C2;
    }

    .content{
        background: #DAD3C2;
		max-width: 948px;
        margin-inline: auto;
        padding-top: 8px;
		padding-inline: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    
    .logo {
        max-width: 147px;
    }
    
    .nav {
        display: flex;
        gap: 24px;
        margin-top: -8px;

        img {
            max-width: 20px;
        }

        a {
            scroll-behavior: smooth;
        }
    }


    h4 {
        // Sofia Pro Bold
        font-family: 'SofiaProSemiBold', "Satoshi", sans-serif;
        font-size: 17px;
        font-weight: 700;
        padding-top: 4px;
    }

    a {
        color: #0f0e17;
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }

    .inline-icon-text {
        padding-inline: 1rem;
        display: flex;
        align-items:center;
        gap: 8px;
    }

</style>