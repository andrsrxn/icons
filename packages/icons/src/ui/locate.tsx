import type { Icon } from './types'

export const IconLocate: Icon = ({
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
      data-slot='icon-ui-locate'
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
        d='M5.17 12a6.83 6.83 0 1 0 13.66 0 6.83 6.83 0 0 0-13.66 0M12 15.12a3.12 3.12 0 1 1 0-6.24 3.12 3.12 0 0 1 0 6.24'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='7.02' transform='rotate(90 12 12)' stroke='currentColor' />
      <circle cx='12' cy='12' r='3' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M19.02 12H22' stroke='currentColor' />
      <path d='M2 12h2.98' stroke='currentColor' />
      <path d='M12 5V2' stroke='currentColor' />
      <path d='M12 22v-2.98' stroke='currentColor' />
    </svg>
  )
}
