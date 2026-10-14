import type { Icon } from './types'

export const IconSmartVacuumCleaner: Icon = ({
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
      data-slot='icon-ui-smart-vacuum-cleaner'
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
        d='M11.97 2.24a9.76 9.76 0 1 0 0 19.52 9.76 9.76 0 0 0 0-19.52m-3.69 12.5a3.69 3.69 0 1 1 7.38 0 3.69 3.69 0 0 1-7.38 0'
        fill='currentColor'
      />
      <circle cx='11.97' cy='12' r='9.76' transform='rotate(180 11.97 12)' stroke='currentColor' />
      <circle
        cx='11.97'
        cy='14.73'
        r='3.69'
        transform='rotate(180 11.97 14.73)'
        stroke='currentColor'
      />
      <path d='m21.73 1.84-2.33 3.6' stroke='currentColor' />
      <path d='m2.21 1.84 2.33 3.6' stroke='currentColor' />
      <path d='M11.97 7.88V5.45' stroke='currentColor' />
    </svg>
  )
}
