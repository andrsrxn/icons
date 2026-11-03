import type { Icon } from './types'

export const IconPrescription: Icon = ({
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
      data-slot='icon-ui-prescription'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M6.37 18.02V1.78' stroke='currentColor' />
      <path d='m17.63 22.22-7.81-11.5' stroke='currentColor' />
      <path d='m11.43 22.22 6.2-7.53' stroke='currentColor' />
      <path d='M6.49 1.78h4.16a4.47 4.47 0 0 1 0 8.93H6.49' stroke='currentColor' />
    </svg>
  )
}
