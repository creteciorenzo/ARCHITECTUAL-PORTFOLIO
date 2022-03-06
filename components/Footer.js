import { Text, Container } from '@nextui-org/react'
const Footer = () => {
  return (
    <Container
      css={{
        padding: '50px 0',
      }}>
      <div
        style={{
          width: '100%',
          height: '1px',
          background: '#aaa',
          'margin-bottom': '30px',
        }}
      />
      <Text
        h6
        css={{ fontFamily: 'Poppins', fontWeight: '400', color: '$tertiary' }}>
        &copy; 2022
      </Text>
    </Container>
  )
}

export default Footer
