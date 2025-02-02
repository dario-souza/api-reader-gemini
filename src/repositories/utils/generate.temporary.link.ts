import { GoogleAIFileManager } from "@google/generative-ai/server";
import { join } from "path";
import { writeFileSync } from "fs";

export const generateTemporarylink = async (img: Base64URLString, apiKey: string) => {
  const fileManager = new GoogleAIFileManager(apiKey);

  const tempFilePath = join(__dirname, '../../../media', 'temp_image.jpg')
  const imageBuffer = Buffer.from(img, 'base64')
  writeFileSync(tempFilePath, imageBuffer)

  const uploadResult = await fileManager.uploadFile(
    tempFilePath,
    {
      mimeType: "image/jpeg",
      displayName: "upload image temporary",
    },
  );
  return uploadResult.file
}