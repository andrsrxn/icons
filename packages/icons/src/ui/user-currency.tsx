import type { Icon } from './types'

export const IconUserCurrency: Icon = ({
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
      data-slot='icon-ui-user-currency'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 8.3-8.3c.87 0 2.18.29 3.23.73' stroke='currentColor' />
      <path
        d='M21.66 15.67c-.22-.69-1.25-1.21-2.47-1.21-1.21 0-2.54.45-2.54 1.83 0 2.98 5.01.7 5.01 3.46 0 1.27-1.23 1.75-2.47 1.75s-2.14-.53-2.54-1.23'
        stroke='currentColor'
      />
      <path d='M19.14 22.58v-.95' stroke='currentColor' />
      <path d='M19.14 14.3v-.92' stroke='currentColor' />
      <path
        opacity='.2'
        d='M18.38 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c4.58 0 8.3 3.79 8.3 8.46'
        fill='currentColor'
      />
    </svg>
  )
}
