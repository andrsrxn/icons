import type { Icon } from './types'

export const IconBookHeart: Icon = ({
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
      data-slot='icon-ui-book-heart'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M12 8a2.7 2.7 0 0 1 2.13-1.23c1.37 0 2.4 1.56 1.95 3.2s-3.04 2.98-4.08 4.15c-1.04-1.17-3.64-2.5-4.08-4.15-.44-1.64.58-3.2 1.95-3.2 1.09 0 1.87.82 2.13 1.23'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M21 9.74c0-3.77 0-5.66-1.17-6.83S16.77 1.74 13 1.74h-1.96c-3.77 0-5.65 0-6.83 1.17S3.04 5.97 3.04 9.74v8.75H13c3.77 0 5.66 0 6.83-1.17S21 14.27 21 10.5zm-8.95 4.38 4.13-3.81V7.92L14.29 6.6l-2.24.97-2.16-.97-2.12 1.33.42 2.71z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.04 18.5H13c3.77 0 5.66 0 6.83-1.18C21 16.15 21 14.27 21 10.5v-.75c0-3.77 0-5.66-1.17-6.83S16.77 1.74 13 1.74h-1.96c-3.77 0-5.65 0-6.83 1.17S3.04 5.97 3.04 9.74z'
        stroke='currentColor'
      />
      <path
        d='M3.04 18.5c0 .7 0 1.07.06 1.36a3 3 0 0 0 2.34 2.34c.3.06.66.06 1.37.06h8.1c1.42 0 2.13 0 2.68-.23a3 3 0 0 0 1.6-1.6c.24-.56.24-1.27.24-2.69'
        stroke='currentColor'
      />
    </svg>
  )
}
