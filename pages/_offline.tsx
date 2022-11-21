import Head from 'next/head';

export default function Fallback() {
    return (
        <>
            <Head>
                <title>pwa-nextjs</title>
            </Head>
            <div>Offline</div>
        </>
    );
}