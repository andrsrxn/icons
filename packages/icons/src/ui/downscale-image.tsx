import type { Icon } from './types'

export const IconDownscaleImage: Icon = ({
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
      data-slot='icon-ui-downscale-image'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.8 12.13c1 0 1.5 0 1.89.18a2 2 0 0 1 1 1c.18.4.18.9.18 1.9v1.25a.96.96 0 0 1-1.58.73.96.96 0 0 0-1.28.05l-.13.12q-.15.16-.23.2a1 1 0 0 1-1.35-.14l-.17-.26-.67-1-.12-.18a1 1 0 0 0-1.5-.07q-.05.04-.14.16l-.24.3a1 1 0 0 1-1.7-.6l-.01-.37v-.64c0-.58 0-.87.06-1.11a2 2 0 0 1 1.45-1.46c.24-.06.53-.06 1.12-.06z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.75 17.25v-1.12c0-1.88 0-2.83.58-3.41.6-.59 1.53-.59 3.42-.59h1.12c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v1.12c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H6.75c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42'
        stroke='currentColor'
      />
      <path d='m17.87 6.19-4.16 4.16' stroke='currentColor' />
      <path
        d='M17.01 11.1h-1.04c-1.42 0-2.13 0-2.57-.44s-.44-1.15-.44-2.56V7.05'
        stroke='currentColor'
      />
      <path
        d='M15.22 21.25c1.85 0 2.78 0 3.51-.3a4 4 0 0 0 2.18-2.18c.3-.73.3-1.66.3-3.51v-4.54c0-3.78 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17H8.97c-2.01 0-3.02 0-3.8.35a4 4 0 0 0-2 2c-.36.79-.36 1.8-.36 3.8'
        stroke='currentColor'
      />
      <path
        d='m2.81 18.74 2.03-2.9c.34-.49.51-.74.75-.73.23 0 .39.26.7.78l.9 1.46c.28.45.41.68.63.7.21.02.55-.36.9-.75.3-.31.53-.55.71-.55.19 0 .34.15.64.44l1.56 1.55'
        stroke='currentColor'
      />
    </svg>
  )
}
