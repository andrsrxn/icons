import type { Icon } from './types'

export const IconTextHeadingSix: Icon = ({
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
      data-slot='icon-ui-text-heading-six'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.18 4.03v14.74' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M4.18 11.3h9.1' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M11.83 18.77h2.9' stroke='currentColor' />
      <path d='M2.73 18.77h2.9' stroke='currentColor' />
      <path d='M11.83 4.03h2.9' stroke='currentColor' />
      <path d='M2.73 4.03h2.9' stroke='currentColor' />
      <path
        d='M17.56 19.34c.14.92.87 1.86 1.9 1.86s1.86-.83 1.86-1.86-.7-1.84-1.74-1.85c-.7 0-1.85.39-2.02 1.85m0 0a5.3 5.3 0 0 1 .53-3.39 3.8 3.8 0 0 1 2.27-1.91'
        stroke='currentColor'
      />
    </svg>
  )
}
