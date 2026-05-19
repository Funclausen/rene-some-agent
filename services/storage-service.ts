import { supabase } from '../lib/supabase';

export interface UploadAssetInput {
  tenantId: string;
  file: File;
  bucket?: string;
}

export interface UploadedAsset {
  id: string;
  path: string;
  publicUrl: string;
  uploadedAt: string;
}

export async function uploadAsset(
  input: UploadAssetInput
): Promise<UploadedAsset> {
  const bucket = input.bucket ?? 'assets';

  const safeName = input.file.name.replace(/[^a-zA-Z0-9.\-_]/g, '-');

  const path = `${input.tenantId}/${crypto.randomUUID()}-${safeName}`;

  const uploadResult = await supabase.storage
    .from(bucket)
    .upload(path, input.file, {
      upsert: false,
      contentType: input.file.type
    });

  if (uploadResult.error) {
    throw new Error(uploadResult.error.message);
  }

  const publicUrl = supabase.storage
    .from(bucket)
    .getPublicUrl(path).data.publicUrl;

  return {
    id: crypto.randomUUID(),
    path,
    publicUrl,
    uploadedAt: new Date().toISOString()
  };
}
