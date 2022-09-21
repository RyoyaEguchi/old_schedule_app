import Head from 'next/head'

type headerProp = {
  title: string
}

export default function Header(props: headerProp) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
  )
}
