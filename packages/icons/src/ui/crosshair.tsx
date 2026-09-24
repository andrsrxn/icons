import type { Icon } from './types'

export const IconCrosshair: Icon = ({
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
      data-slot='icon-ui-crosshair'
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
        d='M1.66 12a10.34 10.34 0 1 0 20.68 0 10.34 10.34 0 0 0-20.68 0'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.34' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M19.26 12h3.08' stroke='currentColor' />
      <path d='M1.66 12h3.08' stroke='currentColor' />
      <path d='M12 4.76v-3.1' stroke='currentColor' />
      <path d='M12 22v-2.98' stroke='currentColor' />
      <path d='M12 14.88V9.06' stroke='currentColor' />
      <path d='M14.92 11.97H9.09' stroke='currentColor' />
    </svg>
  )
}
