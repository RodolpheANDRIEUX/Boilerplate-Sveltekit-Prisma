<script>
    export let form;
    import { enhance } from '$app/forms';
    import { fly } from "svelte/transition";
    import {slide} from "svelte/transition";
    import {cubicOut, quintOut} from "svelte/easing";
</script>

<form class="form-login" method="POST" action="?/register" use:enhance
      in:fly={{ delay: 300, x: 200, duration: 300, easing: cubicOut }}
      out:fly={{ duration: 300, easing: cubicOut }}>

    {#if form?.error }<p class="error" in:slide={{ duration: 800, easing: quintOut }}>
        {form.error}
    </p>{/if}

        {#if form?.missing && form?.missing.username}<p class="error" transition:slide={{ duration: 800, easing: quintOut }}>The Username field is required</p>{/if}
        <input name="username" type="text" placeholder="Username" value={form?.first_name ?? ''}
               style="border-bottom: {(form?.missing && form?.missing.username) ? '#ff0000' : 'var(--color-theme-1)'} 2px solid;" autofocus>

        {#if form?.missing && form?.missing.email}<p class="error" transition:slide={{ duration: 800, easing: quintOut }}>The email field is required</p>{/if}
        <input name="email" type="email" placeholder="Email" value={form?.email ?? ''}
               style="border-bottom: {(form?.missing && form?.missing.email) ? '#ff0000' : 'var(--color-theme-1)'} 2px solid;">

        {#if form?.missing && form?.missing.password}<p class="error" transition:slide={{ duration: 800, easing: quintOut }}>You forgot the password</p>{/if}
        <input type="password" name="password" placeholder="Password"
               style="border-bottom: {(form?.missing && form?.missing.password) ? '#ff0000' : 'var(--color-theme-1)'} 2px solid;">

        {#if form?.missing && form?.missing.password_conf}<p class="error" transition:slide={{ duration: 800, easing: quintOut }}>
            You forgot to confirm the password
        </p>{/if}
        <input type="password" name="password_conf" placeholder="Password"
               style="border-bottom: {(form?.missing && form?.missing.password) ? '#ff0000' : 'var(--color-theme-1)'} 2px solid;">

        <button>Register</button>
</form>

<style>
    .error {
        color: red;
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
    }

    select {
        background-color: var(--color-bg-0);
        color: var(--color-text);
        border: none;
        border-bottom: var(--color-theme-1) 2px solid;
        width: 20rem;
        padding: .65rem .65rem .65rem 3rem;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        border-radius: 0;
    }

    form {
        width: min(30rem, 80vw);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5rem auto;
        gap: 2rem;
        transition: .5s;
    }

    input {
        background-color: var(--color-bg-0);
        color: var(--color-text);
        border: none;
        border-bottom: var(--color-theme-1) 2px solid;
        width: 100%;
        padding: .5rem 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        transition: .5s;
    }

    button {
        background-color: var(--color-theme-1);
        color: var(--color-bg-0);
        margin-left: .5rem;
        padding: .9rem;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        transition: .2s;
    }

    button:hover {
        opacity: .6;
    }

    button:active {
        transform: translate(0, 3px);
    }
</style>