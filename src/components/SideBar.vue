<template>
  <section class="sidebar">
    <nav class="sidebar__nav nav">
      <router-link to="/" class="nav__home">
      </router-link>
      <div
        v-on:click="$emit('reset-game')"
        class="nav__retry"
      >
      </div>
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
            / 5
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
  ],
}
</script>

<style lang="scss">
  .sidebar {
    width: 33%;
    height: 100vh;
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.7) 16.62%, rgba(94, 110, 194, 0.7) 83.38%);
  }

  .nav {
    padding-left: 50px;
    padding-top: 70px;

    &__home {
      display: inline-block;
      width: 70px;
      height: 70px;
      background: url(../assets/images/Game/btn_home.svg) no-repeat center;
      background-size: cover;
      margin-right: 35px;
    }

    &__retry {
      display: inline-block;
      width: 70px;
      height: 70px;
      background: url(../assets/images/Game/btn_retry.svg) no-repeat center;
      // background-size: cover;
      background-size: 198px 198px;
    }
  }

  .status {
    margin-top: 290px;
    margin-left: 40px;

    &__title {
      font-size: 36px;
      line-height: 44px;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    &__rating-board {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 40px;
      column-gap: 20px;
      margin-right: 30px;
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

    &__count {
      width: 80px;
      text-align: center;
      font-size: 48px;
      line-height: 59px;
      color: #424242;
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
    margin-top: 180px;
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .count {
    &__current-count {
      font-weight: bold;
    }
  }
</style>