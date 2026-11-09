import type { Icon } from './types'

export const IconQueue: Icon = ({
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
      data-slot='icon-ui-queue'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.77 12.94h20.46c0 2.73 0 4.1-.64 5.1a4 4 0 0 1-1.19 1.18c-.99.64-2.36.64-5.1.64H8.7c-2.74 0-4.11 0-5.1-.64a4 4 0 0 1-1.19-1.19c-.64-.99-.64-2.36-.64-5.1'
        fill='currentColor'
      />
      <path d='M17.63 10.06H6.37' stroke='currentColor' />
      <path d='M17.63 15.59H6.37' stroke='currentColor' />
      <path d='M17.63 4.54H6.37' stroke='currentColor' />
      <path
        d='M1.77 13.21c0 2.48 0 3.72.53 4.64a4 4 0 0 0 1.48 1.48c.93.53 2.16.53 4.64.53h7.16c2.48 0 3.71 0 4.64-.53a4 4 0 0 0 1.48-1.48c.53-.92.53-2.16.53-4.64'
        stroke='currentColor'
      />
    </svg>
  )
}
