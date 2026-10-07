import type { Icon } from './types'

export const IconRefreshPlus: Icon = ({
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
      data-slot='icon-ui-refresh-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 7.66v8.68' stroke='currentColor' />
      <path d='M7.66 12h8.68' stroke='currentColor' />
      <path
        d='M21.2 8.45c-2.03-3.67-5.44-5.88-9.65-5.88S3.78 4.7 2.49 8.11'
        stroke='currentColor'
      />
      <path
        d='M2.86 15.9a11.2 11.2 0 0 0 9.6 5.9c4.22 0 7.5-1.78 9.04-5.52'
        stroke='currentColor'
      />
      <path
        d='m22.64 6.14-.08.51c-.22 1.4-.33 2.1-.83 2.47-.5.36-1.2.25-2.6.03l-.51-.08'
        stroke='currentColor'
      />
      <path
        d='m1.53 18.4.06-.61c.12-1.41.18-2.12.66-2.51.48-.4 1.18-.34 2.6-.21l.61.05'
        stroke='currentColor'
      />
    </svg>
  )
}
