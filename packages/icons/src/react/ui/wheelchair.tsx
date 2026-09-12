import type { Icon } from './types'

export const IconWheelchair: Icon = ({
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
      data-slot='icon-ui-wheelchair'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='7.28' cy='16.52' r='5' fill='currentColor' />
      <circle opacity='.2' cx='18.99' cy='18.96' r='2.56' fill='currentColor' />
      <circle cx='7.28' cy='16.52' r='5' stroke='currentColor' />
      <circle cx='18.99' cy='18.96' r='2.56' stroke='currentColor' />
      <path
        d='M7.86 11.53V4.94c0-.43 0-.64-.03-.82a2 2 0 0 0-1.6-1.6c-.18-.04-.4-.04-.83-.04'
        stroke='currentColor'
      />
      <path d='M18.37 7H7.87' stroke='currentColor' />
      <path
        d='M19 15.97v-.23c0-.59 0-.88-.07-1.12a2 2 0 0 0-1.45-1.45c-.24-.06-.53-.06-1.11-.06H11.1'
        stroke='currentColor'
      />
      <path d='M15.78 7v6.11' stroke='currentColor' />
    </svg>
  )
}
