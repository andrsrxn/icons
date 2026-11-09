import type { Icon } from './types'

export const IconFahrenheit: Icon = ({
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
      data-slot='icon-ui-fahrenheit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='5.4' cy='6.03' r='2.48' fill='currentColor' />
      <circle cx='5.4' cy='6.03' r='2.48' stroke='currentColor' />
      <path
        d='M11.8 20.65V7.55c0-1.88 0-2.82.59-3.4.58-.6 1.52-.6 3.4-.6h5.44'
        stroke='currentColor'
      />
      <path d='M11.8 12.1h7.09' stroke='currentColor' />
    </svg>
  )
}
