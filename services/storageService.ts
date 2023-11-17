import { Storage } from '@google-cloud/storage';

const storage = new Storage();

export async function getGeoTiffFromBucket(bucketName: string, fileName: string) {
  const file = storage.bucket(bucketName).file(fileName);
  const [exists] = await file.exists();

  if (!exists) {
    throw new Error(`File ${fileName} does not exist in bucket ${bucketName}`);
  }

  const [buffer] = await file.download();
  return buffer;
}

export async function getShapefileFromBucket(bucketName: string, fileName: string) {
  const file = storage.bucket(bucketName).file(fileName);
  const [exists] = await file.exists();

  if (!exists) {
    throw new Error(`File ${fileName} does not exist in bucket ${bucketName}`);
  }

  const [buffer] = await file.download();
  return buffer;
}