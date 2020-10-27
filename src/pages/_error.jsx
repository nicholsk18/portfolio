import Head from 'next/head'
import Layout from '../components/Layout'

const CustomError = () => {
    return (
        <Layout>
            <Head>
                <title>Page not found | Karson Nichols</title>
            </Head>

            <div style={{textAlign: 'center'}}>
                <h2>404</h2>
                <strong>This page was not found.</strong>
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
