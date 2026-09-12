import type { Icon } from './types'

export const IconHandTouch: Icon = ({
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
      data-slot='icon-ui-hand-touch'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M15.38 6.94c0-2.84-2.3-5.2-5.13-5.2a5.2 5.2 0 0 0-5.14 5.2' stroke='currentColor' />
      <path
        opacity='.2'
        d='m8.5 5.55 1.84-.62 1.41.62.75 5.44 2.83-.58 1.4 1.93h2.91l.42 8.52-1.28 1.77H8.7L5.46 18.5l-2.09-4.86L5.6 11.9l2.58 1.45z'
        fill='currentColor'
      />
      <path d='M16.2 15.3v-3.05a1.98 1.98 0 0 0-3.97 0v3.05' stroke='currentColor' />
      <path
        d='M16.2 14.96v-1.02a1.98 1.98 0 0 1 3.97 0v3.99c0 2.38-1.4 4.47-1.4 4.47'
        stroke='currentColor'
      />
      <path d='M12.23 13.95V6.83a1.98 1.98 0 0 0-3.97 0v7.72' stroke='currentColor' />
      <path
        d='M8.25 14.66 7.3 13a2.14 2.14 0 0 0-2.92-.78 2.06 2.06 0 0 0-.9 2.6c.55 1.24 1.32 2.9 2.08 4.08.93 1.44 2.7 3.47 2.7 3.47'
        stroke='currentColor'
      />
    </svg>
  )
}
