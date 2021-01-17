<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404" class="error-message">404 - Страница не найдена</h1>
    <h1 v-else class="error-message">Ошибка - {{ error.statusCode }}. Попробуте обновить страницу или зайдите позже!</h1>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: `Fit and Health - ${this.error.statusCode} ошибка`,
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { // МИКРОРАЗМЕТКА
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://website.com",
            "name": "Website",
            "description": "This website is awesome.",
            "publisher": {
              "@type": "Organization",
              "name": "Website",
              "alternateName": "SiteWeb",
              "logo": {
                "@type": "ImageObject",
                "url": "https://someimage.com/image"
              }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  },
  layout: 'default',
  props: ['error']
}
</script>

<style lang="scss">

  .error-page {
    .error-message {
      padding: 180px 20px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
  }

</style>
