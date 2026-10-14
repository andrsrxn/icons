import type { Icon } from './types'

export const IconWheel: Icon = ({
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
      data-slot='icon-ui-wheel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12' r='2.68' fill='currentColor' />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.34a10.34 10.34 0 1 0 0-20.68 10.34 10.34 0 0 0 0 20.68M18.26 12a6.26 6.26 0 1 1-12.52 0 6.26 6.26 0 0 1 12.52 0'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='2.68' stroke='currentColor' />
      <circle cx='12' cy='12' r='6.25' stroke='currentColor' />
      <circle cx='12' cy='12' r='10.34' stroke='currentColor' />
      <path d='m16.34 16.35-2.41-2.41' stroke='currentColor' />
      <path d='m10.06 10.07-2.4-2.4' stroke='currentColor' />
      <path d='m7.65 16.35 2.45-2.45' stroke='currentColor' />
      <path d='m13.97 10.04 2.37-2.38' stroke='currentColor' />
    </svg>
  )
}
