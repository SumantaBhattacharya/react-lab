const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),// MegaBlog
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), // blog
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), // article
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),  // images

};

export default conf;
// In some cases, they might be interpreted differently (e.g., as numbers, booleans, or undefined) depending on how they are used or processed in your application. Explicitly converting the values to strings ensures that they are always treated as strings, regardless of their original type. avoiding potential type-related issues.