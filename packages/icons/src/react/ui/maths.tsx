import type { Icon } from './types'

export const IconMaths: Icon = ({
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
      data-slot='icon-ui-maths'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M10.78 6.71H2.45' stroke='currentColor' />
      <path d='m21.28 14.7-6.16 6.15' stroke='currentColor' />
      <path d='M10.2 16.42H3.03' stroke='currentColor' />
      <path d='M10.2 19.72H3.03' stroke='currentColor' />
      <path d='M21.28 6.71H15.1' stroke='currentColor' />
      <path d='M6.62 2.54v8.33' stroke='currentColor' />
      <path d='m15.12 14.68 6.16 6.16' stroke='currentColor' />
    </svg>
  )
}
