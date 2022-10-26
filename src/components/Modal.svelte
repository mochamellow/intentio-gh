<script>
    export let message = 'default value';
    export let title = 'default value';
    export let showModal = false;
</script>

{#if showModal}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backdrop" on:click|self>
        <div class="modal">
            <div class="inline-icon-text">
                <img class="help-circle" src="./icons/help-circle.svg" alt="help icon">
                <h4>{title}</h4>
                <img class="close" src="./icons/close.svg" alt="close icon" on:click|self>
            </div>
            <p>{message}</p>
        </div>
    </div>
    
{/if}

<style lang="scss">

    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        z-index: 11;
    }

    .modal {
        padding-inline: 40px;
        padding-top: 8px;
        padding-bottom: 32px;
        border-radius: 16px;
        max-width: 800px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #DAD3C2;

        .inline-icon-text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: -8px;
            margin-bottom: -8px;

            .help-circle {
                width: 32px;
                height: 32px;
                margin-right: 8px;
                margin-top: -5px;
            }

            h4 {
                font-family: "Sofia Pro";
                font-weight: bold;
                font-size: 1.8rem;
                margin-right: auto;
                
            }
    
            .close {
                width: 32px;
                height: 32px;
                cursor: pointer;
            }
        }


        p {
            font-size: 20px;
            font-family: "Sofia Pro";
            margin-block: 0;
            font-family: "Sofia Pro";
            line-height: 2rem;
            line-break: normal;
        }
    }

</style>