import type { Icon } from './types'

export const IconGridSix: Icon = ({
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
      data-slot='icon-ui-grid-six'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.24 2.76c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.48c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88z'
        fill='currentColor'
      />
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path d='M21 9.14H3' stroke='currentColor' />
      <path d='M21 15.1H3' stroke='currentColor' />
      <path d='M12 3v18.24' stroke='currentColor' />
    </svg>
  )
}
