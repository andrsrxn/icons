import type { Icon } from './types'

export const IconTextDirectionRight: Icon = ({
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
      data-slot='icon-ui-text-direction-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m18.57 21.04 1.48-1.48c.67-.66 1-1 1-1.41 0-.42-.33-.75-1-1.42l-1.48-1.48'
        stroke='currentColor'
      />
      <path d='M3.09 18.14h17.49' stroke='currentColor' />
      <path d='M12 2.96v10.69' stroke='currentColor' />
      <path d='M13.77 13.65h-3.54' stroke='currentColor' />
      <path
        d='M7.68 4.2c0-.68.55-1.24 1.24-1.24h6.16c.69 0 1.24.56 1.24 1.25'
        stroke='currentColor'
      />
    </svg>
  )
}
