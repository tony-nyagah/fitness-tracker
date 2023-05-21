// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appwriteProjectId: process.env.NUXT_APPWRITE_PROJECT_ID,
      appwriteEndpoint: process.env.NUXT_APPWRITE_ENDPOINT,
    },
  },
});
