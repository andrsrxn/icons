import type { Icon } from './types'

export const IconStore: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-store'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.04 13.14c0-1 .93-1.76 1.92-1.55.44.1.9 0 1.26-.26l.51-.37a5 5 0 0 1 1.07-.66 2 2 0 0 1 1.13-.04c.3.07.57.24 1.12.57l.22.14c.7.42 1.04.63 1.42.7a2 2 0 0 0 .63 0c.38-.06.73-.26 1.43-.66l.42-.25c.51-.3.77-.44 1.03-.51a2 2 0 0 1 1.21.07c.26.1.5.27.97.62l.55.4c.34.25.77.34 1.2.25.9-.2 1.78.49 1.78 1.43v5.67c0 .73 0 1.09-.09 1.38a2 2 0 0 1-1.3 1.3c-.3.1-.66.1-1.38.1-.73 0-1.09 0-1.38-.1a2 2 0 0 1-1.3-1.3c-.1-.3-.1-.65-.1-1.38v-.2c0-.93 0-1.4-.15-1.75a2 2 0 0 0-1.1-1.1 5 5 0 0 0-1.74-.14h-.81c-.92 0-1.38 0-1.74.14a2 2 0 0 0-1.1 1.1c-.15.36-.15.82-.15 1.74v.23c0 .7 0 1.06-.09 1.35a2 2 0 0 1-1.32 1.32c-.28.1-.64.1-1.35.1s-1.07 0-1.36-.1a2 2 0 0 1-1.32-1.32c-.09-.29-.09-.64-.09-1.35z'
        fill='currentColor'
      />
      <path
        d='M1.86 9.62c0 1.2.54 2.22 2.71 2.22 2.18 0 3.66-2.22 3.66-2.22s1.55 2.22 3.72 2.22c2.18 0 3.85-2.23 3.85-2.23s1.34 2.23 3.65 2.23c1.8 0 2.69-1.2 2.69-2.2q0-.3-.15-.96h0c-.55-2.7-.83-4.05-1.93-4.95s-2.6-.9-5.62-.9H9.5c-2.97 0-4.45 0-5.56.9s-1.37 2.2-1.91 4.83q-.16.71-.16 1.06'
        stroke='currentColor'
      />
      <path
        d='M20.91 11.94v1.53c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-1.87c-3.77 0-5.65 0-6.83-1.17s-1.17-3.06-1.17-6.83v-1.53'
        stroke='currentColor'
      />
      <path
        d='M15.44 21.22v-2.3c0-1.36 0-2.04-.32-2.54a2 2 0 0 0-.6-.6c-.49-.31-1.17-.31-2.54-.31s-2.05 0-2.55.32a2 2 0 0 0-.6.6c-.31.49-.31 1.17-.31 2.54v2.29'
        stroke='currentColor'
      />
    </svg>
  )
}
