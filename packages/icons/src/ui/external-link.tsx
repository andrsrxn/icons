import type { Icon } from './types'

export const IconExternalLink: Icon = ({
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
      data-slot='icon-ui-external-link'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.64'
        y='5.58'
        width='15.76'
        height='15.76'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M18.4 12.4v2.94c0 2.83 0 4.25-.88 5.13-.87.87-2.29.87-5.12.87H8.64c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13v-3.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h3.13'
        stroke='currentColor'
      />
      <path
        d='M14.71 2.67h2.6c1.88 0 2.83 0 3.41.58.6.59.6 1.53.6 3.42v2.6'
        stroke='currentColor'
      />
      <path d='m11.5 12.48 8.93-8.93' stroke='currentColor' />
    </svg>
  )
}
