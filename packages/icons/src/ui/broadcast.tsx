import type { Icon } from './types'

export const IconBroadcast: Icon = ({
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
      data-slot='icon-ui-broadcast'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12.14'
        cy='12'
        r='2.79'
        transform='rotate(90 12.14 12)'
        fill='currentColor'
      />
      <circle cx='12.14' cy='12' r='2.79' transform='rotate(90 12.14 12)' stroke='currentColor' />
      <path d='M7.18 7.5A6.4 6.4 0 0 0 5.62 12c0 1.86.41 3.04 1.56 4.5' stroke='currentColor' />
      <path d='M16.94 7.5a6.4 6.4 0 0 1 1.57 4.5 6.4 6.4 0 0 1-1.57 4.5' stroke='currentColor' />
      <path d='M4.27 4.68A10.5 10.5 0 0 0 1.73 12c0 3.03.66 4.95 2.54 7.32' stroke='currentColor' />
      <path
        d='M19.86 4.68A10.5 10.5 0 0 1 22.4 12c0 3.03-.67 4.95-2.54 7.32'
        stroke='currentColor'
      />
    </svg>
  )
}
