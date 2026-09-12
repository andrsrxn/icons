import type { Icon } from './types'

export const IconPaintBoard: Icon = ({
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
      data-slot='icon-ui-paint-board'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.79 12.1c0 5.65 4.57 10.22 10.21 10.22 2.03 0 1.69-2.12 1.33-4.3-.28-1.7-.23-2.91.58-3.71s2.21-1.06 3.92-.81c2.22.31 4.38.62 4.38-1.4a10.21 10.21 0 1 0-20.42 0m14.08-5.12a1.52 1.52 0 1 1-3.04 0 1.52 1.52 0 0 1 3.04 0M9.52 8.5a1.52 1.52 0 1 1-3.04 0 1.52 1.52 0 0 1 3.04 0m-.3 6.3c0 .85-.6 1.42-1.44 1.42s-1.6-.57-1.6-1.42c0-.84.66-1.48 1.5-1.48s1.53.64 1.53 1.48'
        fill='currentColor'
      />
      <path
        d='M22.21 12.1c0 3.07-5.83.32-7.97 2.46s.82 7.76-2.24 7.76A10.21 10.21 0 1 1 22.21 12.1'
        stroke='currentColor'
      />
      <circle cx='14.38' cy='7.29' r='1.52' stroke='currentColor' />
      <circle cx='8.28' cy='8.9' r='1.52' stroke='currentColor' />
      <circle cx='7.96' cy='14.97' r='1.52' stroke='currentColor' />
    </svg>
  )
}
