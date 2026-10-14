import type { Icon } from './types'

export const IconSfx: Icon = ({
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
      data-slot='icon-ui-sfx'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M22.26 20.17H1.74' stroke='currentColor' />
      <path d='M22.26 3.86H1.74' stroke='currentColor' />
      <path d='M10.11 8.31v7.46' stroke='currentColor' />
      <path d='M10.11 8.27h4.11' stroke='currentColor' />
      <path d='M10.11 12.27h3.09' stroke='currentColor' />
      <path
        d='M7.06 9.23a3.5 3.5 0 0 0-2.35-.96c-1.13 0-2.36.62-2.36 1.92 0 2.8 4.71.57 4.71 3.4 0 1.34-1.2 2.05-2.35 2.05s-1.93-.35-2.46-1.13'
        stroke='currentColor'
      />
      <path d='m16.62 15.72 5.13-7.4' stroke='currentColor' />
      <path d='m21.75 15.72-5.13-7.4' stroke='currentColor' />
    </svg>
  )
}
