import { Button } from "../Button/Button";
import "./Lead.css";

export function Lead() {
  const scrollToSection = () => {
    const sectionInfo = document.getElementById("section-info");
    sectionInfo.scrollIntoView({ behavior: "smooth" });
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <section className="flex lead">
      <h1 className="flex lead__title" onClick={stopPropagation}>
        <span className="lead__span">молодежный</span>
        <span className="lead__span">совет</span>
      </h1>
      <p className="lead__p">Создаем будущее вместе!</p>
      <div className="lead__button-container">
        <Button onClick={scrollToSection}>Узнать подробности</Button>
      </div>
    </section>
  );
}
