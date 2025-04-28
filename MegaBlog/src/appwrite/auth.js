import conf from '../conf/config.js';

import { Client, Account, ID } from "appwrite";

// it is class becuase so we can define the logic inside the class and we can create multiple instances of the class if needed
export class AuthService {// Exporting the AuthService instance ensures that the same instance is reused across your application.
    // you don't need to explicitly define the data type of variables or properties inside a class.

    // Class property initialization
    client = new Client(); // client = new Client(); Works as a Class Property so you cannot directly use the line client = new Client(); inside the constructor

    account;

    // By using the constructor, you encapsulate all the initialization logic (e.g., setting up the Client and Account instances) in one place within a class. The constructor ensures that the Client and Account instances are initialized whenever the class is instantiated, without requiring manual setup elsewhere. and exporting the instance ensures this logic is executed only once.
    constructor() {// here we are passing the referrence of the client(it is defined as a class property using 'this' to get reference of the class itself) 
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client); // Initialize the Account object with the client instance
        // this.account(this.client) is Invalid, account = new Account(this.client); // Initialize account as a class property, Directly pass the client reference. in constructor we generally pass the referrecne so it wont work inside a contructor and using contructor we also cannot pass the reference of the cient directlt from the account initialized it wont get the referrence 
    }

    // destructured the object directly in the function parameter, instead of passing the arguments as a single object and using the spread operator (...)
    async createAccount({email, password, username}) {
        try{

            // Appwrite automatically handles these validations like check if user already exists: username,email or if the User with email or username already exists"

            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                username
            );// once the user is created store the user details in the db

            if (userAccount) {
                // return userAccount; 

                // if the user exists, log the user in. to do this call we need to call another methods
                return this.login({email, password}); // email: "user@example.com", password: "password123" 
                // If you call this.login(email, password) directly, it will throw an error because the login method is expecting an object, not two separate arguments. same asd the login method basically.
            }else{
                return userAccount;
            }

        }catch(error){// Appwrite already provides statusCode, message, and errors in its default error handling. If Appwrite's default error handling is sufficient for your needs, you can use it directly without wrapping it in a custom class.
            
            // console.error("Error creating account:", error.message);

            throw error; // Re-throw the error to the caller
            
        }
    }



    // https://appwrite.io/docs/products/auth/email-password#login
    async login({email, password}) {
        try{
            // await this.account.createEmailSession(email, password);
            // if the user inputs the correct email and password and it matches to previous inputted values then login
            return await this.account.createEmailPasswordSession(email, password);
        }catch(error){
            throw error;
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/account
    async getCurrentUser() {
        try{
            return await this.account.get();
        }catch(error){
            
            console.log("Appwrite service :: getCurrentUser :: error:", error.message);
            
        }
        
        // If there is no active session (e.g., the user is not logged in or the session has expired), Appwrite will throw an error.
        return null;
        
    }

    async logout() {
        try{
            // i. deleteSession logout the user from that browser then it kaes 'current' as as parameter ii. deleteSessions logout the user from every browser the used has logged in 
            await this.account.deleteSessions(); // 'current' is the default session ID for the current user session
        }catch(error){
            console.log("Appwrite service :: logout :: error:", error.message);
            // throw error;
        }
    }

    /*
    // https://appwrite.io/docs/references/cloud/client-web/account#updateEmail
    async updateEmail({newEmail, password}){
        try{
            return await this.account.updateEmail(newEmail, password);
        }catch(error){
            console.log("Appwrite service :: updateEmail :: error:", error.message);
            throw error;
        }
    }
    */

    // https://appwrite.io/docs/references/cloud/client-web/account#updateName
    async updateAccountDeatails({username, newEmail, password}){
        try{

            let result = {};

            if(username){
                const newUsername = await this.account.updateName(username);
                result.username = newUsername;
            }

            if(newEmail && password){
                result.email = await this.account.updateEmail(newEmail, password);
            }

            return result;

        }catch(error){
            console.log("Appwrite service :: updateAccountDeatails :: error:", error.message);
            // throw error;
        }
    }

    /*async isLoggedIn() {
        try{
            const user = await this.getCurrentUser();
            return !!user; // Convert the user object to a boolean value
        }catch(error){
            console.log("Appwrite service :: isLoggedIn :: error:", error.message);
            throw error;
        }
    }*/


}; // If you exported the class itself, You would need to instantiate it(create instance of the class) manually every time you use it it would have lead to adding unnecessary boilerplate code and This could lead to inconsistent behavior, especially if the service is managing shared resources like authentication state or API clients..

// creating an instance of AuthService and exporting it as an object
const authService = new AuthService();

export default authService;

// https://appwrite.io/docs/products/auth/quick-start".