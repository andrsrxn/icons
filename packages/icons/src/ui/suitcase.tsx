import type { Icon } from './types'

export const IconSuitcase: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-suitcase'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' fill='currentColor' d='M6.55 7.12h10.9V20.2H6.55z' />
      <rect x='1.72' y='7.12' width='20.56' height='13.08' rx='3' stroke='currentColor' />
      <path d='M6.35 19.55V7.78' stroke='currentColor' />
      <path d='M17.65 19.55V7.78' stroke='currentColor' />
      <path d='M15.75 7.08c0-2.28-.55-4.09-3.75-4.09S8.25 4.96 8.25 7.08' stroke='currentColor' />
    </svg>
  )
}
