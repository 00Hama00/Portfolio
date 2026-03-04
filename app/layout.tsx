import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohamed Moussi - Robotics Software Engineer',
  description: 'Robotics Software Engineer specializing in automation, computer vision, and intelligent systems. Portfolio showcasing projects and experience in robotic control systems.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
