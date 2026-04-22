/**
 * Configuration for the automation framework
 */
export const config = {
  baseUrl: 'https://testcms.reco-claims.ca',
  loginUrl: 'https://testcms.reco-claims.ca/Login',
  rolesUrl: 'https://testcms.reco-claims.ca/application-roles',
  credentials: {
    username: 'info+programmanager@xlgclaims.com',
    password: 'Test1234!',
  },
  timeouts: {
    short: 5000,
    medium: 10000,
    long: 20000,
    extraLong: 30000,
    veryLong: 60000,
  },
};
