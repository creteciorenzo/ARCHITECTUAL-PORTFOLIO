import { Text, Container } from '@nextui-org/react'

const Intro = () => {
  return (
    <div
      style={{
        padding: '35px 0',
        height: '100vh',
      }}>
      <Text
        h1
        css={{
          fontFamily: 'Poppins',
          fontWeight: '400',
          letterSpacing: 'normal',
          lineHeight: '1',

          '@xs': {
            fontSize: '75px',
          },
          '@md': {
            fontSize: '120px',
          },
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, commodi!
      </Text>
    </div>
  )
}
export default Intro
