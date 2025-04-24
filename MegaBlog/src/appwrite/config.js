import conf from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();

    databases;
    storage;

    // https://appwrite.io/docs/products/databases/quick-start
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);

    }
    
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // slug is unique for each post, so we can use it as the DOCUMENT_ID
                {// CONTENT
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
                
            )
        } catch (error) {
            console.log("Error creating post:", error.message);
            throw error;
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
    // in featuredImage, we are passing the fileId of the image that we uploaded to the storage bucket.
    async updatePost(slug, {title, content, featuredImage, status}){// slug is the unique identifier for the post
        // userId is not needed here, because we are updating the post created by the current user, userId is already stored in the post document so we dont update it 
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
                
            )
        }catch(error){
            console.log("Error updating post:", error.message);
            throw error;
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#deleteDocument
    async deletePost(slug){
        try{// not returning anything means the caller of the deletePost method will not receive any confirmation or response about the deletion.
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true; // return true to indicate that the post was deleted successfully
        }catch(error){
            console.log("Error deleting post:", error.message);
            return false; // return false to indicate that the post was not deleted successfully
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#getDocument
    // to get a single document by its unique identifier (slug)

    async getPost(slug){// we are passing slug because i will help to get unique identifier for the post
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("Error getting post:", error.message);
            // throw error;
            return false;
        }
    }

    // https://appwrite.io/docs/products/databases/documents#list-documents
    // https://appwrite.io/docs/products/databases/queries
    // https://appwrite.io/docs/products/databases/queries#equal
    // https://appwrite.io/docs/products/databases/queries#complex-queries
    // https://appwrite.io/docs/products/databases/pagination

    // article-Indexes
    async getPosts(queries = [Query.equal("status", "active" )] ){// {limit = 10, offset = 0, orderType = Query.orderType.ASC
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries // [Query.equal("status", "active" )] 

            )
        }catch(error){
            console.log("Error getting posts:", error.message);
            return false;
        }
    }

    // file upload services
    // https://appwrite.io/docs/references/cloud/client-web/storage#updateFile
    // https://appwrite.io/docs/references/cloud/client-web/storage#createFile

    async uploadFile(file){
        try{
            const result = await storage.createFile(
                conf.appwriteBucketId, // bucket id
                ID.unique(), // unique file id
                file, // file to upload
                [conf.appwriteBucketId] // permission to access the file
            );
            return result;
        }catch(error){
            console.log("Error uploading file:", error.message);
            // throw error;
            return false;
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/storage#deleteFile
    async Delete_file(fileId){
        try {
            await storage.deleteFile(
                conf.appwriteBucketId, // bucket id
                fileId // file id to delete
            );
            return true;
        } catch (error) {
            console.log("Error deleting file:", error.message);
            // throw error;
            return false;
            
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/storage#getFilePreview
    getFilePreview(fileId){
        try{
            return this.storage.getFilePreview(
                conf.appwriteBucketId, // bucket id
                fileId, // file id to get the preview
            )
        }catch(error){
            console.log("Error getting file preview:", error.message);
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/storage#getFileDownload
    Get_file_for_download(fileId){
        try{
            storage.getFileDownload(
                conf.appwriteBucketId, // bucket id
                fileId, // file id to get the download link
            );
            return true;
        }catch(error){
            console.log("Error getting file for download:", error.message);
            return false;
        }
    }

};

const service = new Service();
export default service;

// export default service = new AppwriteService(); is invalid syntax in JavaScript.