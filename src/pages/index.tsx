import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import AppBar from '@/components/layouts/AppBar/AppBar'
import Header from '@/components/layouts/Header/Header'

const Home: NextPage = () => {
  let title: string = 'tabi-dori'
  let message: string = 'React Next.js sample page.'

  return (
    <div>
      <Header title={title}></Header>
      <AppBar />
      <Container maxWidth='lg' style={{ height: '200vh' }}>
        <Button variant='contained' color='secondary'>
          test
        </Button>
        <Button variant='contained'>Hello world</Button>
      </Container>
    </div>
  )
}

export default Home
