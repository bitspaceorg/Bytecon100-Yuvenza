<script lang="ts">
    import { goto } from "$app/navigation";
    import { CERTIFICATE_ENDPOINT, HASH_ENDPOINT } from "$lib/constants";
    import axios from "axios";
    export let data: { data: Array<String> };
    const emo: Array<String> = ["🤟", "💪", "🌟", "⬆️", "👈", "🎉", "🛐"];
</script>

<ul class="text-[20px] w-[80%] mt-4">
    {#each data.data as name, idx}
        <li class="m-2">
            {idx + 1}. {name} - (
            <span
                aria-hidden="true"
                class="text-blue-600 underline cursor-pointer"
                on:click={async () => {
                    const hashData = {
                        name,
                        event: "Byte Con 100 : Introduction to Open Source",
                        date: "11/08/2023",
                        venue: "Chennai Institute of Technology",
                        partneredWith:
                            "https://cdn.discordapp.com/attachments/1106935324556406866/1139027979666722898/youth_final-01.png",
                    };
                    const { data } = await axios.post(HASH_ENDPOINT, hashData);
                    if (data.message === "SUCESS") {
                        goto(`${CERTIFICATE_ENDPOINT}?code=${data.token}`);
                    }
                }}
            >
                COLLECT YOUR CERTIFICATE {emo[
                    Math.floor(Math.random() * emo.length)
                ]}
            </span>
            )
        </li>
    {/each}
</ul>
