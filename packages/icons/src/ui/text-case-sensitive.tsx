import type { Icon } from './types'

export const IconTextCaseSensitive: Icon = ({
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
      data-slot='icon-ui-text-case-sensitive'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.83 19.63 5.04 8.4c.78-2.74 1.18-4.1 1.93-4.1.76 0 1.14 1.37 1.92 4.12l3.16 11.22'
        stroke='currentColor'
      />
      <path
        d='M18.1 19.47c-1.9 0-3.45-1.35-3.45-3 0-2.2 1.55-3.01 3.46-3.01h3.45v3c0 1.66-1.55 3-3.45 3'
        stroke='currentColor'
      />
      <path d='M10.19 13.08h-6.5' stroke='currentColor' />
      <path
        d='M22.24 20.05s-.46-.35-.46-1.43V12.7c0-2.34-.54-3.74-2.8-4.14-1.45-.26-2.58.35-3.44 1.42'
        stroke='currentColor'
      />
    </svg>
  )
}
