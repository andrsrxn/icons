import type { Icon } from './types'

export const IconCoffin: Icon = ({
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
      data-slot='icon-ui-coffin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.8 1.78c2.17 0 3.26 0 4.06.6s1.1 1.64 1.7 3.73l.6 2.09c.24.81.36 1.22.36 1.63 0 .42-.11.83-.34 1.64l-2.1 7.56c-.4 1.4-.59 2.11-1.13 2.52-.53.4-1.26.4-2.72.4h-2.35c-1.44 0-2.17 0-2.7-.4s-.74-1.09-1.14-2.48l-2.2-7.57c-.23-.83-.35-1.24-.35-1.67s.11-.84.35-1.67l.6-2.05c.6-2.09.9-3.13 1.7-3.73s1.89-.6 4.06-.6z'
        fill='currentColor'
      />
      <path
        d='m4.94 8.32.56-2.1c.57-2.13.86-3.2 1.67-3.82s1.91-.62 4.13-.62h1.43c2.2 0 3.3 0 4.11.61.8.62 1.1 1.68 1.68 3.8l.57 2.1c.2.77.31 1.15.31 1.54s-.09.77-.28 1.53l-1.7 6.67c-.48 1.86-.72 2.78-1.36 3.38a3 3 0 0 1-.44.34c-.74.47-1.7.47-3.61.47-1.93 0-2.89 0-3.63-.47a3 3 0 0 1-.44-.34c-.64-.6-.87-1.54-1.34-3.4l-1.68-6.68a6 6 0 0 1-.28-1.5c0-.39.1-.76.3-1.5'
        stroke='currentColor'
      />
      <path d='M9.22 8.02h5.56' stroke='currentColor' />
      <path d='M12.02 12.83V5.36' stroke='currentColor' />
    </svg>
  )
}
