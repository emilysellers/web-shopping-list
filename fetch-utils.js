const SUPABASE_URL = 'https://taouldlovpxzbgbxeshh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhb3VsZGxvdnB4emJnYnhlc2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyOTQ4OTUsImV4cCI6MTk3OTg3MDg5NX0.DcIS2QzuJnAiXH5DuA_OMfPoeOZ4--TU9H5lqdCZKUQ';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
