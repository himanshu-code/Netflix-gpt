import OpenAI from "openai";
import { GIT_GPT_KEY } from "./constants";

export const client = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: GIT_GPT_KEY,
  dangerouslyAllowBrowser: true,
});
// export const client = new OpenAI({
//   apiKey: OPENAI_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true,
// });
