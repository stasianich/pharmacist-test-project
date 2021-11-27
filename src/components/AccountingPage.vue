<template>
  <section class="accounting-page">
    <div class="accounting-page__container">
      <PageNavigation v-bind:disablePage="'accounting'"/>
      <div class="accounting-card">
        <div class="accounting-card__text">
          <h3 class="accounting-card__title">
            Бухгалтерський відділ
          </h3>
          <article
            class="accounting-card__description"
          >
            Бухгалтерські працівники нараховують заробітну
            працю всім працівникам компанії, ведуть облік та
            списання матеріальних цінностей, розробляють калькуляцію
            на додаткові платні послуги. Також бухгалтерія розробляє калькуляцію
            оренди приміщень та майна компанії, здійснює інвентаризацію.
            Бухгалтери готують фінансово-господарську звітність, яку
            подають у департамент охорони здоровʼя, податкову,
            казначейство та інші органи. Бухгалтерія розробляє проект
            кошторису компанії, інші документи.
          </article>
        </div>
      </div>
      <div class="accounting-card">
        <div class="accounting-card__text">
          <h3 class="accounting-card__title">
            Контакти бухгалтерського відділу
          </h3>
          <ul class="accounting-card__description">
            <li>
              <span style="text-decoration: underline">
                Бухгалтерський відділ:
              </span>
              <a
                href="tel: +30960696969"
                class="contact-link"
              >
                +30960696969
              </a>
              <a
                href="mailto: accounting@gmail.com"
                class="contact-link"
                target="_blank"
              >
                accounting@gmail.com
              </a>
            </li>
            <li>
              <span style="text-decoration: underline">
                Заступник бухгалтерського відділу:
              </span>
              Іванов Іван Іванович
              <a
                href="tel: +30690969696"
                class="contact-link"  
              >
                +30690969696
              </a>
              <a
                href="mailto: accounting-manager@gmail.com"
                class="contact-link"
                target="_blank"
              >
                accounting-manager@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue';

export default {
  components: {
    PageNavigation,
  }
}
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";
  @import "../assets/styles/_mixins.scss";

  $border-radius: 40px;

  .accounting-page {
    @include static-page;
  }

  .accounting-card {
    @include typical-card;
  }
</style>
