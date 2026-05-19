export interface UploadAssetInput {
  filename: string;
  mimeType: string;
  bucket: string;
}

export interface UploadedAsset {
  id: string;
  path: string;
  uploadedAt: string;
}

export async function createAssetRecord(
  input: UploadAssetInput
): Promise<UploadedAsset> {
  console.log('Preparing asset upload', input);

  return {
    id: crypto.randomUUID(),
    path: `${input.bucket}/${input.filename}`,
    uploadedAt: new Date().toISOString()
  };
}
