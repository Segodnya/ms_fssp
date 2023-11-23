import "./Team.css";

// @TODO: Добавить настоящие фотографии
export function Team() {
  return (
    <section className="flex team">
      <h2 className="team__title">Наша команда</h2>
      <article className="flex team__card">
        <div className="image-container"></div>
        <h3 className="team__card-name">Валентина Маргун</h3>
        <p className="team__card-occupation">Председатель совета</p>
        <a
          href="https://t.me/mar_alya"
          target="blank"
          className="team__card-contact"
        >
          @mar_alya
        </a>
      </article>
      <article className="flex team__card">
        <div className="image-container"></div>
        <h3 className="team__card-name">Андрей Ясенок</h3>
        <p className="team__card-occupation">Заместитель председателя совета</p>
        <a
          href="https://t.me/andreyyasenok"
          target="blank"
          className="team__card-contact"
        >
          @andreyyasenok
        </a>
      </article>
    </section>
  );
}
