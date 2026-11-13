import type { Icon } from './types'

export const IconFileYaml: Icon = ({
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
      data-slot='icon-ui-file-yaml'
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
        d='M12.87 22.14v-4.56h0c0-.8 0-1.2.2-1.26.22-.07.45.26.9.92l.72 1.06c.22.34.34.5.5.5s.27-.17.5-.5l.65-1c.45-.68.67-1.02.88-.96.22.07.22.47.22 1.29v4.51'
        stroke='currentColor'
      />
      <path d='M20.12 16.2v5.06c0 .47 0 .7.15.85s.38.15.85.15h1.36' stroke='currentColor' />
      <path
        d='m6.45 22.14.99-3.37h0c.49-1.67.73-2.5 1.19-2.49s.67.84 1.12 2.52l.89 3.34'
        stroke='currentColor'
      />
      <path d='M7.2 19.9h2.77' stroke='currentColor' />
      <path d='m1.58 16.28 1.8 2.66m0 0 1.76-2.66m-1.75 2.66v3.2' stroke='currentColor' />
    </svg>
  )
}
