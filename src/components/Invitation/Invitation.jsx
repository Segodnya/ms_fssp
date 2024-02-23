import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import qr from "../../assets/images/frame.png"
import "./Invitation.css";

export function Invitation() {
  return (
    <section className="flex invitation">
      <h2 className="invitation__title">Молодежному совету нужен&nbsp;ТЫ!</h2>
      <p className="invitation__p">Присоединяйся к нашей команде :)</p>
      <p className="invitation__p">
        По вопросу вступления всегда можно обратиться в отдел профессиональной
        подготовки и воспитательной работы:
      </p>
      <ul className="invitation__contacts">
        <li className="flex-col invitation__row">
          <GlobalOutlined />
          <p>Красногорск, ул. Речная, д. 8, каб. 903</p>
        </li>
        <li className="flex-col invitation__row">
          <PhoneOutlined />
          <p>8 (498) 568-98-30 (доб. 1298, 1299)</p>
        </li>
        <li className="flex-col invitation__row">
          <MailOutlined />
          <p>ooppvr@r50.fssp.gov.ru</p>
        </li>
      </ul>
      <img src={qr} alt='QR Code' className='invitation__qr' />
    </section>
  );
}
