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
      <path d='M10.19 13.08h-6.5' stroke='currentColor' />
      <path
        d='M18.15 19.48c-1.74 0-3.15-1.27-3.15-2.84 0-2.07 1.41-2.83 3.15-2.83h3.14v2.83c0 1.57-1.4 2.84-3.14 2.84'
        stroke='currentColor'
      />
      <path
        d='M22.03 19.63s-.43-.33-.43-1.38v-5.7c0-2.26-.5-3.6-2.6-4-1.35-.25-2.4.35-3.2 1.38'
        stroke='currentColor'
      />
    </svg>
  )
}
