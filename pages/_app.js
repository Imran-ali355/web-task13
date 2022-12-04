import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-500 h-screen '>
  <Component {...pageProps} />
  </div>
}

export default MyApp
