import { Col, Row } from 'antd'
import { ColProps } from 'antd/lib/grid/col'
import { standardGutter } from '@shared/constants/gutter'
import './Brands.scss'

const brandsColProps: ColProps = {
  xs: 24,
  md: 12,
  lg: 12,
  xl: 8,
}

export const Brands = () => (
  <section className="brands" id="brands">
    <Row justify="center" gutter={{ ...standardGutter }}>
      <Col xs={24}>
        <h1 className="brands__title">Наши бренды</h1>
      </Col>
      <Col {...brandsColProps}>
        <h2 className="brands__subtitle">
          Звуковое оборудование<br />и&nbsp;музыкальные инструменты:
        </h2>
        <ul className="brands__list">
          <li>Mackie</li>
          <li>Yamaha</li>
          <li>Das&nbsp;Audio</li>
          <li>Turbosound</li>
          <li>Fender</li>
          <li>XLine</li>
          <li>Electro-Voice</li>
          <li>JBL</li>
          <li>KORG</li>
          <li>FOCUSRITE</li>
          <li>AKG</li>
          <li>BEHRINGER</li>
          <li>Schecter</li>
          <li>Artesia</li>
          <li>Ringway</li>
          <li>SE&nbsp;Audiotechnik</li>
          <li>Phonic</li>
        </ul>
      </Col>
      <Col {...brandsColProps}>
        <h2 className="brands__subtitle">Световое оборудование:</h2>
        <ul className="brands__list">
          <li>INVOLIGHT</li>
          <li>ADJ</li>
          <li>Highendled</li>
          <li>Robe</li>
          <li>XLine&nbsp;Light</li>
          <li>Imlight</li>
          <li>CHAUVET-PRO</li>
          <li>TAMA</li>
        </ul>
      </Col>
      <Col {...brandsColProps}>
        <h2 className="brands__subtitle">Аксессуары&nbsp;и&nbsp;коммутация:</h2>
        <ul className="brands__list">
          <li>GATOR</li>
          <li>ONSTAGE</li>
          <li>PLANET&nbsp;WAVES</li>
          <li>PROEL</li>
          <li>TEMPO</li>
          <li>AMPHENOL</li>
          <li>D&apos;Addario</li>
        </ul>
      </Col>
      <Col xs={0} md={12} lg={12} />
    </Row>
  </section>
)
