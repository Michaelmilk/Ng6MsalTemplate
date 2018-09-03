import { LogLevel } from "../../node_modules/msal";
import { LoggerLevel } from "../app/core/logger";

export const environmentEculid = {
    production: false,
    serverBaseUrl: "",
    msGraphBaseUrl: "https://graph.microsoft.com/v1.0/",
    logLevel: LoggerLevel.Trace,
    msalConfig: {
        clientID: '986a27b6-e88e-4471-a0ba-dcd5e33477c5',
        graphScopes: ["openid", "profile", "Mail.Send", "User.Read", "User.ReadWrite", "User.ReadBasic.All", "User.Read.All", "User.ReadWrite.All", "Directory.Read.All", "Directory.ReadWrite.All", "Directory.AccessAsUser.All"],
        signUpSignInPolicy: '',
        tenant: 'M365x342201.onmicrosoft.com',
        authority: "https://login.microsoftonline.com/common/",
        validateAuthority: true,
        redirectUri: "http://localhost:4200/",
        cacheLocation: "localStorage",
        postLogoutRedirectUri: "http://localhost:4200/",
        navigateToLoginRequestUrl: true,
        popUp: true,
        consentScopes: ["user.read", "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"],
        unprotectedResources: ["https://www.microsoft.com/en-us/"],
        //protectedResourceMap: protectedResourceMap,
        logger: loggerCallback,
        correlationId: '1234',
        level: LogLevel.Info,
        piiLoggingEnabled: true
    }
};

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log("client logging" + message);
}


export const protectedResourceMap: Map<string, Array<string>> = new Map<string, Array<string>>();
protectedResourceMap.set("https://buildtodoservice.azurewebsites.net/api/todolist", ["api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"]);
protectedResourceMap.set("https://graph.microsoft.com/v1.0/me", ["user.read"]);