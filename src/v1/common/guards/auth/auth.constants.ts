const { COGNITO_CLIENT_ID, COGNITO_REGION, COGNITO_USER_POOL_ID } = process.env;

export const AUTH_CLIENT_ID = COGNITO_CLIENT_ID;

export const AUTH_AUTHORITY = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
