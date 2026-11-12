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
        opacity='.2'
        d='M3.04 9.74c0-3.77 0-5.66 1.17-6.83 1.18-1.17 3.06-1.17 6.83-1.17H13c3.77 0 5.66 0 6.83 1.17S21 5.97 21 9.74v.75c0 3.78 0 5.66-1.17 6.83S16.77 18.5 13 18.5H3.04zm10.83 5.6-.34-4.6 2.4-.12 1.4 2.07-1.18 2.54zm-3.52-4.6-.13 4.8-2.47-.31-1.21-2.71 1.48-2.12z'
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
      <path
        d='M6.72 13.11V9.33c0-3.03 2.65-4.68 5.27-4.68s5.29 1.65 5.29 4.68v3.78'
        stroke='currentColor'
      />
      <path
        d='M6.72 13.07a2.5 2.5 0 0 0 2.52 2.51h.16a1 1 0 0 0 1-1v-3.03a1 1 0 0 0-1-1h-.16a2.5 2.5 0 0 0-2.52 2.52'
        stroke='currentColor'
      />
      <path
        d='M13.6 14.46v-3.02a1 1 0 0 1 1-1h.16a2.52 2.52 0 1 1 0 5.03h-.16a1 1 0 0 1-1-1'
        stroke='currentColor'
      />
    </svg>
  )
}
