<footer>

    <div class="left-footer">
        <h1><img src="./intentio-logo.svg" alt="intentio-logo"></h1>
        <div class="copyright">© 2022 Intentio. All Rights Reserved.</div>
    </div>
    <div class="right-footer">
        <div class="information">
            <div id="one-liner">
                <p>Made with</p>
                <div class="cafe"></div>
                <p>and a hint of procrastination by <span class="rainbow">Gil</span></p>
            </div>
            <p>Have suggestions, comments, or questions? Reach out!</p>
        </div>
        &nbsp;
        <!-- TODO- Link to Your Socials -->
        <div class="socials">
            <a href="#"><img src="./icons/logo-linkedin.svg" alt="linkedin logo"></a>
            <a href="#"><img src="./icons/logo-behance.svg" alt="behance logo"></a>
            <a href="#"><img src="./icons/mail.svg" alt="mail icon"></a>
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

    h1 {
        margin-top: 0;
    } 

    img {
        max-width: 147px;
    }

    .copyright {
        font-size: 0.9rem;
        font-family: 'Sofia Pro';
        font-weight: 100;
        color: #6A6A6A;
        display: inline-block;
    }

    .right-footer {

        p {
        font-size: 0.9rem;
        font-family: 'Sofia Pro';
        margin:0;
        }
    }
    
    #one-liner {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: end;
    }
    
    .cafe {
        background-image: url(./icons/cafe.svg);
        width: 20px;
        height: 20px;
        background-size: cover;
    }

    .information {
        line-height: 1.6rem;
    }

    .socials {
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: end;
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