import type { Icon } from './types'

export const IconBookBookmark: Icon = ({
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
      data-slot='icon-ui-book-bookmark'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.46 3.27C7.46 2.46 6.8 1.8 6 1.8a2.9 2.9 0 0 0-2.92 2.91v13.73h9.84c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83V7.01c0-1.12 0-1.68-.11-2.14a4 4 0 0 0-2.95-2.95c-.46-.11-1.02-.11-2.15-.11h-.16c-.4 0-.61 0-.78.03a2 2 0 0 0-1.63 1.62c-.03.17-.03.38-.03.79v2.53a1.24 1.24 0 0 1-2.03.96 1.24 1.24 0 0 0-1.59 0c-.8.67-2.03.1-2.03-.96z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M3.08 18.45h9.84c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-.64c0-3.78 0-5.66-1.17-6.83S16.69 1.8 12.92 1.8h-1.84c-3.77 0-5.66 0-6.83 1.17S3.08 6.03 3.08 9.8z'
        stroke='currentColor'
      />
      <path
        d='M3.08 18.45c0 .7 0 1.04.06 1.32a3 3 0 0 0 2.36 2.37c.29.05.63.05 1.32.05h8.1c1.34 0 2.02 0 2.55-.2a3 3 0 0 0 1.68-1.69c.21-.53.21-1.2.21-2.55'
        stroke='currentColor'
      />
      <path
        d='M7.45 2.25v5.12c0 .94 0 1.4.3 1.54.29.14.64-.17 1.35-.78l.63-.53c.32-.28.48-.42.68-.42.19 0 .34.15.65.45l.35.32c.72.68 1.08 1.02 1.38.9.3-.14.3-.63.3-1.63V2.25'
        stroke='currentColor'
      />
    </svg>
  )
}
