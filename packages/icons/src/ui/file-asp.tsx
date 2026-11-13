import type { Icon } from './types'

export const IconFileAsp: Icon = ({
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
      data-slot='icon-ui-file-asp'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.8 13.02V9.5c0-3.46 0-5.19 1.01-6.32l.32-.32c1.12-1.02 2.85-1.04 6.31-1.07.88-.01 1.32-.02 1.6.24l.09.08c.26.28.26.72.26 1.6v.84c0 1.89 0 2.83.58 3.41.59.59 1.53.59 3.42.59h.75c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v2.48z'
        fill='currentColor'
      />
      <path
        d='M3.8 12.71V9.1c0-3.13 0-4.69.83-5.77a4 4 0 0 1 .75-.74c1.07-.82 2.63-.82 5.76-.82 1.35 0 2.03 0 2.66.2l.48.2c.6.3 1.07.78 2.04 1.74l.84.84.56.55h0c1.2 1.16 1.79 1.74 2.1 2.49.32.74.32 1.57.32 3.24v1.7'
        stroke='currentColor'
      />
      <path
        d='M13.19 2.27V4.7h0c0 1.9 0 2.84.58 3.42.59.59 1.53.59 3.42.59h2.44'
        stroke='currentColor'
      />
      <path
        d='m2.7 22.43 1.14-3.88h0c.56-1.9.84-2.86 1.36-2.85s.78.96 1.3 2.88l1.02 3.85'
        stroke='currentColor'
      />
      <path d='M3.56 19.86h3.2' stroke='currentColor' />
      <path
        d='M14.24 16.56a3 3 0 0 0-2.1-.86c-.99 0-2.08.55-2.08 1.72 0 2.52 4.18.51 4.18 3.07 0 1.2-1.07 1.83-2.1 1.83q-1.48.01-2.16-1.01'
        stroke='currentColor'
      />
      <path
        d='M17.29 22.46v-5.84c0-.47 0-.7.14-.85s.39-.15.86-.15h1.46a1.9 1.9 0 0 1 1.86 1.96 1.9 1.9 0 0 1-1.86 1.96h-2.44'
        stroke='currentColor'
      />
    </svg>
  )
}
