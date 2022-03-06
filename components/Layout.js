import { Container, Row, Col, Text } from '@nextui-org/react'
import Intro from './Intro'
import Projects from './Projects'
import Footer from './Footer'
const Layout = () => {
  let projects = [
    {
      id: 0,
      name: 'Five-Storey Apartment Building with Penthouse',
      subTitle: 'Palanan, Makati City',
      image: 'PALANAN.jpg',
    },
    {
      id: 1,
      name: 'Three-Storey Apartment Building with Roofdeck',
      subTitle: 'Taguig City',
      image: 'RCAY-APT.jpg',
    },
    {
      id: 2,
      name: 'Two-Storey Residential House with Roofdeck',
      subTitle: 'Brgy. Pinagsama, Taguig City',
      image: 'RODRIGO.jpg',
    },
    {
      id: 3,
      name: 'Four-Storey Apartment Building with Roofdeck',
      subTitle: 'Brgy. Pinagsama, Taguig City',
      image: 'TUMALE-APT.jpg',
    },
    {
      id: 4,
      name: 'Two-Storey Residential Building with Roofdeck',
      subTitle: 'Brgy. Pinagsama, Taguig City',
      image: 'UBANA.jpg',
    },
    {
      id: 5,
      name: 'Two-Unit Warehouse',
      subTitle: 'Brgy. Sta. Lucia, Pasig City',
      image: 'VMC-WAREHOUSE.jpg',
    },
  ]
  return (
    <Container>
      <Intro />
      <Projects projects={projects} />
      <Footer />
    </Container>
  )
}

export default Layout
