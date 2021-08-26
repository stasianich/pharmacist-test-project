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
      <router-link to="/game" class="title-circle__start-button">
        Начать
      </router-link>
    </div>
  </section>
  <router-view/>
</template>

<style lang="scss">
  .main-page {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.35) 16.62%, rgba(94, 110, 194, 0.35) 83.38%),
                url(../assets/images/MainPage/doctor.jpg) no-repeat;
    // background-size: 100% 100%;
    background-size: cover;
  }

  .title-circle {
    width: 860px;
    height: 860px;
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

    &__text {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: baseline;
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
      }

      &__game-name {
        font-size: 60px;
        line-height: 66px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        padding-bottom: 120px;
      }
    }
</style>
