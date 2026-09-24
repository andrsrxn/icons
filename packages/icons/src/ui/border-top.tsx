import type { Icon } from './types'

export const IconBorderTop: Icon = ({
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
      data-slot='icon-ui-border-top'
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
      <path d='M12 15.37V8.63' stroke='currentColor' />
      <path d='M15.37 12H8.63' stroke='currentColor' />
      <path
        d='M2.76 6v-.43a3 3 0 0 1 2.8-2.8h12.87a3 3 0 0 1 2.8 2.8l.01.43'
        stroke='currentColor'
      />
      <path d='M2.71 18.02v.53a3 3 0 0 0 2.8 2.8h.45' stroke='currentColor' />
      <path d='M21.29 18.02v.53a3 3 0 0 1-2.8 2.8h-.45' stroke='currentColor' />
      <path d='M10.19 21.28h3.56' stroke='currentColor' />
      <path d='M21.2 13.83v-3.57' stroke='currentColor' />
      <path d='M2.72 13.83v-3.57' stroke='currentColor' />
    </svg>
  )
}
