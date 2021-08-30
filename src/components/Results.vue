<template>
  <div class="results-page">
    <section class="left-section">
      <router-link to="/" class="go-to-main-page">
      </router-link>
      <div class="results">
        <section class="score-board">
          <div class="score-board__pill pill">
            <span class="pill__score">
              {{ getPercentage(this.pills.firstPill / this.totalAmount) }}
            </span>
            <span class="pill__title">
              Препарат 1
            </span>
          </div>
          <div class="score-board__pill pill">
            <span class="pill__score">
              {{ getPercentage(this.pills.secondPill / this.totalAmount) }}
            </span>
            <span class="pill__title">
              Препарат 2
            </span>
          </div>
          <div class="score-board__pill pill">
            <span class="pill__score">
              {{ getPercentage(this.pills.thirdPill / this.totalAmount) }}
            </span>
            <span class="pill__title">
              Препарат 3
            </span>
          </div>
        </section>

        <div class="line"></div>

        <article class="common-info">
          <h2 class="common-info__signature-title">
            Ваш результат:
          </h2>
          <h1 class="common-info__result-title">
            <strong>«Что я здесь делаю?»</strong>
          </h1>
          <p class="common-info__description">
            Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов. 
          </p>
        </article>
      </div>

      <div
        v-on:click="$emit('reset-game')"
        class="try-again-button"
      >
        Попробовать ещё
      </div>
    </section>

    <section class="rigth-section">
      <img
        src="../assets/images/FinalPage/image-result-page.png"
        alt="Stupid doctor and patient"
        class="rigth-section__image"
      >
    </section>
  </div>
</template>

<script>
export default {
  props: {
    pills: {
      type: Object,
      required: true,
    },
    totalAmount: Number,
  },
  methods: {
    getPercentage(value) {
      return `${Math.round(value * 100)}%`;
    }
  }
}
</script>

<style lang="scss">
  .results-page {
    height: 100vh;
    display: flex;
    justify-content: space-between;
  }

  .left-section {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    padding-left: 70px;

    @media (max-width: 1025px) {
      padding-top: 20px;
      padding-left: 30px;
    }
  }

  .go-to-main-page {
    display: block;
    width: 70px;
    height: 70px;
    background: url(../assets/images/FinalPage/btn_home_for_results_page.svg) no-repeat center;
    margin-bottom: 120px;

    @media (max-width: 1025px) {
      width: 70px;
      height: 70px;
      margin-bottom: 100px;
    }
  }

  .try-again-button {
    display: block;
    width: 270px;
    height: 60px;
    background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
    border-radius: 100px;
    margin-top: 250px;
    margin-left: 60px;
    text-align: center;
    font-size: 24px;
    line-height: 59px;
    color: #FFFFFF;

    @media (max-width: 1025px) {
      width: 200px;
      font-size: 18px;
      margin-top: 180px;
      margin-left: 30px;
    }
  }

  .results {
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    @media (max-width: 1025px) {
      margin-left: 30px;
      row-gap: 30px;
    }
  }

  .line {
    max-width: 580px;
    height: 2px;
    width: 100%;
    background-color: #D9D9D9;
  }

  .score-board {
    display: flex;

    &__pill {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      row-gap: 20px;
      color: #424242;

      @media (max-width: 1025px) {
        row-gap: 10px;
      }
    }
  }

  .pill {
    &__score {
      font-size: 48px;
      line-height: 59px;

      @media (max-width: 1025px) {
        font-size: 42px;
        line-height: 50px;
      }
    }

    &__title {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
  }

  .common-info {
    &__signature-title {
      font-size: 32px;
      line-height: 35px;
      font-weight: 200;
      letter-spacing: 0.02em;
      color: #8E9AD5;

      @media (max-width: 1025px) {
        font-size: 28px;
        line-height: 32px;
      }
    }

    &__result-title {
      font-size: 32px;
      line-height: 35px;
      font-weight: 800;
      letter-spacing: 0.02em;
      color: #8E9AD5;

      @media (max-width: 1025px) {
        font-size: 28px;
        line-height: 32px;
      }
    }

    &__description {
      font-size: 24px;
      line-height: 29px;
      color: #424242;

      @media (max-width: 1025px) {
        font-size: 20px;
        list-style: 26px;
      }
    }
  }

  .rigth-section {
    &__image {
      height: 820px;

      @media (max-width: 1025px) {
        height: 480px;
      }
    }
  }
</style>
