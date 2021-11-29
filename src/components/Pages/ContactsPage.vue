<template>
  <section class="contacts-page">
    <div class="contacts-page__container">
      <PageNavigation v-bind:disablePage="'contacts'"/>
      <div class="contacts-card">
        <div class="contacts-card__text">
          <h3 class="contacts-card__title">
            Контакти бухгалтерського відділу
          </h3>
          <ul class="contacts-card__description">
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
      <div class="contacts-card">
        <div class="contacts-card__text">
          <h3 class="contacts-card__title">
            Контакти відділу по роботі з клієнтами
          </h3>
          <ul class="contacts-card__description">
            <li>
              <span style="text-decoration: underline">
                Відділ по роботі з клієнтами:
              </span>
              <a
                href="tel: +30670676767"
                class="contact-link"
              >
                +30670676767
              </a>
              <a
                href="mailto: clients@gmail.com"
                class="contact-link"
                target="_blank"
              >
                clients@gmail.com
              </a>
            </li>
            <li>
              <span style="text-decoration: underline">
                Заступник відділу:
              </span>
              Петраков Петро Петрович
              <a
                href="tel: +30660666666"
                class="contact-link"  
              >
                +30660666666
              </a>
              <a
                href="mailto: clients-manager@gmail.com"
                class="contact-link"
                target="_blank"
              >
                clients-manager@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="contacts-card">
        <div class="contacts-card__text">
          <h3 class="contacts-card__title">
            Контакти дирекції
          </h3>
          <ul class="contacts-card__description">
            <li>
              <span style="text-decoration: underline">
                Дирекція:
              </span>
              <a
                href="tel: +30440444444"
                class="contact-link"
              >
                +30440444444
              </a>
              <a
                href="mailto: administration@gmail.com"
                class="contact-link"
                target="_blank"
              >
                administration@gmail.com
              </a>
            </li>
            <li>
              <span style="text-decoration: underline">
                Секретар відділу:
              </span>
              Сергієнко Сергій Сергійович
              <a
                href="tel: +300450454545"
                class="contact-link"  
              >
                +300450454545
              </a>
              <a
                href="mailto: administration-manager@gmail.com"
                class="contact-link"
                target="_blank"
              >
                administration-manager@gmail.com
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
  @import "../../assets/styles/_variables.scss";
  @import "../../assets/styles/_mixins.scss";

  $border-radius: 40px;

  .contacts-page {
    @include static-page;
  }

  .contacts-card {
    @include typical-card;
  }
</style>
