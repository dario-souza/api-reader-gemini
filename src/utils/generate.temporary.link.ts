import { GoogleAIFileManager } from "@google/generative-ai/server";
import { join } from "path";
import { tmpdir } from "os";
import { writeFileSync } from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateTemporarylink = async (img: Base64URLString, apiKey: string) => {
  const fileManager = new GoogleAIFileManager(apiKey);

  const tempFilePath = join(tmpdir(), 'temp_image.jpg')
  const imageBuffer = Buffer.from(img, 'base64')
  writeFileSync(tempFilePath, imageBuffer)
  console.log(tempFilePath)
  const uploadResult = await fileManager.uploadFile(
    tempFilePath,
    {
      mimeType: "image/jpeg",
      displayName: "upload image temporary",
    },
  );

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([
    "Descreva essa imagem",
    {
      fileData: {
        fileUri: uploadResult.file.uri,
        mimeType: uploadResult.file.mimeType,
      },
    },
  ]);
  console.log('resultado URI: ', result.response.text(), uploadResult.file.uri);
  return uploadResult.file.uri
}