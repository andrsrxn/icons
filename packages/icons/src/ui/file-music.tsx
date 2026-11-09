import type { Icon } from './types'

export const IconFileMusic: Icon = ({
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
      data-slot='icon-ui-file-music'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.7 22.25c-3.77 0-5.66 0-6.83-1.17S3.7 18.02 3.7 14.25v-4.5c0-3.74 0-5.61 1.16-6.78C6 1.8 7.88 1.78 11.62 1.74l1.7-.02v6.81h6.77v6.86l-1.51-.64-.25 4.18-3.58-.2-.17 3.52z'
        fill='currentColor'
      />
      <path
        d='M20.1 11.06c0-1.62 0-2.42-.3-3.15l-.04-.09c-.31-.72-.9-1.28-2.05-2.4l-.61-.6-.84-.85c-.97-.96-1.46-1.45-2.05-1.74l-.47-.2c-.63-.2-1.31-.2-2.68-.2-3.15 0-4.73 0-5.81.83a4 4 0 0 0-.71.71C3.7 4.46 3.7 6.03 3.7 9.18v6.29c0 2.6 0 3.9.58 4.86a4 4 0 0 0 1.34 1.34c.96.58 2.26.58 4.87.58'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <path d='M18.3 20.53a1.97 1.97 0 1 0-3.95 0 1.97 1.97 0 0 0 3.94 0' stroke='currentColor' />
      <path
        d='m20.64 15.76-.72-.58c-.7-.55-1.06-.83-1.34-.7-.28.15-.28.6-.28 1.49v4.7'
        stroke='currentColor'
      />
    </svg>
  )
}
