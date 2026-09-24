import type { Icon } from './types'

export const IconVpn: Icon = ({
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
      data-slot='icon-ui-vpn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.73 4.37a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.73 19.63a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7 11.9a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.46 11.9a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path d='M14.73 4.37A2.7 2.7 0 0 1 12 7.1a2.73 2.73 0 1 1 2.73-2.73' stroke='currentColor' />
      <path
        d='M14.73 19.63A2.7 2.7 0 0 1 12 22.36a2.73 2.73 0 1 1 2.73-2.73'
        stroke='currentColor'
      />
      <path d='M7 11.9a2.7 2.7 0 0 1-2.73 2.73A2.73 2.73 0 1 1 7 11.9' stroke='currentColor' />
      <path
        d='M22.46 11.9a2.7 2.7 0 0 1-2.73 2.73 2.73 2.73 0 1 1 2.73-2.73'
        stroke='currentColor'
      />
      <path d='m9.83 6.33-3.5 3.5' stroke='currentColor' />
      <path d='m18 14-3.5 3.5' stroke='currentColor' />
      <path d='M7 11.9h10' stroke='currentColor' />
    </svg>
  )
}
