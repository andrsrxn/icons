import type { Icon } from './types'

export const IconConnection: Icon = ({
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
      data-slot='icon-ui-connection'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='6.78' cy='17.4' r='4.32' fill='currentColor' />
      <circle opacity='.2' cx='16.8' cy='6.91' r='3.13' fill='currentColor' />
      <circle
        opacity='.2'
        cx='6.04'
        cy='4.63'
        r='2.18'
        transform='rotate(-45 6.04 4.63)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.5'
        cy='18.18'
        r='2.05'
        transform='rotate(45 19.5 18.18)'
        fill='currentColor'
      />
      <circle cx='6.78' cy='17.4' r='4.32' stroke='currentColor' />
      <circle cx='16.8' cy='6.91' r='3.13' stroke='currentColor' />
      <circle
        cx='6.04'
        cy='4.63'
        r='2.18'
        transform='rotate(-45 6.04 4.63)'
        stroke='currentColor'
      />
      <circle
        cx='19.5'
        cy='18.18'
        r='2.05'
        transform='rotate(45 19.5 18.18)'
        stroke='currentColor'
      />
      <path d='m9.95 13.98 4.72-4.71' stroke='currentColor' />
      <path d='M6.04 13.07V6.96' stroke='currentColor' />
      <path d='M11.1 18.18h6.12' stroke='currentColor' />
    </svg>
  )
}
