import type { Icon } from './types'

export const IconFileHalf: Icon = ({
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
      data-slot='icon-ui-file-half'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.78 22.26c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83v-4.5c0-3.74 0-5.61 1.16-6.78S7.97 1.8 11.7 1.75l1.7-.01v6.8h6.78v5.72c0 3.78 0 5.66-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.78 13.12V9.19c0-3.15 0-4.72.84-5.8a4 4 0 0 1 .71-.72c1.09-.83 2.66-.83 5.81-.83 1.37 0 2.05 0 2.68.21l.47.2c.6.29 1.08.77 2.05 1.74l.84.84.58.56c1.2 1.16 1.79 1.74 2.1 2.49.32.74.32 1.58.32 3.24v2'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.35v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.46'
        stroke='currentColor'
      />
      <path d='M20.18 19.99v.25a2 2 0 0 1-1.92 1.9h-.2 0' stroke='currentColor' />
      <path d='M3.88 19.99v.25A2 2 0 0 0 6 22.14h0' stroke='currentColor' />
      <path d='M20.18 13.22H3.88' stroke='currentColor' />
      <path d='M3.78 15.98v1.23' stroke='currentColor' />
      <path d='M9.14 22.26h1.22' stroke='currentColor' />
      <path d='M13.64 22.26h1.22' stroke='currentColor' />
      <path d='M20.18 15.98v1.23' stroke='currentColor' />
    </svg>
  )
}
