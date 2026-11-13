import type { Icon } from './types'

export const IconFileMdx: Icon = ({
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
      data-slot='icon-ui-file-mdx'
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
        d='M2.29 22.34v-5.52h0c0-.8 0-1.2.21-1.26s.44.26.89.92l1.06 1.57c.23.33.34.5.5.5s.27-.17.5-.51l.98-1.5c.45-.68.67-1.02.89-.95.21.06.21.47.21 1.28v5.47'
        stroke='currentColor'
      />
      <path
        d='M10.55 21.5v-4.97c0-.4 0-.61.14-.76.15-.14.34-.14.7-.14 1.35 0 3.83.41 3.83 3.39s-2.48 3.38-3.82 3.39c-.37 0-.56 0-.7-.15-.15-.14-.15-.35-.15-.76'
        stroke='currentColor'
      />
      <path d='m17.24 22.4 4.7-6.77' stroke='currentColor' />
      <path d='m21.94 22.4-4.7-6.77' stroke='currentColor' />
    </svg>
  )
}
