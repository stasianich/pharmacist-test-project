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

  $border-radius: 40px;

  .accounting-page {
    width: 100vw;
    min-height: 100vh;
    padding: 40px;
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.35) 16.62%, rgba(94, 110, 194, 0.35) 83.38%),
                url(../assets/images/GameStartPage/bg.jpg) no-repeat;
    background-size: cover;

    &__container {
      max-width: 1040px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 40px;
      margin: 0 auto;

      @media (max-width: $min-width-for-tablets) {
        gap: 30px;
      }
    }
  }

  .accounting-card {
    position: relative;
    min-width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: $border-radius;
    transition: transform 400ms;

    &__text {
      backdrop-filter: blur(5px);
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
      padding: 26px;

      @media (max-width: $max-width-for-mobiles) {
        padding: 18px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-width: $max-width-for-tablets) {
        padding: 22px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-height: $max-height-for-mobiles) {
        padding: 20px;
      }
    }

    &__title {
      font-size: 32px;
      font-weight: bold;
      line-height: 39px;
      color: #9557a1;
      text-align: center;
      margin-bottom: 10px;

      @media (max-width: $max-width-for-tablets) {
        font-size: 28px;
        line-height: 38px;
      }

      @media (max-height: $max-height-for-mobiles) {
        font-size: 26px;
        line-height: 38px;
        margin-bottom: 4px;
      }
    }

    &__description {
      font-size: 26px;
      line-height: 30px;

      @media (max-width: $max-width-for-tablets) {
        font-size: 20px;
        line-height: 26px;
      }

      @media (max-height: $max-height-for-mobiles) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    .contact-link:hover {
      text-decoration: underline blue;
    }
  }
</style>
