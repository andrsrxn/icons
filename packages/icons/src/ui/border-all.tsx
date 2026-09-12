import type { Icon } from './types'

export const IconBorderAll: Icon = ({
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
      data-slot='icon-ui-border-all'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.24'
        y='2.76'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(90 21.24 2.76)'
        fill='currentColor'
      />
      <path
        d='M15.24 21.24H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.48c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88'
        stroke='currentColor'
      />
      <path d='M12 15.36V8.63' stroke='currentColor' />
      <path d='M12 4.76v-2' stroke='currentColor' />
      <path d='M12 21.24v-2' stroke='currentColor' />
      <path d='M4.76 12.12h-2' stroke='currentColor' />
      <path d='M21.24 12.12h-2' stroke='currentColor' />
      <path d='M15.37 12H8.63' stroke='currentColor' />
    </svg>
  )
}
