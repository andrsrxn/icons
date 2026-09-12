import type { Icon } from './types'

export const IconTextHeadingSix: Icon = ({
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
      data-slot='icon-ui-text-heading-six'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M4.18 4.03v14.74' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M4.18 11.3h9.1' stroke='currentColor' />
      <path d='M13.28 4.03v14.74' stroke='currentColor' />
      <path d='M11.83 18.77h2.9' stroke='currentColor' />
      <path d='M2.73 18.77h2.9' stroke='currentColor' />
      <path d='M11.83 4.03h2.9' stroke='currentColor' />
      <path d='M2.73 4.03h2.9' stroke='currentColor' />
      <circle
        cx='19.24'
        cy='19.34'
        r='1.87'
        transform='rotate(90 19.24 19.34)'
        stroke='currentColor'
      />
      <path d='M17.38 19.23c0-1.24 0-4.35 2.88-5.2' stroke='currentColor' />
    </svg>
  )
}
