<template>
  <section class="sidebar">
    <nav class="sidebar__nav nav">
      <router-link to="/" class="nav__home">
      </router-link>
      <button
        type="button"
        v-on:click="$emit('reset-game')"
        class="nav__retry"
      >
      </button>
    </nav>

    <section class="status">
      <h2 class="status__title">
        Параметры:
      </h2>
      <div class="status__rating-board">
        <div class="rating">
          <img
            src="../assets/images/Game/emoji/unhappy_icon.svg"
            alt="Unhappy emoji"
            class="rating__emoji"
          >
          <span class="rating__count">
            {{ pills.firstPill }}
          </span>
        </div>
        <div class="rating">
          <img
            src="../assets/images/Game/emoji/happy_icon.svg"
            alt="Happy emoji"
            class="rating__emoji"
          >
          <span class="rating__count">
            {{ pills.secondPill }}
          </span>
        </div>
        <div class="rating">
          <img
            src="../assets/images/Game/emoji/heart_icon.svg"
            alt="Heart emoji"
            class="rating__emoji"
          >
          <span class="rating__count">
            {{ pills.thirdPill }}
          </span>
        </div>
      </div>
    </section>

    <section class="queue">
        <span class="queue__title">
          Осталось в очереди:
        </span>
        <span class="queue__count count">
          <span class="count__current-count">
            {{ count }}
          </span>
          <span class="count__max">
            {{ ` / ${patientsAmount}` }}
          </span>
        </span>
      </section>
    </section>
</template>

<script>
export default {
  props: [
    'pills',
    'count',
    'patientsAmount',
  ],
}
</script>

<style lang="scss">
  .sidebar {
    width: 33vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.7) 16.62%, rgba(94, 110, 194, 0.7) 83.38%);
    z-index: 2;

    @media (max-width: 740px) {
      width: 100vw;
      height: 100%;
    }
  }

  .nav {
    padding-left: 50px;
    padding-top: 70px;

    @media (max-width: 1023px) {
      padding-top: 40px;
    }

    @media (max-height: 930px) {
      padding-top: 40px;
    }

    &__home {
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: url(../assets/images/Game/btn_home.svg) no-repeat center;
      background-size: cover;
      margin-right: 35px;

      &:hover {
        box-shadow: 0 0 25px rgb(243, 177, 174);
      }

      @media (max-width: 1023px) {
        width: 50px;
        height: 50px;
      }

      @media (max-height: 930px) {
        width: 50px;
        height: 50px;
      }
    }

    &__retry {
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: url(../assets/images/Game/btn_retry.svg) no-repeat center;
      background-size: 198px 198px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 25px rgb(243, 177, 174);
      }

      @media (max-width: 1023px) {
        width: 50px;
        height: 50px;
        background-size: 146px 146px;
      }

      @media (max-height: 930px) {
        width: 50px;
        height: 50px;
        background-size: 146px 146px;
      }
    }
  }

  .status {
    margin-top: 290px;
    margin-left: 40px;

    @media (max-width: 740px) {
      margin-top: 40px;
    }

    @media (min-width: 741px) and (max-width: 1023px) {
      margin-top: 190px;
    }

    @media (min-width: 741px) and (max-height: 930px) {
      margin-top: 190px;
    }

    &__title {
      font-size: 36px;
      line-height: 44px;
      color: #FFFFFF;
      margin-bottom: 30px;

      @media (max-width: 1023px) {
        font-size: 26px;
        line-height: 34px;
        margin-bottom: 20px;
      }

      @media (max-height: 930px) {
        font-size: 26px;
        line-height: 34px;
        margin-bottom: 20px;
      }
    }

    &__rating-board {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 40px;
      column-gap: 20px;
      margin-right: 30px;

      @media (max-width: 740px) {
        margin-bottom: 20px;
      }

      @media (max-width: 1023px) {
        row-gap: 20px;
      }

      @media (max-height: 930px) {
        row-gap: 20px;
      }
    }
  }

  .rating {
    width: 190px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
    border-radius: 40px;

    @media (max-width: 1023px) {
      width: 130px;
      height: 60px;
      padding: 7px;
    }

    @media (max-height: 930px) {
      width: 130px;
      height: 60px;
      padding: 7px;
    }

    &__count {
      width: 80px;
      text-align: center;
      font-size: 48px;
      line-height: 59px;
      color: #424242;

      @media (max-width: 1023px) {
        width: 60px;
        font-size: 38px;
        line-height: 48px;
      }

      @media (max-height: 930px) {
        width: 60px;
        font-size: 38px;
        line-height: 48px;
      }
    }
  }

  .queue {
    height: 134px;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.02em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.15);
    text-align: center;

    @media (max-width: 1023px) {
      height: 120px;
      font-size: 30px;
      line-height: 40px;
    }

    @media (max-height: 930px) {
      height: 120px;
      font-size: 30px;
      line-height: 40px;
    }
  }

  .count {
    &__current-count {
      font-weight: bold;
    }
  }
</style>