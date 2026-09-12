import type { Icon } from './types'

export const IconHandPointer: Icon = ({
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
      data-slot='icon-ui-hand-pointer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m8.13 2.58 2.15-.73 1.65.73.87 6.37 3.33-.68 1.63 2.27h3.42l.5 9.98-1.51 2.09H8.36l-3.8-4.86-2.46-5.7L4.71 10l3.03 1.7z'
        fill='currentColor'
      />
      <path d='M17.15 14.01v-3.58a2.33 2.33 0 1 0-4.66 0v3.58' stroke='currentColor' />
      <path
        d='M17.15 13.6v-1.2a2.33 2.33 0 0 1 4.65 0v4.69c0 2.8-1.64 5.24-1.64 5.24'
        stroke='currentColor'
      />
      <path d='M12.5 12.42V4.07a2.33 2.33 0 0 0-4.66 0v9.06' stroke='currentColor' />
      <path
        d='M7.83 13.26 6.7 11.3a2.5 2.5 0 0 0-3.43-.92 2.4 2.4 0 0 0-1.04 3.06 36 36 0 0 0 2.43 4.77 46 46 0 0 0 3.17 4.07'
        stroke='currentColor'
      />
    </svg>
  )
}
