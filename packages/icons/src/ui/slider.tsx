import type { Icon } from './types'

export const IconSlider: Icon = ({
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
      data-slot='icon-ui-slider'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.77 15.76c-.73 0-1.1 0-1.39-.13a1.5 1.5 0 0 1-.77-.77c-.13-.29-.13-.65-.13-1.39v-2.94c0-.74 0-1.1.13-1.4q.24-.52.77-.76c.29-.13.66-.13 1.4-.13s1.1 0 1.38.13q.54.23.77.77c.13.29.13.65.13 1.39v2.94c0 .74 0 1.1-.13 1.4a1.5 1.5 0 0 1-.77.76c-.29.13-.65.13-1.39.13'
        fill='currentColor'
      />
      <path d='M2.34 12h10.14' stroke='currentColor' />
      <path d='M17.06 12h4.7' stroke='currentColor' />
      <path
        d='M17.06 13.47v-2.94c0-.74 0-1.1-.13-1.4a1.5 1.5 0 0 0-.77-.76c-.29-.13-.65-.13-1.39-.13v0c-.73 0-1.1 0-1.39.13a1.5 1.5 0 0 0-.77.77c-.13.29-.13.65-.13 1.39v2.94c0 .74 0 1.1.13 1.4q.24.52.77.76c.29.13.66.13 1.4.13v0c.73 0 1.1 0 1.38-.13q.54-.23.77-.77c.13-.29.13-.65.13-1.39'
        stroke='currentColor'
      />
    </svg>
  )
}
