import type { Icon } from './types'

export const IconTornado: Icon = ({
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
      data-slot='icon-ui-tornado'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.46 2.58c3.68.28 6.03 1.04 6.03 1.93 0 1.13-4.25 2.04-9.49 2.04S2.5 5.64 2.5 4.5c0-1.04 3.27-1.9 7.88-2.03'
        stroke='currentColor'
      />
      <path d='M3.79 8.57s2.97 1.05 7.99 1.05h.9' stroke='currentColor' />
      <path d='M19.25 8.57s-1.14.48-3.44.8' stroke='currentColor' />
      <path d='M16.6 12.29s-1.82.51-5.5.4c-3.69-.11-5.85-.75-5.85-.75' stroke='currentColor' />
      <path d='M15.68 15.6s-1.26.24-3.82.15-4.06-.43-4.06-.43' stroke='currentColor' />
      <path d='M14.74 18.68s-.79.13-2.4.09-2.54-.25-2.54-.25' stroke='currentColor' />
      <path d='M15.35 21.48s-.4.06-1.25.06c-.84 0-1.34-.06-1.34-.06' stroke='currentColor' />
    </svg>
  )
}
