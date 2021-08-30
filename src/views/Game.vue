<template>
  <Results
    v-if="this.count < 0"
    v-bind:pills="this.pills"
    v-bind:totalAmount="this.patients.length"
    @reset-game="resetGame"
  />
  <div
    class="game-page"
    v-else
  >
    <SideBar
      v-bind:pills="pills"
      v-bind:count="count"
      v-bind:patientsAmount="this.patients.length"
      @reset-game="resetGame"
    />

    <section class="main-board">

      <div
        class="patient-card"
        v-bind:class="{
            'card-success-first-pill': this.showMark === 'Препарат 1',
            'card-success-second-pill': this.showMark === 'Препарат 2',
            'card-success-third-pill': this.showMark === 'Препарат 3',
          }"
      >
        <img
          v-bind:src="patients[count].photo"
          alt="Patient`s photo"
          class="patient-card__photo"
        >
        <div class="patient-card__text">
            <h3 class="patient-card__title">
            {{ patients[count].name}}
          </h3>
          <article class="patient-card__description">
            {{ patients[count].description}}
          </article>
        </div>

        <div
          class="mark-success"
          v-if="this.showMark"
          v-bind:class="{
            'first-pill-success': this.showMark === 'Препарат 1',
            'second-pill-success': this.showMark === 'Препарат 2',
            'third-pill-success': this.showMark === 'Препарат 3',
          }"
        >
          {{ this.showMark }}
        </div>
      </div>

      <section class="game-buttons">
        <button
          type="button"
          class="game-buttons__button-1"
          v-on:click="updateBoard(1)"
        >
          Препарат 1
        </button>
        <button
          type="button"
          class="game-buttons__button-2"
          v-on:click="updateBoard(2)"
        >
          Препарат 2
        </button>
        <button
          type="button"
          class="game-buttons__button-3"
          v-on:click="updateBoard(3)"
        >
          Препарат 3
        </button>
      </section>

    </section>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Results from '@/components/Results.vue';

export default {
  data() {
    return {
      patients: [
        {
          id: 1,
          name: "Марія, 19 років",
          photo: require("../assets/images/Game/patients/Maria.png"),
          description: "Бабуся приймає брендовий препарат "
            + "від болю в суглобах, він допомагає, але занадто "
            + "дорогий. У Вас є якісний аналог з нижчою ціною? "
            + "Якщо ні — давайте бренд.",
        },
        {
          id: 2,
          name: "Степан, 61 рік",
          photo: require("../assets/images/Game/patients/Stepan.png"),
          description: "Спросоння відсунув гарячий чайник рукою "
            + "та обпікся. У Вас всі ліки від опіків такі дорогі? "
            + "Можна хороший препарат недорого?"
        },
        {
          id: 3,
          name: "Любов, 58 років",
          photo: require("../assets/images/Game/patients/Lubov.png"),
          description: "Лікар призначив препарат від артеріальної "
            + "гіпертензії, а бренд дорого коштує. Тому мені "
            + "потрібен аналог з хорошою ефективністю та приємною ціною."
        },
        {
          id: 4,
          name: "Олександр, 20 років",
          photo: require("../assets/images/Game/patients/Oleksandr.png"),
          description: "Порекомендуйте ефективний препарат "
            + "від болю в горлі за розумну ціну."
        },
        {
          id: 5,
          name: "Ірина, 55 років",
          photo: require("../assets/images/Game/patients/Irina.png"),
          description: "У мене часто невралгії, лікар призначив "
            + "вітаміни групи В. Мені потрібен "
            + "якісний аналог за прийнятною ціною."
        },
      ],
      pills: {
        'firstPill': 0,
        'secondPill': 0,
        'thirdPill': 0,
      },
      count: 4,
      showMark: '',
    }
  },
  components: {
    SideBar,
    Results,
  },
  methods: {
    resetGame() {
      this.pills = {
        'firstPill': 0,
        'secondPill': 0,
        'thirdPill': 0,
      };
      this.count = 4;
    },

    updateBoard(id) {
      const timeoutDuration = 600;

      switch(id) {
        case 1:
          this.showMark = 'Препарат 1';
          this.pills['firstPill'] += 1;
          setTimeout(() => {
            this.showMark = '';
            this.count--;
          }, timeoutDuration);
          break;

        case 2:
          this.showMark = 'Препарат 2';
          this.pills['secondPill'] += 1;
          setTimeout(() => {
            this.showMark = '';
            this.count--;
          }, timeoutDuration);
          break;

        case 3:
          this.showMark = 'Препарат 3';
          this.pills['thirdPill'] += 1;
          setTimeout(() => {
            this.showMark = '';
            this.count--;
          }, timeoutDuration);
          break;
      }

      clearTimeout();
    }
  }
}
</script>

<style lang="scss">
  .game-page {
    width: 100vw;
    max-width: 1700px;
    display: flex;
    // justify-content: space-between;
    background-color: #FFFFFF;
  }

  .main-board {
    width: 67%;
    padding-top: 130px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1025px) {
      padding-top: 80px;
      padding-bottom: 34px;
    }
  }

  .patient-card {
    position: relative;
    width: 540px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
    border-radius: 40px;
    
    @media (max-width: 1025px) {
      width: 420px;
      height: 500px;
    }

    &__photo {
      width: 100%;
      // height: 100%;
      object-fit: fill;
    }

    &__text {
      width: 420px;

      @media (max-width: 1025px) {
        width: 360px;
      }
    }

    &__title {
      padding-top: 25px;
      font-size: 32px;
      line-height: 39px;
      color: #8E9AD5;

      @media (max-width: 1025px) {
        padding-top: 15px;
        font-size: 26px;
        line-height: 38px;
      }
    }

    &__description {
      font-size: 26px;
      line-height: 30px;

      @media (max-width: 1025px) {
        font-size: 22px;
        line-height: 28px;
      }
    }
  }

  .game-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

    @media (max-width: 1025px) {
      padding: 0 20px;
    }

    &__button-1,
    &__button-2,
    &__button-3 {
      width: 280px;
      height: 90px;
      border-radius: 100px;
      border: none;
      font-size: 28px;
      line-height: 34px;
      color: #FFFFFF;

      @media (max-width: 1025px) {
        width: 150px;
        height: 70px;
        font-size: 22px;
      }
    }

    &__button-1 {
      background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
    }

    &__button-2 {
      background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);
    }

    &__button-3 {
      background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
    }
  }

  .card-success-first-pill {
    overflow: hidden;
    transform: translateX(-350px) rotate(-390deg);
    transition: all 300ms;
  }

  .card-success-second-pill {
    overflow: hidden;
    transform: translateY(-400px) rotate(-380deg);
    transition: all 300ms;
  }

  .card-success-third-pill {
    overflow: hidden;
    transform: translateX(350px) rotate(390deg);
    transition: all 300ms;
  }

  .mark-success {
    position: absolute;
    width: 360px;
    height: 100px;
    font-size: 52px;
    line-height: 80px;
    top: 280px;
    text-align: center;
    transform: rotate(-30deg);
  }

  .first-pill-success {
    color: #8049C7;
    border: 8px solid #8049C7;
  }

  .second-pill-success {
    color: #169AE4;
    border: 8px solid #169AE4;
  }

  .third-pill-success {
    color: #FFB903;
    border: 8px solid #FFB903;
  }
</style>