import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { vibe, description } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: `Generate 10 ${vibe} podcast names, clearly labeled "1." and "2.". ${
          vibe === 'Funny'
            ? "Make sure there is a joke in there and it's a little ridiculous."
            : null
        }
          Make sure each generated name is less than 100 characters, has short sentences or questions to make it sound interesting, and base them on this context: ${description}${
          description.slice(-1) === '.' ? '' : '.'
        }`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
