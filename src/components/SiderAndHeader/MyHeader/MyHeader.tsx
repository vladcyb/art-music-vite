import { Anchor, Button, Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Logo } from './Logo'
import './MyHeader.scss'

const { Header } = Layout
const { Link } = Anchor

interface IMyHeaderProps {
  onMenuClick: () => void;
}

export const MyHeader = ({ onMenuClick }: IMyHeaderProps) => (
  <Header className="my-header">
    <a href="#info">
      <Logo className="my-header__logo" />
    </a>
    <div className="my-header__menu">
      <Anchor bounds={200} targetOffset={84} affix={false}>
        <Link className="my-header__item" href="#info" title="О нас" />
        <Link className="my-header__item" href="#brands" title="Бренды" />
        <Link className="my-header__item" href="#rent" title="Аренда" />
        <Link className="my-header__item" href="#stage" title="Одежда сцены" />
        <Link className="my-header__item" href="#repair" title="Ремонт" />
        <Link className="my-header__item" href="#callback" title="Заказать звонок" />
        <Link className="my-header__item" href="#payment" title="Оплата и доставка" />
        <Link className="my-header__item my-header__contacts" href="#contacts" title="Контакты" />
      </Anchor>
    </div>
    <Button
      className="my-header__menu-btn"
      icon={<MenuOutlined className="my-header__menu-btn-icon" />}
      onClick={onMenuClick}
      type="text"
      size="large"
    />
  </Header>
)
