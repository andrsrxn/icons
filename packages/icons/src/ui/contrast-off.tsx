import type { Icon } from './types'

export const IconContrastOff: Icon = ({
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
      data-slot='icon-ui-contrast-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0M12 18.68V5.32a6.68 6.68 0 0 1 0 13.36'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M4.65 4.9A10.22 10.22 0 0 0 19.1 19.34' stroke='currentColor' />
      <path
        d='M12 8.31c0-.97 0-2.35.4-2.65.42-.3.8-.18 1.57.06a6.6 6.6 0 0 1 4.1 8.83'
        stroke='currentColor'
      />
      <path
        d='M12 12v4.58c0 .98 0 1.46.4 1.76.42.3.8.18 1.57-.06q1.45-.46 2.53-1.48'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        d='M7.54 2.68a10.4 10.4 0 0 1 14.68 9.5c0 1.38-.35 2.92-.92 4.18'
        stroke='currentColor'
      />
    </svg>
  )
}
