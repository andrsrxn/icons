import type { Icon } from './types'

export const IconTan: Icon = ({
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
      data-slot='icon-ui-tan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M16.97 16.11v-6.7c0-.96 0-1.43.23-1.5.23-.05.45.37.9 1.22l3.06 5.74c.45.85.68 1.27.9 1.21.23-.06.23-.53.23-1.49V7.85'
        stroke='currentColor'
      />
      <path d='M4.18 7.88v8.3' stroke='currentColor' />
      <path d='M1.57 7.88H6.8' stroke='currentColor' />
      <path
        d='m8.1 16.19 1.4-4.79h0c.7-2.35 1.04-3.53 1.69-3.52s.96 1.2 1.6 3.57l1.26 4.74'
        stroke='currentColor'
      />
      <path d='M9.21 13h3.84' stroke='currentColor' />
    </svg>
  )
}
