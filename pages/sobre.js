import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site de cadastros de empresa" />
                <meta name="author" content="Isabela Rochelle" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Isabela - Sobre</title>
            </Head>
            <Menu />
            Sobre esta página
        </div>
    )
}
  
export default Home;