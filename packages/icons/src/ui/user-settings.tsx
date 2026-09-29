import type { Icon } from './types'

export const IconUserSettings: Icon = ({
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
      data-slot='icon-ui-user-settings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.55 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c2.89 0 5.43 1.5 6.92 3.8-1.15 2.46.67 3.35 1.55 4.66'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <circle
        cx='18.75'
        cy='18.73'
        r='2.44'
        transform='rotate(-90 18.75 18.73)'
        stroke='currentColor'
      />
      <path d='m16.86 21.98.6-.97' stroke='currentColor' />
      <path d='m16.89 15.47.46.82' stroke='currentColor' />
      <path d='m20.6 22.02-.46-.82' stroke='currentColor' />
      <path d='M20.65 15.48 20 16.52' stroke='currentColor' />
      <path d='m21.21 18.73 1.3-.01' stroke='currentColor' />
      <path d='M15 18.74h1.15' stroke='currentColor' />
      <path d='M15.47 7.99a5.4 5.4 0 0 1-5.4 5.4 5.4 5.4 0 1 1 5.4-5.4' stroke='currentColor' />
      <path d='M1.78 21.62a8.3 8.3 0 0 1 11.28-7.74' stroke='currentColor' />
    </svg>
  )
}
