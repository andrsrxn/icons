import type { Icon } from './types'

export const IconBluetooth: Icon = ({
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
      data-slot='icon-ui-bluetooth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.55 17.25 17.31 8c1.02-.75 1.54-1.12 1.53-1.63 0-.51-.51-.88-1.54-1.62L14.83 3c-1.38-.99-2.08-1.48-2.62-1.2s-.54 1.13-.54 2.83v14.76c0 1.7 0 2.55.54 2.83s1.24-.21 2.62-1.2l2.46-1.76c1.03-.74 1.55-1.1 1.55-1.62 0-.51-.51-.88-1.54-1.63L4.55 6.81'
        stroke='currentColor'
      />
      <path opacity='.2' d='M19.29 6.37 11.67 12l.52-10.14z' fill='currentColor' />
      <path opacity='.2' d='M19.29 17.63 11.67 12l.52 10.14z' fill='currentColor' />
    </svg>
  )
}
