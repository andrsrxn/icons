import type { Icon } from './types'

export const IconMirrorLeft: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-mirror-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M23.35 11.36c0-3.77 0-5.65-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17H8.96c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.28c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h6.39c3.77 0 5.65 0 6.82-1.17 1.18-1.18 1.18-3.06 1.18-6.83z'
        fill='currentColor'
      />
      <path
        d='M13.81 3.36h1.54c3.77 0 5.65 0 6.82 1.17 1.18 1.18 1.18 3.06 1.18 6.83v1.28c0 3.77 0 5.65-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17H13.8'
        stroke='currentColor'
      />
      <path d='M13.2 1.53v20.94' stroke='currentColor' />
      <path d='M5.54 3.4h-.06a2.4 2.4 0 0 0-2.41 2.4' stroke='currentColor' />
      <path d='M5.5 20.63h-.06a2.37 2.37 0 0 1-2.37-2.38' stroke='currentColor' />
      <path d='M10.09 3.4H8.65' stroke='currentColor' />
      <path d='M3 10.29V8.84' stroke='currentColor' />
      <path d='M3 15.15v-1.4' stroke='currentColor' />
      <path d='M10.09 20.63H8.65' stroke='currentColor' />
    </svg>
  )
}
