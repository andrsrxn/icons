import type { Icon } from './types'

export const IconFileSparkle: Icon = ({
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
      data-slot='icon-ui-file-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.7 22.25c-3.77 0-5.66 0-6.83-1.17S3.7 18.02 3.7 14.25V6.58c0-.74 0-1.11.05-1.43a4 4 0 0 1 3.28-3.31c.31-.05.68-.06 1.43-.07l1.43-.01a3.4 3.4 0 0 1 3.43 3.39 3.4 3.4 0 0 0 3.38 3.38 3.4 3.4 0 0 1 3.4 3.4v6.67l-2.51-3.28-3.12 3.28 2.27 1.64.85 2.01z'
        fill='currentColor'
      />
      <path
        d='M20.1 11.25v-.14c0-1.67 0-2.5-.32-3.24s-.91-1.33-2.1-2.5l-.58-.55-.84-.85c-.97-.96-1.46-1.45-2.05-1.74l-.47-.2c-.63-.2-1.31-.2-2.68-.2-3.15 0-4.73 0-5.81.83a4 4 0 0 0-.71.71C3.7 4.46 3.7 6.03 3.7 9.18v5.07c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.84 1.17'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <path d='M17.58 14.32c0 1.95-2.1 4.08-4.08 4.08' stroke='currentColor' />
      <path d='M17.58 14.32c0 1.96 2.12 4.08 4.08 4.08' stroke='currentColor' />
      <path d='M17.58 22.47c0-1.92-2.12-4.07-4.08-4.07' stroke='currentColor' />
      <path d='M17.58 22.47c0-1.94 2.14-4.07 4.08-4.07' stroke='currentColor' />
    </svg>
  )
}
