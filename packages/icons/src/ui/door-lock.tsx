import type { Icon } from './types'

export const IconDoorLock: Icon = ({
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
      data-slot='icon-ui-door-lock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M5.11 2.68H18.9V15.7h-6.42v5.7H5.11z' fill='currentColor' />
      <path
        d='M18.89 9.31v-.63c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H11.1c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v12.44'
        stroke='currentColor'
      />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path
        d='M14.45 21.39h3.8c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7v-1.82c0-.95 0-1.42-.3-1.71-.29-.3-.76-.3-1.7-.3h-3.8c-.95 0-1.42 0-1.71.3s-.3.76-.3 1.7v1.83c0 .94 0 1.41.3 1.7s.76.3 1.7.3'
        stroke='currentColor'
      />
      <path d='m14.2 15.57.2-1.66a1.99 1.99 0 0 1 3.95.02l.2 1.64' stroke='currentColor' />
    </svg>
  )
}
