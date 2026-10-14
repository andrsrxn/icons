import type { Icon } from './types'

export const IconGif: Icon = ({
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
      data-slot='icon-ui-gif'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M22.26 20.17H1.74' stroke='currentColor' />
      <path d='M22.26 3.86H1.74' stroke='currentColor' />
      <path d='M16.43 8.14v7.76' stroke='currentColor' />
      <path d='M16.43 8.14h5.37' stroke='currentColor' />
      <path d='M16.43 12.25h4.03' stroke='currentColor' />
      <path d='M12.14 15.9V8.13' stroke='currentColor' />
      <path
        d='M7.78 8.55a3.84 3.84 0 1 0-.22 6.94c.34-.14.51-.21.67-.46s.17-.5.17-1v-1.8H6.35'
        stroke='currentColor'
      />
    </svg>
  )
}
