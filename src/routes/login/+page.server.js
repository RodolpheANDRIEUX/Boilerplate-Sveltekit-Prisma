import {fail, redirect} from '@sveltejs/kit';
import {setAuthToken} from '$lib/utils';
import {createUser, loginUser} from "$lib/Data/user.js";

export const actions = {
    login: async ({cookies, request}) => {
        const formData = Object.fromEntries(await request.formData());
        const { username, password } = formData;

        // TODO: signaler toutes les erreurs en une seule fois

        // Validation
        const errors = {};
        if (!username) errors.username = 'username required';
        if (!password) errors.password = 'Password required';

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, username });
        }

        // if (error) {
        //     return fail(500, { error: error.message || 'Invalid username or password' });
        // }
        //
        // if (!token) {
        //     return fail(500, { error: 'Authentication failed: token not received' });
        // }

        const {error, token} = await loginUser(username, password);
        if (error) {
            return fail(400, { username, error });
        }

        setAuthToken({cookies, token});
        throw redirect(302, "/")
    },

    register:  async ({cookies, request}) => {
        const formData = Object.fromEntries(await request.formData());
        const {email, password, username, password_conf} = formData;

        if (!username) {
            return fail(400, { email, missing: {username: true }});
        }
        if (!email) {
            return fail(400, { email, missing : {email: true }});
        }
        if (!password) {
            return fail(400, { email, missing: {password: true }});
        }
        if (!password_conf) {
            return fail(400, { email, missing: {password_conf: true }});
        }
        if (password !== password_conf) {
            return fail(400, { email, error: "Passwords do not match" });
        }

        const {error, token} = await createUser(email, username, password);

        if (error) {
            console.log({error});
            return fail(500, {error});
        }

        setAuthToken({cookies, token});
        throw  redirect(302, "/");
    }
};


