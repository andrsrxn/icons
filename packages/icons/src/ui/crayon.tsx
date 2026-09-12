import type { Icon } from './types'

export const IconCrayon: Icon = ({
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
      data-slot='icon-ui-crayon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='17.26'
        height='6.05'
        rx='1'
        transform='scale(1 -1)rotate(45 26.41 4.32)'
        fill='currentColor'
      />
      <path opacity='.2' d='m1.55 21.86 6.56-1.26-4.76-4.82z' fill='currentColor' />
      <path
        d='M5.81 21.36c.82-.2 1.23-.3 1.6-.5.35-.2.65-.5 1.25-1.1L21.3 7.12c.75-.74 1.12-1.11 1.27-1.54a2 2 0 0 0 0-1.34c-.15-.42-.52-.8-1.27-1.54-.74-.75-1.12-1.12-1.54-1.27a2 2 0 0 0-1.34 0c-.43.15-.8.52-1.54 1.27L4.13 15.45c-.55.54-.82.81-1.01 1.14s-.3.7-.52 1.43l-.8 2.76c-.2.74-.31 1.1-.11 1.31s.57.12 1.3-.06z'
        stroke='currentColor'
      />
      <path d='m8.03 20.28-4.34-4.35' stroke='currentColor' />
      <path d='M10.8 17.44 6.46 13.1' stroke='currentColor' />
    </svg>
  )
}
