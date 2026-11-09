import type { Icon } from './types'

export const IconGif: Icon = ({
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
      data-slot='icon-ui-gif'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path d='M16.91 16.03V8.94c0-.47 0-.7.15-.85s.38-.15.85-.15h3.46' stroke='currentColor' />
      <path d='M16.91 11.99h3.36' stroke='currentColor' />
      <path d='M12.88 16.04V8' stroke='currentColor' />
      <path
        d='M8.54 8.38a4.07 4.07 0 1 0-.18 7.33c.34-.15.51-.23.67-.48s.16-.5.16-1v-.95c0-.47 0-.7-.14-.85s-.39-.15-.86-.15H7.02'
        stroke='currentColor'
      />
    </svg>
  )
}
