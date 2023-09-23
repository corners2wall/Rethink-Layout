import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import Application from 'components/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<Application />)
