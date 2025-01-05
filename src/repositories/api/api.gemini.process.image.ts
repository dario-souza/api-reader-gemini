import { GoogleGenerativeAI } from '@google/generative-ai'
import { MeterResponseIA, MeterType } from "../../types/meter.type";
import { generateTemporarylink } from '../../utils/generate.temporary.link';


export const apiGeminiProcessImage = async (payload: MeterType) => {
  const { image } = payload
  const apiKey = process.env.GEMINI_API_KEY as string
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = 'Preciso que faça a medição ou leitura dos dados desse painel referente a quantidade de gás ou água usada tudo depende de qual tipo de painel contem na imagem. Me traga o resultado em com o texto em português Brasil'

  const result = await model.generateContent([
    {
      inlineData: {
        data: image,
        mimeType: "image/jpeg",
      },
    },
    prompt,
  ]);
  const match = result.response.text().match(/\d+/)
  const meter = match ? +match[0] : 0
  const id = String(result.response?.candidates?.[0].avgLogprobs!)
  const uri = await generateTemporarylink(image, apiKey)

  const responseGeminiApi: MeterResponseIA = {
    image_url: uri,
    measure_uuid: id,
    measure_value: meter
  }
  return responseGeminiApi
}