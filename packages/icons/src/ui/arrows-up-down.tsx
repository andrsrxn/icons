import type { Icon } from './types'

export const IconArrowsUpDown: Icon = ({
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
      data-slot='icon-ui-arrows-up-down'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M2.84 6.38 4.4 4.83c1.33-1.33 2-2 2.82-2 .83 0 1.5.67 2.83 2l1.55 1.55'
        stroke='currentColor'
      />
      <path
        d='m12.4 17.62 1.55 1.55c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l1.55-1.55'
        stroke='currentColor'
      />
      <path d='M7.22 20.67V2.98' stroke='currentColor' />
      <path d='M16.78 3.55v17.4' stroke='currentColor' />
    </svg>
  )
}
