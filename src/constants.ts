/* eslint-disable import/no-mutable-exports */

// if (process.env.NODE_ENV === "production") {
//   API_BASE_URL = "https://backend-api.com";
// } else {
//   const DEV_API_URL = dev["amplify-react-auth-dev"].apiUrl;
//   const DEV_API_URL_WITHOUT_TRAILING_SLASH = DEV_API_URL.slice(
//     0,
//     DEV_API_URL.length - 1
//   );
//   API_BASE_URL = DEV_API_URL_WITHOUT_TRAILING_SLASH;
//   REGION = dev["amplify-react-auth-dev"].region;
//   USER_POOL_CLIENT_ID = dev["amplify-react-auth-dev"].userPoolClientId;
//   USER_POOL_ID = dev["amplify-react-auth-dev"].userPoolId;
//   IDENTITY_POOL_ID = dev["amplify-react-auth-dev"].identityPoolId;
//   S3_BUCKET_NAME = dev["amplify-react-auth-dev"].bucketName;
// }

export const JWT_LOCALSTORAGE_KEY = "cognito_id_token";
export const IDENTITY_LOCALSTORAGE_KEY = "cognito_identity_id";

export enum ROUTE_PATHS {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  RESEND_REGISTRATION_LINK = "/auth/resend-registration-link",
  RESET_PASSWORD = "/auth/reset-password",
  REQUEST_PASSWORD_RESET = "/auth/request-password-reset",
  CONFIRM_RESET_PASSWORD = "/auth/confirm-reset-password",
  SETTINGS = "/settings",
  CONTACTS = "/contacts",
}
