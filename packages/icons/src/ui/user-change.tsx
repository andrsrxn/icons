import type { Icon } from './types'

export const IconUserChange: Icon = ({
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
      data-slot='icon-ui-user-change'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.38 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c4.58 0 8.3 3.79 8.3 8.46'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 0 1-5.4 5.4 5.4 5.4 0 1 1 5.4-5.4' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 11.11-7.8' stroke='currentColor' />
      <path d='M16.38 15.46h5.33' stroke='currentColor' />
      <path d='M21.56 20.6h-5.33' stroke='currentColor' />
      <path
        d='m20.85 13.5.55.55c.67.66 1 1 1 1.41 0 .42-.33.75-1 1.42l-.55.55'
        stroke='currentColor'
      />
      <path d='m17.1 18.62-.55.55c-.67.67-1 1-1 1.42s.33.75 1 1.41l.55.56' stroke='currentColor' />
    </svg>
  )
}
