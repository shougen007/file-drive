
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import ConvexClientProvider from './ConvexClientProvider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ConvexClientProvider>
  )
}