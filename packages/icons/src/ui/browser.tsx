import type { Icon } from './types'

export const IconBrowser: Icon = ({
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
      data-slot='icon-ui-browser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.73 7.23c0-1.15 0-1.72.23-2.16a2 2 0 0 1 .85-.84C3.24 4 3.8 4 4.96 4h14.08c1.14 0 1.72 0 2.15.23a2 2 0 0 1 .85.84c.23.44.23 1.01.23 2.16 0 .57 0 .86-.12 1.07a1 1 0 0 1-.42.43c-.22.11-.5.11-1.08.11H3.35c-.58 0-.86 0-1.08-.11a1 1 0 0 1-.42-.43c-.12-.21-.12-.5-.12-1.07'
        fill='currentColor'
      />
      <rect x='1.73' y='4' width='20.53' height='16' rx='3' stroke='currentColor' />
      <path d='M22.27 8.84H1.73' stroke='currentColor' />
    </svg>
  )
}
