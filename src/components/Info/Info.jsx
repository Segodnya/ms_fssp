import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Info.css";

export function Info() {
  return (
    <section className="flex info" id="section-info">
      <h2 className="info__title">Что такое Молодежный&nbsp;совет?</h2>
      <p className="info__subtitle">
        Молодежный совет - коллегиальный орган, формируемый из числа
        государственных служащих ГУФССП России по Московской области в возрасте
        до 35 лет с целью развития и реализации молодежной политики, создавая
        условия для раскрытия потенциала молодежного управленческого актва,
        формируя сообщества молодых работников и популяризируя государственную
        службу
      </p>
      {/* @TODO: Заменить на слайдер на чистом CSS */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        loop={true}
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={24}
        className="mySwiper"
      >
        <SwiperSlide className="flex info__card">
          Содействие профессиональному, интеллектуальному и нравственному
          развитию молодых работников и сотрудников
        </SwiperSlide>
        <SwiperSlide className="flex info__card">
          Адаптация молодых работников в коллективе и повышение их социальной
          активности
        </SwiperSlide>
        <SwiperSlide className="flex info__card">
          Формирование мировоззрения, основанного на патриотизме, семейных
          ценностях, правосознании, принципах здорового образа жизни и
          экологической культуры
        </SwiperSlide>
        <SwiperSlide className="flex info__card">
          Организация и проведение научно-практических конференций и молодежных
          мероприятий (форумов, семинаров, тренингов и обучения)
        </SwiperSlide>
        <SwiperSlide className="flex info__card">
          Разработка предложений по совершенствованию деятельности ФССП России
        </SwiperSlide>
        <SwiperSlide className="flex info__card">
          Создание благоприятных условий для успешной самореализации и
          профессионального развития молодых работников
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
