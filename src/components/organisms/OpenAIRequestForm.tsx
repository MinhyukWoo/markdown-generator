import { RequestForm } from "../molecules/requestFom";
import OpenAI from "openai";

type Props = {
  onAddMarkdown: Function;
};

export function OpenAIRequestForm(props: Props) {
  const getMarkdonwFromOpenAI = async (inputText: String) => {
    // const openai = new OpenAI({
    //   apiKey: process.env.OPEN_AI_API,
    // });

    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     {
    //       role: "user",
    //       content: "",
    //     },
    //   ],
    //   temperature: 1,
    //   max_tokens: 256,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });
    if (inputText) {
      const markdown = `###${inputText}`;
      props.onAddMarkdown(markdown);
    }
  };
  return <RequestForm onSendRequest={getMarkdonwFromOpenAI}></RequestForm>;
}
