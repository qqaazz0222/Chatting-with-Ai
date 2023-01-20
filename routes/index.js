const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const apiKey = require("../keys/api_key.json");
// import { getCompletion } from "gpt3";
const router = express.Router();

const configuration = new Configuration({
    apikey: apiKey.key,
});
// apiKey: process.env.OPENAI_API_KEY,
const openai = new OpenAIApi(configuration);

/* GET home page. */
router.get("/", async (req, res) => {
    res.render("index", { title: "Express" });
});

router.get("/test", async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "hello",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    // console.log();
    res.render("index", { title: "Express" });
});

module.exports = router;
