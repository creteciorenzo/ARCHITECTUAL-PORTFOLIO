import { Grid, Card, Text } from '@nextui-org/react'
import Image from 'next/image'
const Projects = ({ projects }) => {
  const MockItem = ({ name, image, subTitle }) => {
    return (
      <div style={{}}>
        <Image
          src={`/${image}`}
          width={800}
          height={500}
          quality={100}
          alt={name}
        />
        <Text h5 css={{ fontFamily: 'Poppins', fontWeight: '400' }}>
          {name}
        </Text>
        <Text
          h6
          css={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            color: '$tertiary',
          }}>
          {subTitle}
        </Text>
      </div>
    )
  }
  return (
    <div style={{ padding: '80px 0' }}>
      <Text h4 css={{ 'padding-left': '15px', fontWeight: '400' }}>
        Projects
      </Text>
      <Grid.Container gap={3}>
        {projects.map((project) => (
          <Grid md={6} key={project.id}>
            <MockItem
              name={project.name}
              image={project.image}
              subTitle={project.subTitle}
            />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}

export default Projects
