import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { standardGutter } from '@shared/constants/gutter'
import './Contacts.scss'
import { ViewportContainer } from '@components'

export const Contacts = () => {
  const [highlighted, setHighlighted] = useState(false)

  const highlight = () => {
    setTimeout(() => setHighlighted(true), 200)
    setTimeout(() => setHighlighted(false), 1200)
  }

  useEffect(() => {
    const contactsLink = document.querySelector('.my-header__contacts')
    contactsLink?.addEventListener('click', highlight)

    return () => contactsLink?.removeEventListener('click', highlight)
  }, [])

  return (
    <ViewportContainer
      className={classNames('contacts', {
        contacts_highlighted: highlighted,
      })}
      id="contacts"
    >
      <footer>
        <Row
          className="contacts__content"
          justify="center"
          align="middle"
          gutter={{ ...standardGutter }}
        >
          <Col className="contacts__content" xs={24} xl={12}>
            <h1 className="contacts__title">Контакты</h1>
            <p>
              <span className="contacts__label">Адрес:</span>
              <a
                className="contacts__value link"
                href="https://yandex.ru/maps/-/CCUm6LwtdC"
                target="_blank"
                rel="noreferrer"
              >
                г. Воронеж, ул.&nbsp;Машиностроителей,&nbsp;д.&nbsp;82
              </a>
            </p>
            <p>
              <span className="contacts__label">Телефон:</span>
              <span className="contacts__value">
                <a className="contacts__phone link" href="tel:+79202170035">
                +7 920 217-00-35
                </a>
              </span>
            </p>
            <p>
              <span className="contacts__label">Email:</span>
              <a className="contacts__value link" href="mailto:vmb36@yandex.ru">
                vmb36@yandex.ru
              </a>
            </p>
          </Col>
        </Row>
      </footer>
    </ViewportContainer>
  )
}
