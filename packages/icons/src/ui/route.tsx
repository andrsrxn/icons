import type { Icon } from './types'

export const IconRoute: Icon = ({
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
      data-slot='icon-ui-route'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.96 18.35c-4.32 0-7.82 2.04-10.84.19-2.17-1.33-2.68-5.23-.23-6.64 4.99-2.85 8.92 3.24 14.6-.05 2.34-1.36 2.25-4.84.2-6.2-3.52-2.32-6.95 0-11.4 0'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='18.78' cy='18.35' r='2.71' fill='currentColor' />
      <circle cx='18.78' cy='18.35' r='2.71' stroke='currentColor' />
      <circle opacity='.2' cx='5.22' cy='5.65' r='2.71' fill='currentColor' />
      <circle cx='5.22' cy='5.65' r='2.71' stroke='currentColor' />
    </svg>
  )
}
