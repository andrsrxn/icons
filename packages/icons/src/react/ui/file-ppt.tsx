import type { Icon } from './types'

export const IconFilePpt: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-file-ppt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.8 13.1V5.79c0-1.87 0-2.8.57-3.39.58-.58 1.52-.6 3.38-.61l2.22-.03c1.3 0 1.94-.02 2.42.27a2 2 0 0 1 .7.69c.28.47.28 1.12.28 2.42 0 1.28 0 1.92.29 2.4a2 2 0 0 0 .69.69c.47.28 1.11.28 2.4.28s1.93 0 2.4.29a2 2 0 0 1 .7.68c.28.48.28 1.12.28 2.4v1.24z'
        fill='currentColor'
      />
      <path
        d='M3.8 13.04V7.82c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h1.87c1.23 0 1.84 0 2.4.23.54.22.98.66 1.84 1.52l1.23 1.23 1.17 1.14c.9.87 1.34 1.3 1.58 1.86s.24 1.19.24 2.44v2.8'
        stroke='currentColor'
      />
      <path d='M13.18 2.33v2.44c0 1.88 0 2.83.58 3.41s1.53.59 3.41.59h2.44' stroke='currentColor' />
      <path d='M18.95 16.02v6.42' stroke='currentColor' />
      <path d='M16.58 16.02h4.74' stroke='currentColor' />
      <path d='M3.53 15.89v6.43' stroke='currentColor' />
      <path d='M10.34 15.89v6.43' stroke='currentColor' />
      <path
        d='M3.55 15.89h2.3c.96 0 1.74.82 1.74 1.84a1.8 1.8 0 0 1-1.74 1.84h-2.3'
        stroke='currentColor'
      />
      <path
        d='M10.36 15.89h2.3c.96 0 1.74.82 1.74 1.84a1.8 1.8 0 0 1-1.74 1.84h-2.3'
        stroke='currentColor'
      />
    </svg>
  )
}
