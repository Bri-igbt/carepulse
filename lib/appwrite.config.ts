import * as sdk from "node-appwrite";

export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('68937a7c00124976035f') // Your project ID
    .setKey('standard_5f985b6c8e27a8b1a0afac6fc68d3e3c3531e1e900c3f79467a00bec9b5e01a43161f47a2436c3708c83d07dbcd2e77a3e8f79c35cedb02b1accf567d74d7115efefd76407d0a3939a700f0288b047ba77245733849655e964d257efcf2902fbc1422c7849a01ef5acd26801e7f258415e6a08c3cc604fbfe11fc9b41543355e');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);