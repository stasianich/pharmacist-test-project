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
        Спробувати ще
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
  @import "../assets/styles/_variables.scss";

  .results-page {
    height: 100vh;
    display: flex;
    justify-content: space-between;

    @media (max-width: $max-width-for-mobiles) {
      flex-direction: column;
    }
  }

  .left-section {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    padding-left: 70px;

    @media (max-width: $max-width-for-mobiles) {
      max-width: 700px;
      padding-left: 0;
      padding-top: 20px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-width: $max-width-for-tablets) {
      padding-top: 20px;
      padding-left: 30px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-height: $max-height-for-mobiles) {
      padding-top: 20px;
      padding-left: 30px;
    }
  }

  .go-to-main-page {
    display: block;
    min-width: 70px;
    min-height: 70px;
    width: 70px;
    height: 70px;
    background: url(../assets/images/FinalPage/btn_home_for_results_page.svg) no-repeat center;
    margin-bottom: 120px;
    transition: transform 400ms;

    &:hover {
      transform: scale(0.8);
    }

    @media (max-width: $max-width-for-tablets) {
      margin-bottom: 100px;
      margin-left: 10px;
    }

    @media (max-height: $max-height-for-mobiles) {
      margin-bottom: 50px;
    }
  }

  .try-again-button {
    display: block;
    width: 270px;
    height: 60px;
    background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
    border-radius: 100px;
    margin-top: 200px;
    margin-left: 60px;
    text-align: center;
    font-size: 24px;
    line-height: 59px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 15px #A8A8A8;
    }

    @media (max-width: $max-width-for-mobiles) {
      margin: 50px auto;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-width: $max-width-for-tablets) {
      width: 200px;
      font-size: 18px;
      margin-top: 120px;
      margin-left: 30px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-height: $max-height-for-mobiles) {
      width: 200px;
      font-size: 18px;
      margin-top: 120px;
      margin-left: 30px;
    }
  }

  .results {
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    @media (max-width: $max-width-for-mobiles) {
      margin-left: 0;
      padding: 0 8px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-width: $max-width-for-tablets) {
      margin-left: 30px;
      row-gap: 30px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-height: $max-height-for-mobiles) {
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

      @media (max-width: $max-width-for-tablets) {
        row-gap: 10px;
      }

      @media (max-height: $max-height-for-mobiles) {
        row-gap: 10px;
      }
    }
  }

  .pill {
    &__score {
      font-size: 48px;
      line-height: 59px;

      @media (max-width: $max-width-for-tablets) {
        font-size: 34px;
        line-height: 50px;
      }

      @media (max-height: $max-height-for-mobiles) {
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

      @media (max-width: $max-width-for-tablets) {
        font-size: 28px;
        line-height: 32px;
      }

      @media (max-height: $max-height-for-mobiles) {
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

      @media (max-width: $max-width-for-tablets) {
        font-size: 28px;
        line-height: 32px;
      }

      @media (max-height: $max-height-for-mobiles) {
        font-size: 28px;
        line-height: 32px;
      }
    }

    &__description {
      font-size: 24px;
      line-height: 29px;
      color: #424242;

      @media (max-width: $max-width-for-tablets) {
        font-size: 20px;
        list-style: 26px;
      }

      @media (max-height: $max-height-for-mobiles) {
        font-size: 20px;
        list-style: 26px;
      }
    }
  }

  .rigth-section {
    &__image {
      height: 820px;

      @media (max-width: $max-width-for-mobiles) {
        display: none;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-width: $max-width-for-tablets) {
        height: 400px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-height: $max-height-for-mobiles) {
        height: 450px;
      }
    }
  }
</style>
