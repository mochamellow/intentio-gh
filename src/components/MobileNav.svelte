<script>
    export let showNav = false;
</script>

{#if showNav}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backdrop" on:click|self>
        <div class="modal">
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
    
{/if}

<style lang="scss">

    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9;
    }

    @keyframes slidedown {
        0% {
            transform: translate(0, -100%);
        }

        50% {
            transform: translate(0, 5%);
        }

        80% {
            transform: translate(0, -1%);
        }

        100% {
            transform: translate(0, 0%);
        }
    }

    .modal {
        padding-inline: 40px;
        padding-top: 7.6rem;
        padding-bottom: 1.5rem;
        width: 100%;
        position: absolute;
        background: #DAD3C2;
        text-align: center;
        justify-content: center;
        border-bottom: 2px solid #0f0e17;
        animation: slidedown 0.5s normal;

        img {
            max-width: 20px;
        }

        a {
            scroll-behavior: smooth;
            text-decoration: none;
            color: #0f0e17;
        }

        
        .inline-icon-text {
            margin-inline: auto;
            display: flex;
            align-items:center;
            gap: 8px;

            h4 {
                // Sofia Pro Bold
                font-family: 'SofiaProSemiBold', "Satoshi", sans-serif;
                font-size: 1.2rem;
                font-weight: 700;
                padding-top: 4px;
                margin-block: 1rem;
            }
        }
    }

    @media screen and (max-width: 820px) {

        .modal {
            padding-top: 6.5rem;
            padding-bottom: 1.6rem;
        }
    }

    @media screen and (max-width: 570px) {

        .modal {
            padding-top: 6rem;
            padding-bottom: 1.2rem;

            .inline-icon-text {
    
                h4 {
                    font-size: 1rem;
                }
            }
        }

    }

</style>