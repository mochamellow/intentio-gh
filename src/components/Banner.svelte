<svelte:head>
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=bespoke-slab@700&display=swap" rel="stylesheet">
</svelte:head>

<section>

    <div class="vertical-center">
        <div class="center">
            <img class="mark" src="./intentio-mark-white.svg" alt="intentio white logo">
            <h1 id="title">It's Time to Be Intentional</h1>
            <button><img class="logo-chrome" src="./icons/logo-chrome.svg" alt="chrome logo" >Add to Chrome</button>
        </div>
    </div>

    <img class="lines-1" src="./img/lines-1.svg" alt="lines illustration background">
    <img class="lines-2" src="./img/lines-2.svg" alt="lines illustration background">

</section>

<style lang="scss">

    @media screen and (max-width: 570px) {
        #title {
            font-size: 1.5rem;
        }
        
    }

    section {
        position: relative;
        height: 344px;
        background-color: #0F0E17;

        .lines-1 {
            position: absolute;
            // width: 20%;
            max-width: 18rem;
            width: 30vw;
            right: 13%;
        }

        .lines-2 {
            position: absolute;
            max-width: 18rem;
            width: 35vw;
            left: 12%;
            bottom: 0;
        }
    }

    .vertical-center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .center {
        text-align: center;
        width: 80vw;
        max-width: 40rem;

        .mark {
            width: 4.4rem;
            height: 4rem;
        }

        h1 {
            // Sofia Pro Bold
            font-family: "Sofia Pro", "Satoshi", sans-serif;
            font-weight: 900;
            font-size: 2rem;
            color: #F9F4EF;
        }

        button {
            font-family: "Bespoke Slab", sans-serif;
            font-weight: bold;
            padding-top: 1rem;
            padding-bottom: 0.8rem;
            padding-left: 1.25rem;
            padding-right: 1.4rem;
            margin-top: 0.4rem;
            background-color: #F9F4EF;
            border: 0px;
            border-radius: 0.75rem;
            cursor: pointer;
            color: #0F0E17;
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

</style>