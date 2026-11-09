import type { Icon } from './types'

export const IconFileClock: Icon = ({
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
      data-slot='icon-ui-file-clock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.7 22.25c-3.77 0-5.66 0-6.83-1.17S3.7 18.02 3.7 14.25v-4.5c0-3.74 0-5.61 1.16-6.78C6 1.8 7.88 1.78 11.62 1.74l1.7-.02v6.81h6.77v6.86l-4.23-.47-2.54 3.9 2.35 3.43z'
        fill='currentColor'
      />
      <path
        d='M20.1 11c0-1.56 0-2.33-.28-3.04l-.08-.2c-.32-.68-.87-1.22-1.98-2.3l-.66-.64-.84-.85c-.97-.96-1.46-1.45-2.05-1.74l-.47-.2c-.63-.2-1.31-.2-2.68-.2-3.15 0-4.73 0-5.81.83a4 4 0 0 0-.71.71C3.7 4.46 3.7 6.03 3.7 9.18v5.93c0 2.94 0 4.42.74 5.46a4 4 0 0 0 .94.94c1.04.74 2.52.74 5.47.74'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <circle cx='17.53' cy='18.62' r='3.81' stroke='currentColor' />
      <path d='M17.46 17.32v1.43l1.06.71' stroke='currentColor' />
    </svg>
  )
}
