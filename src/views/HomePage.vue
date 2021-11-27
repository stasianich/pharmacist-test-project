<template>
  <section class="home-page">
    <div class="home-page__container">
      <div
        v-for="(section, index) in this.sections" :key="index"
        :style="{backgroundImage: `url(${section.photo})`}"
        class="home-page-section"
      >
        <router-link
          :to="{path: section.url}"
          class="home-page-section__text"
        >
          <h3 class="home-page-section__title">
            {{ section.title }}
          </h3>
          <article
            class="home-page-section__description"
          >
            {{ section.description}}
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          id: 101,
          title: "Бухгалтерія",
          url: "/accounting-page",
          description: "Якщо у вас виникли питання, "
            + "повʼязані з фінансам, заробітньою платою "
            + "чи податками, перейдіть до цього розділу",
          photo: require("../assets/images/HomePage/accounting.jpg"),
        },
        {
          id: 102,
          title: "Новини",
          url: "/news-page",
          description: "В цьому розділі ви знайдете всі "
          + "актуальні новини компанії та анонси",
          photo: require("../assets/images/HomePage/news.jpg"),
        },
        {
          id: 103,
          title: "Тренінги",
          url: "/training-page",
          description: "Під час випробувального терміну, "
            + "кожен новий працівник проходить певні тренінги, "
            + " які ви зможете знайти тут",
          photo: require("../assets/images/HomePage/training.jpg"),
        },
        {
          id: 104,
          title: "Контакти",
          url: "/contacts-page",
          description: "В цьому розділі ви знайдете контакти, "
            + "посилання та іншу інформацію, по кожному "
            + "віддмілу компанії",
          photo: require("../assets/images/HomePage/contacts.jpg"),
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  $border-radius: 40px;

  .home-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.35) 16.62%, rgba(94, 110, 194, 0.35) 83.38%),
                url(../assets/images/GameStartPage/bg.jpg) no-repeat;
    background-size: cover;

    @media (max-width: $max-height-for-mobiles) {
        height: 100%;
        padding: 30px 0;
      }

    &__container {
      max-width: 1040px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 40px;

      @media (max-width: $min-width-for-tablets) {
        gap: 30px;
      }
    }
  }

  .home-page-section {
    position: relative;
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: $border-radius;
    transition: transform 400ms;

    @media (max-width: $max-width-for-mobiles) {
      width: 300px;
      height: 200px;
    }
    
    @media (min-width: $min-width-for-tablets)
      and (max-width: $max-width-for-tablets) {
      width: 380px;
      height: 220px;
    }

    @media (min-width: $min-width-for-tablets)
      and (max-height: $max-height-for-mobiles) {
      width: 400px;
      height: 200px;
    }

    &:hover {
      transform: translateY(-20px);
      cursor: pointer;
    }

    &__text {
      backdrop-filter: blur(5px);
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
      padding: 26px;

      @media (max-width: $max-width-for-mobiles) {
        // width: 250px;
        padding: 18px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-width: $max-width-for-tablets) {
        // width: 360px;
        padding: 22px;
      }

      @media (min-width: $min-width-for-tablets)
        and (max-height: $max-height-for-mobiles) {
        // width: 360px;
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
  }
</style>
