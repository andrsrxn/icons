import type { Icon } from './types'

export const IconError401: Icon = ({
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
      data-slot='icon-ui-error-401'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M6.36 16.61V9.5c0-1.34 0-2.02-.35-2.12-.36-.11-.73.45-1.48 1.56l-1.96 2.93c-.46.69-.7 1.03-.55 1.3.14.26.55.26 1.38.26h4.46'
        stroke='currentColor'
      />
      <rect x='10.43' y='7.25' width='5.07' height='9.62' rx='2.54' stroke='currentColor' />
      <path
        d='M18.08 10 20 8.29c.72-.65 1.08-.97 1.37-.84s.3.61.3 1.58v7.86'
        stroke='currentColor'
      />
    </svg>
  )
}
