import { window } from "pinguage";

const api = async () => await window ("https://api.vk.com", async response => {
    console.log (response) // response
})

api ()
