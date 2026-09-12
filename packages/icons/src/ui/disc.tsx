import type { Icon } from './types'

export const IconDisc: Icon = ({
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
      data-slot='icon-ui-disc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.1 14.65a10.24 10.24 0 1 1 19.79-5.3 10.24 10.24 0 0 1-19.78 5.3m6.75-1.8a3.26 3.26 0 1 0 6.3-1.69 3.26 3.26 0 0 0-6.3 1.69'
        fill='currentColor'
      />
      <path
        d='M9.35 2.11a10.2 10.2 0 0 0-7.24 12.54A10.24 10.24 0 1 0 9.35 2.11'
        stroke='currentColor'
      />
      <path d='M11.16 8.86a3.25 3.25 0 0 0-2.3 3.99 3.26 3.26 0 1 0 2.3-4' stroke='currentColor' />
      <path d='M10.25 5.48a6.74 6.74 0 0 0-4.78 8.27' stroke='currentColor' />
      <path d='M13.72 18.41a6.74 6.74 0 0 0 4.78-8.27' stroke='currentColor' />
    </svg>
  )
}
