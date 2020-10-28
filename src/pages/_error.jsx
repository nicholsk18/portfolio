import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { error_title } from '../../public/assets/css/404.module.css'

const CustomError = () => {
    return (
        <Layout>
            <Head>
                <title>Page not found | Karson Nichols</title>
            </Head>

            <div style={{textAlign: 'center'}}>
                <h2 className={error_title}>&lt; 404 /&gt;</h2>
                <p>Page not found</p>
                <p>This page was taken away. Try going <Link href="/"><a>Home</a></Link> or use navigation to find active page</p>
                <img src="/assets/images/404.png" alt="404 image"/>
            </div>
        </Layout>
    )
}

// not sure if needed?
function getInitialProps({ res, err }) {
    let statusCode;
    if (res) {
        statusCode = res.statusCode;
    } else if (err) {
        statusCode = err.statusCode;
    } else {
        statusCode = null;
    }
    return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError
