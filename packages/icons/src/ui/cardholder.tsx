import type { Icon } from './types'

export const IconCardholder: Icon = ({
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
      data-slot='icon-ui-cardholder'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.58 2.42c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17zm.25 10.11a2.7 2.7 0 0 0 1.96-4.57l-.16-.16a3.3 3.3 0 0 0-2.36-1.02h-2.58c-.9 0-1.75.37-2.37 1.02l-.15.16a2.71 2.71 0 0 0 1.97 4.57z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M16.49 12.58v-1.33c0-1.39 0-2.08-.23-2.63a3 3 0 0 0-1.63-1.64c-.55-.22-1.24-.22-2.63-.22s-2.08 0-2.63.22a3 3 0 0 0-1.63 1.64c-.23.55-.23 1.24-.23 2.63v1.33'
        stroke='currentColor'
      />
      <path d='M18.34 12.58H5.66' stroke='currentColor' />
      <path d='M16.71 16.41H7.29' stroke='currentColor' />
    </svg>
  )
}
