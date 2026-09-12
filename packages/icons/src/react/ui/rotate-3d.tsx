import type { Icon } from './types'

export const IconRotate3d: Icon = ({
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
      data-slot='icon-ui-rotate-3d'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16 7.97c-.65-3.69-2.2-6.2-4-6.2-2.4 0-4.34 4.58-4.34 10.23S9.6 22.24 12 22.24c.83 0 1.73-.59 2.06-1.55'
        stroke='currentColor'
      />
      <path
        d='M22.24 12c0-2.4-4.59-4.34-10.24-4.34S1.76 9.6 1.76 12 6.35 16.34 12 16.34c1.35 0 4.11 0 6.65-1.16'
        stroke='currentColor'
      />
      <path
        d='m17.33 18.9 1.2-2.09c.46-.82.7-1.23.59-1.63s-.52-.63-1.34-1.1l-2.1-1.2'
        stroke='currentColor'
      />
    </svg>
  )
}
