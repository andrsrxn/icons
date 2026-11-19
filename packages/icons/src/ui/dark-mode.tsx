import type { Icon } from './types'

export const IconDarkMode: Icon = ({
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
      data-slot='icon-ui-dark-mode'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.76 12A4.9 4.9 0 0 0 12 7.24V1.78a10.22 10.22 0 1 1 0 20.44V16.8a4.9 4.9 0 0 0 4.76-4.8'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path opacity='.2' d='M12 7.23a4.77 4.77 0 1 0 0 9.54z' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <circle cx='12' cy='12' r='4.77' stroke='currentColor' />
      <path d='M12 1.97v20.06' stroke='currentColor' />
    </svg>
  )
}
