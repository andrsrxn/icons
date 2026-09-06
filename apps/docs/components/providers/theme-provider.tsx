'use client'

import { ThemeProvider as NextThemesProvider } from '@teispace/next-themes'

function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='system'
      enableSystem
      {...props}>
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
