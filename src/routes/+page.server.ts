import { FETCH_URL } from "$lib/constants";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(FETCH_URL)
    const data = await res.json();
    return { data: data.payload.blob.rawLines };
}
