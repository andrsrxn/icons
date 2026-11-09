import type { Icon } from './types'

export const IconOpacity: Icon = ({
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
      data-slot='icon-ui-opacity'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='m2.09 9.55 12.27 12.27' stroke='currentColor' />
      <path d='m5.03 4.74 14.25 14.24' stroke='currentColor' />
      <path d='M10.13 1.96 21.98 13.8' stroke='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
    </svg>
  )
}
