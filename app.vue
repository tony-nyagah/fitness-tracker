<script setup lang="ts">
  import { Client } from "appwrite";

  const client = new Client();

  const config = useRuntimeConfig();

  client
    .setEndpoint(config.public.appwriteEndpoint)
    .setProject(config.public.appwriteProjectId);
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
