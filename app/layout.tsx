import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EMBERSPACK | Prompt Orchestration',
  description: 'Prompt orchestration control plane for high-performance crews.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
