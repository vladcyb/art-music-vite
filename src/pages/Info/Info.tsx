import { Col, Row } from 'antd'
import { standardGutter } from '@shared/constants/gutter'
import { Logo } from './Logo'
import './Info.scss'


export const Info = () => (
  <section className="info" id="info">
    <h1 className="info__title">Art-Music</h1>
    <Row className="info__content"
      wrap
      gutter={{ ...standardGutter }}
      justify="center"
      align="middle"
    >
      <Col className="info__logo-wrapper" xs={0} md={22} lg={4} xxl={10}>
        <Logo className="info__logo" />
      </Col>
      <Col xs={22} md={22} lg={16} xxl={10}>
        <p>
          ООО &quot;Арт-Мьюзик&quot; занимается поставкой и&nbsp;арендой
          звукового, светового и трансляционного оборудования, а&nbsp;также их монтажем.<br />
          В том числе мы предлагаем широкий выбор любых музыкальных инструментов
          от&nbsp;разных брендов.
        </p>
        <p>
          Мы имеем успешный опыт работы по 44-ФЗ и 223-ФЗ на всей территории РФ.
          Помогаем с подбором светового и звукового
          оборудования под решение Ваших задач.
        </p>
        <p>
          Осуществляем консультации по части
          поставляемого нами оборудования под проекты и оказываем поддержку в
          оформлении технического задания.
        </p>
        <p>
          Для более подробной информации Вы можете
          позвонить по телефону
          {' '}
          <a className="link" href="tel:+79202170035">
            8 (920) 217-00-35
          </a>
          {' '}
          или написать на
          почту
          {' '}
          <a className="link" href="mailto:vmb36@yandex.ru">VMB36@yandex.ru</a>.
        </p>
      </Col>
    </Row>
  </section>
)
