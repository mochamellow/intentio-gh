<footer>

    <div class="left-footer">
        <h1 class="logo"><img src="./intentio-logo.svg" alt="intentio-logo"></h1>
        <div class="copyright">© 2022 Intentio. All Rights Reserved.</div>
    </div>
    <div class="right-footer">
        <div class="information">
            <div id="one-liner">
                <p>Made with</p>
                <img src="./icons/cafe.svg" class="cafe" alt="cafe icon">
                <p>and a hint of procrastination by <span class="rainbow">Gil</span></p>
            </div>
            <p>Have suggestions, comments, or questions? Reach out!</p>
        </div>
        &nbsp;
        <!-- TODO- Link to Your Socials -->
        <div class="socials">
            <img src="./icons/logo-linkedin.svg" alt="linkedin logo">
            <img src="./icons/logo-behance.svg" alt="behance logo">
            <img src="./icons/mail.svg" alt="mail icon">
        </div>
    </div> 
</footer>

<style lang="scss">
    footer {
        margin-inline: auto;
        padding-bottom: 40px;
        padding-top: 36px;
        max-width: 948px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        margin-top: 0;
    } 

    img {
        max-width: 147px;
    }

    .copyright {
        font-size: 0.9rem;
        font-family: 'sofia_proregular', "Satoshi", sans-serif;
        font-weight: 500;
        color: #8A826F;
        display: inline-block;
        margin-top: 8px;
    }

    .right-footer {

        p {
            font-size: 0.9rem;
            font-family: 'sofia_proregular', "Satoshi", sans-serif;
            font-weight: 500;
            margin:0;
        }

        .information {
            line-height: 1.6rem;

            #one-liner {
                display: flex;
                align-items: center;
                gap: 4px;
                justify-content: end;
            }
        }
        

        .socials {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: end;

            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
    
    
    .cafe {
        width: 20px;
        height: 20px;
    }

    

    .rainbow {
        animation: color-change 5s infinite;
        font-weight: bold;
    }

    @keyframes color-change {
        0% {color:#9A6547;}
        25% {color: #30bd6f}
        50% {color: #8C64FF;}
        75% {color: #BE4949}
        100% {color:#9A6547;}
    }

</style>