import { GoogleGenerativeAI } from '@google/generative-ai'
import { MeterType } from "../../types/meter.type";


export const apiGeminiProcessImage = async (payload: MeterType) => {
  const { image } = payload
  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

  const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

  const imageResp = await fetch(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/2560px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg'
  )
    .then((response) => response.arrayBuffer());

  const result = await model.generateContent([
    {
      inlineData: {
        data: Buffer.from(imageResp).toString("base64"),
        mimeType: "image/jpeg",
      },
    },
    'descreva essa imagem',
  ]);
  console.log(result.response.text());
  return result.response.text()

}