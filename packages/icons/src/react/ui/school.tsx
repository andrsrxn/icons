import type { Icon } from './types'

export const IconSchool: Icon = ({
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
      data-slot='icon-ui-school'
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
        d='M12 2.27 5.8 6.16v15.31h3.7l.3-5.28 2.26-.49 2.22.5.35 5.27h3.6V6.16zm2.44 6.35c0 1.16-1.11 2.1-2.48 2.1-1.38 0-2.49-.94-2.49-2.1 0-1.15 1.11-2.1 2.49-2.1 1.37 0 2.48.95 2.48 2.1'
        fill='currentColor'
      />
      <path
        d='M18.82 11.1h.64a3 3 0 0 1 2.7 2.71c.02.14.02.31.02.65v1.82c0 2.05 0 3.08-.48 3.82a3 3 0 0 1-.9.9c-.74.47-1.76.47-3.8.47H7c-2.04 0-3.06 0-3.8-.48a3 3 0 0 1-.9-.89c-.48-.74-.48-1.77-.48-3.82v-2.4a3 3 0 0 1 2.79-2.78h.48'
        stroke='currentColor'
      />
      <path
        d='M18.22 21.47V9c0-1.63 0-2.45-.38-3.13s-1.07-1.11-2.47-1.97l-.2-.13c-1.54-.95-2.3-1.42-3.16-1.42-.85 0-1.62.47-3.15 1.42l-.2.13c-1.4.86-2.1 1.29-2.48 1.97S5.8 7.37 5.8 9v12.48'
        stroke='currentColor'
      />
      <path
        d='M14.13 21.47V18.1c0-.57 0-.86-.08-1.09a1.5 1.5 0 0 0-.95-.94c-.23-.08-.51-.08-1.09-.08-.57 0-.86 0-1.09.08-.45.15-.8.5-.95.94-.07.23-.07.52-.07 1.1v3.36'
        stroke='currentColor'
      />
      <ellipse cx='12.01' cy='8.8' rx='2.16' ry='2.09' stroke='currentColor' />
    </svg>
  )
}
