import { GoogleGenerativeAI } from '@google/generative-ai'
import { MeterType } from "../../types/meter.type";


export const apiGeminiProcessImage = async (payload: MeterType) => {
  const { image } = payload
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent([
    {
      inlineData: {
        data: image,
        mimeType: "image/jpeg",
      },
    },
    'Preciso que faça a medição ou leitura dos dados desse painel referente a quantidade de gás ou água usada tudo depende de qual tipo de painel contem na imagem. Me traga o resultado em com o texto em português Brasil',
  ]);
  return result.response.text()

}