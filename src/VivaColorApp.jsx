import { Navbar } from "./components/navbar/Navbar"
import { ColorInputs } from "./components/colorInputs/ColorInputs"
import { Content } from "./components/content/Content"

import './VivaColor.css'
import { Layout } from "./components/Layout/Layout"
import { ColorProvider } from "./context/ColorProvider"
import {Toaster} from 'sonner'



const VivaColorApp= () => {

  return (
    <>
      <Navbar/>
      <ColorProvider>
        <Layout>
          <ColorInputs/>
          <Content/>
        </Layout>
      </ColorProvider>
      <footer className="pb-6 h-full text-lg mx-6 border-gray-400 border-t-2 py-5 text-end" > Made by <strong>Luis Herrera</strong></footer>
    <Toaster position="bottom-left" richColors/>
    </>
  )
}

export {VivaColorApp}
