import type { Icon } from './types'

export const IconTextHeadingOne: Icon = ({
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
      data-slot='icon-ui-text-heading-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m17.35 15.82 1.42-1.29c.72-.64 1.08-.96 1.38-.83s.3.61.3 1.58v5.35'
        stroke='currentColor'
      />
      <path d='M4.18 4.03v14.74' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M4.18 11.3h9.1' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M11.83 18.77h2.9' stroke='currentColor' />
      <path d='M11.83 4.03h2.9' stroke='currentColor' />
      <path d='M2.73 4.03h2.9' stroke='currentColor' />
      <path d='M2.73 18.77h2.9' stroke='currentColor' />
    </svg>
  )
}
