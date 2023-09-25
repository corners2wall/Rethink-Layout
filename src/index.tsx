import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Application from 'App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
)
