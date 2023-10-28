import OpenAI from "openai";

import * as dotenv from "dotenv";
dotenv.config({ path: "/.env" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.BASEURL,
});

async function main(prompt) {
  console.log("Prompt:", prompt);
  console.log("Model:", process.env.model_name);
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "hackathon-chat",
    });
    console.log("Response:", chatCompletion);
    console.log("Choices:", chatCompletion?.choices[0].message);
    console.log(chatCompletion?.choices[0]?.message.content);
    return chatCompletion?.choices[0]?.message.content;
  } catch (error) {
    console.error("Error getting completion from OpenAI:", error);
    throw error;
  }
}

main("Chat like Obama");
