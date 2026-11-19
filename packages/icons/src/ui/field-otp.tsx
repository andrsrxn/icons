import type { Icon } from './types'

export const IconFieldOtp: Icon = ({
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
      data-slot='icon-ui-field-otp'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.35 17.48c1.03 0 1.54 0 1.91-.24q.27-.17.45-.44c.24-.37.24-.89.24-1.91V9.7c0-1.02 0-1.54-.24-1.9a2 2 0 0 0-.45-.45c-.37-.24-.88-.24-1.91-.24s-1.54 0-1.91.24a2 2 0 0 0-.45.44c-.24.37-.24.89-.24 1.91v5.19c0 1.02 0 1.54.24 1.91q.18.27.45.44c.37.24.88.24 1.91.24'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12 17.19c1.03 0 1.54 0 1.91-.24q.27-.18.45-.45c.24-.37.24-.88.24-1.9V9.4c0-1.02 0-1.53-.24-1.9a2 2 0 0 0-.45-.45c-.37-.24-.88-.24-1.91-.24s-1.54 0-1.91.24a2 2 0 0 0-.45.45c-.24.37-.24.88-.24 1.9v5.2c0 1.02 0 1.53.24 1.9q.18.27.45.45c.37.24.88.24 1.91.24'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.65 16.9c1.03 0 1.54 0 1.91-.25q.27-.17.45-.44c.24-.37.24-.89.24-1.91V9.1c0-1.02 0-1.54-.24-1.91a2 2 0 0 0-.45-.44c-.37-.24-.88-.24-1.91-.24s-1.54 0-1.91.24a2 2 0 0 0-.45.44c-.24.37-.24.89-.24 1.91v5.19c0 1.02 0 1.54.24 1.9q.18.29.45.45c.37.24.88.24 1.91.24'
        fill='currentColor'
      />
      <path
        d='M1.75 9.7v5.19c0 1.02 0 1.54.24 1.91q.18.27.45.44c.37.24.88.24 1.91.24s1.54 0 1.91-.24q.27-.17.45-.44c.24-.37.24-.89.24-1.91V9.7c0-1.02 0-1.54-.24-1.9a2 2 0 0 0-.45-.45c-.37-.24-.88-.24-1.91-.24s-1.54 0-1.91.24a2 2 0 0 0-.45.44c-.24.37-.24.89-.24 1.91'
        stroke='currentColor'
      />
      <path
        d='M9.4 9.4v5.2c0 1.02 0 1.53.24 1.9q.18.27.45.45c.37.24.88.24 1.91.24s1.54 0 1.91-.24q.27-.18.45-.45c.24-.37.24-.88.24-1.9V9.4c0-1.02 0-1.53-.24-1.9a2 2 0 0 0-.45-.45c-.37-.24-.88-.24-1.91-.24s-1.54 0-1.91.24a2 2 0 0 0-.45.45c-.24.37-.24.88-.24 1.9'
        stroke='currentColor'
      />
      <path
        d='M17.05 9.11v5.19c0 1.02 0 1.54.24 1.9q.18.29.45.45c.37.24.88.24 1.91.24s1.54 0 1.91-.24q.27-.17.45-.44c.24-.37.24-.89.24-1.91V9.1c0-1.02 0-1.54-.24-1.91a2 2 0 0 0-.45-.44c-.37-.24-.88-.24-1.91-.24s-1.54 0-1.91.24a2 2 0 0 0-.45.44c-.24.37-.24.89-.24 1.91'
        stroke='currentColor'
      />
    </svg>
  )
}
