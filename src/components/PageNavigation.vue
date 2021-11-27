<template>
  <nav class="page-nav">
    <router-link
      to="/"
      class="page-nav__home"
    >
      Головна сторінка
    </router-link>
    <router-link
      v-if="disablePage !== 'accounting'"
      to="/accounting-page"
      class="page-nav__home"
    >
      Бухгалтерія
    </router-link>
    <router-link
      v-if="disablePage !== 'news'"
      to="/news-page"
      class="page-nav__home"
    >
      Новини
    </router-link>
    <router-link
      v-if="disablePage !== 'training'"
      to="/training-page"
      class="page-nav__home"
    >
      Тренінги
    </router-link>
    <router-link
      v-if="disablePage !== 'contacts'"
      to="/contacts-page"
      class="page-nav__home"
    >
      Контакти
    </router-link>
  </nav>
</template>

<script>
export default({
  props: [
    'disablePage',
  ]
})
</script>


<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .page-nav {
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 32px;

    @media (max-width: $max-width-for-tablets) {
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
    }

    &__home {
      text-align: center;
      background-color: rgb(243, 177, 174);
      padding: 5px 15px;
      border-radius: 20px;

      &:hover {
        box-shadow: 0 0 25px rgb(243, 177, 174);
      }
    }
  }
</style>
