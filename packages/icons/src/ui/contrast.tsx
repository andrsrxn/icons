import type { Icon } from './types'

export const IconContrast: Icon = ({
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
      data-slot='icon-ui-contrast'
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
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0M12 18.68V5.32a6.68 6.68 0 1 1 0 13.36'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M13.97 18.28c-.77.24-1.15.36-1.56.06s-.41-.78-.41-1.76V7.42c0-.98 0-1.46.4-1.76.42-.3.8-.18 1.57.06a6.59 6.59 0 0 1 0 12.56'
        stroke='currentColor'
      />
    </svg>
  )
}
