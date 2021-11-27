<template>
  <section class="main-page">
    <div class="title-circle">
      <section class="title-circle__text">
        <div class="text__say-hello">
          Добро пожаловать в игру
        </div>
        <h1 class="text__game-name">
          Помоги ФАРМАЦЕВТУ
        </h1>
      </section>
      <router-link to="/start-game/game" class="title-circle__start-button">
        Начать
      </router-link>
    </div>
  </section>
  <router-view/>
</template>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .main-page {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.35) 16.62%, rgba(94, 110, 194, 0.35) 83.38%),
                url(../assets/images/GameStartPage/doctor.jpg) no-repeat;
    background-size: cover;
  }

  .title-circle {
    width: 860px;
    height: 860px;
    max-width: 100vh;
    max-height: 100vh;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
    position: relative;
    left: 110px;
    top: -30px;
    padding-bottom: 160px;

    @media (max-width: $max-width-for-mobiles) {
      width: 300px;
      height: 300px;
      left: 0;
      margin: 0 auto;
      padding-bottom: 60px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-width: $max-width-for-tablets) {
      width: 560px;
      height: 560px;
      padding-bottom: 120px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-height: $max-height-for-mobiles) {
      width: 560px;
      height: 560px;
      padding-bottom: 120px;
    }

    &__text {
      max-width: 740px;
      display: flex;
      flex-direction: column;
      align-items: baseline;

      @media (max-width: $max-width-for-mobiles) {
        max-width: 210px;
      }
    }

    &__start-button {
      width: 382px;
      height: 90px;
      border-radius: 100px;
      background: #FFFFFF;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 90px;
      text-align: center;
      color: #8E9AD5;

      &:hover {
        box-shadow: 0 0 100px #8E9AD5;
      }

      @media (max-width: $max-width-for-mobiles) {
        width: 182px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-width: $max-width-for-tablets) {
        width: 252px;
        height: 50px;
        font-size: 26px;
        line-height: 50px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-width: $max-width-for-tablets) {
        width: 252px;
        height: 50px;
        font-size: 26px;
        line-height: 50px;
      }
    }
  }

  .text {
      &__say-hello {
        font-size: 35px;
        line-height: 41px;
        letter-spacing: 0.02em;
        padding-bottom: 29px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media (max-width: $max-width-for-mobiles) {
          font-size: 16px;
          line-height: 18px;
        }

        @media (min-width: $min-width-for-tablets)
          and (max-width: $max-width-for-tablets) {
          font-size: 30px;
          line-height: 36px;
        }

        @media (min-width: $min-width-for-tablets)
          and (max-height: $max-height-for-mobiles) {
          font-size: 30px;
          line-height: 36px;
        }
      }

      &__game-name {
        font-size: 60px;
        line-height: 66px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        padding-bottom: 120px;

        @media (max-width: $max-width-for-mobiles) {
          font-size: 28px;
          line-height: 30px;
          padding-bottom: 20px;
        }

        @media (min-width: $min-width-for-tablets)
          and (max-width: $max-width-for-tablets) {
          font-size: 40px;
          line-height: 46px;
          padding-bottom: 70px;
        }

        @media (min-width: $min-width-for-tablets)
          and (max-height: $max-height-for-mobiles) {
          font-size: 40px;
          line-height: 46px;
          padding-bottom: 70px;
        }
      }
    }
</style>
