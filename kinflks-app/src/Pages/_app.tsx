import type { AppProps } from 'next/app';
import Nav from "@/Components/Nav";
 
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
       <Nav/>
       <Component {...pageProps} />
    </>
    
   
    )
}
export default App;