<script>
    import github from '$lib/img/icons/github.svg';
    import linkedin from '$lib/img/icons/linkedin.svg';

</script>


<footer>
    <div id="flex-div">
        <p>© 2024 - Rodolphe ANDRIEUX</p>
        <div id="flex-icons">
            <a href="https://www.linkedin.com/in/rodolphe-andrieux" target="_blank">
                <img src={linkedin} alt="Logo LinkedIn" width="40" height="40">
            </a>
            <a href="https://github.com/RodolpheANDRIEUX" target="_blank">
                <img src={github} alt="Logo GitHub" width="40" height="40">
            </a>
        </div>
    </div>
</footer>


<style>
    footer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #2e2e2e;
        color: var(--color-bg-0);
        padding: 1rem;
    }

    #flex-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer p {
        margin-bottom: 10px;
        padding: 0 1rem;
    }

    footer #flex-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
    }

    a {
        transition: transform .3s;
    }

    a:hover {
        transform: scale(1.2);
    }
</style>