import Head from "next/head"
import Navbar from "./Navbar"

export const Layout = ({children, title='Training Next Js Material UI'}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar/>
            {children}
    </div>
  )
}
