import type { Icon } from './types'

export const IconCompare: Icon = ({
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
      data-slot='icon-ui-compare'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 11.73c0-3.3 0-4.95 1.02-5.98 1.03-1.02 2.68-1.02 5.98-1.02h6.54c3.3 0 4.95 0 5.98 1.02 1.02 1.03 1.02 2.68 1.02 5.98v.54c0 3.3 0 4.95-1.02 5.98-1.03 1.02-2.68 1.02-5.98 1.02H8.73c-3.3 0-4.95 0-5.98-1.02-1.02-1.03-1.02-2.68-1.02-5.98z'
        fill='currentColor'
      />
      <path
        d='M11.38 4.73H9c-3.07 0-4.6 0-5.67.8a4 4 0 0 0-.8.8c-.8 1.06-.8 2.6-.8 5.67s0 4.6.8 5.67q.34.46.8.8c1.07.8 2.6.8 5.67.8h2.38'
        stroke='currentColor'
      />
      <path d='M11.51 2.3v19.4' stroke='currentColor' />
      <path d='M19.8 4.76h.05a2.33 2.33 0 0 1 2.33 2.33' stroke='currentColor' />
      <path d='M19.93 19.27h.05a2.33 2.33 0 0 0 2.33-2.33' stroke='currentColor' />
      <path d='M22.28 10.7v2.67' stroke='currentColor' />
      <path d='M14.69 19.25h1.94' stroke='currentColor' />
      <path d='M14.69 4.75h1.94' stroke='currentColor' />
    </svg>
  )
}
