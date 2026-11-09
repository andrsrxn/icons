import type { Icon } from './types'

export const IconBookHeadphones: Icon = ({
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
      data-slot='icon-ui-book-headphones'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M10.06 14v-2.7a.83.83 0 0 0-.83-.83h-.3a2.18 2.18 0 1 0 0 4.36h.3c.46 0 .83-.37.83-.83'
        stroke='currentColor'
      />
      <path
        d='m8.12 10.47.11-1.5c.06-.71.08-1.07.17-1.37a3 3 0 0 1 2.27-2.1c.3-.07.66-.07 1.38-.07.73 0 1.1 0 1.4.06a3 3 0 0 1 2.28 2.16c.08.3.1.67.14 1.4l.07 1.42'
        stroke='currentColor'
      />
      <path
        d='M13.89 14v-2.7c0-.46.37-.83.83-.83h.3a2.18 2.18 0 1 1 0 4.36h-.3a.83.83 0 0 1-.83-.83'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M3.04 9.74c0-3.77 0-5.66 1.17-6.83 1.18-1.17 3.06-1.17 6.83-1.17H13c3.77 0 5.66 0 6.83 1.17S21 5.97 21 9.74v.75c0 3.78 0 5.66-1.17 6.83S16.77 18.5 13 18.5H3.04zm11.18 5.21-.25-4.33h1.96l1.4 2.07-1.4 2.26zM9.84 10.4v4.55H7.68l-1.14-2.43 1.48-2.12z'
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
