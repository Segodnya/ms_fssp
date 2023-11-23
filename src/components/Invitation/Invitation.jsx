import "./Invitation.css";

export function Invitation() {
  return (
    <section className="flex invitation">
      <h2 className="invitation__title">Молодежному совету нужен&nbsp;ТЫ!</h2>
      <p className="invitation__p">Присоединяйся к нашей команде :)</p>
      <p className="invitation__p">
        По вопросу вступления всегда можно обратиться в отдел профессиональной
        подготовки и воспитательной работы (Красногорск, ул. Речная, д. 8, каб.
        903)
      </p>
      <p className="invitation__p">Телефоны ВТС 1298, 1299</p>
      <p className="invitation__p">
        Или напиши нам на почту -{" "}
        <span className="invitation__span">ooppvr@r50.fssp.gov.ru</span>
      </p>
    </section>
  );
}
