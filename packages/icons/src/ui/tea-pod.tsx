import type { Icon } from './types'

export const IconTeaPod: Icon = ({
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
      data-slot='icon-ui-tea-pod'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M9.22 9.06c-1.2.56-1.8.85-2.16.83-.36 0-.76-.23-1.56-.67l-1.63-.9a1.45 1.45 0 0 0-1.9 2.08l2.24 3.32c.34.5.51.75.57 1 .07.26.03.65-.04 1.42q-.07.64-.05 1.26c.01.75.02 1.12.3 1.5.28.39.63.5 1.34.74a22.6 22.6 0 0 0 14.38-.12c.75-.27 1.12-.4 1.4-.85s.22-.86.13-1.7c-.55-5-2.63-8.75-8.83-8.75a10 10 0 0 0-4.19.84'
        stroke='currentColor'
      />
      <path d='M18.4 9.18c0-3.17-1.3-5.74-4.87-5.74S8.66 6 8.66 9.18' stroke='currentColor' />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m22 19.25-9.2 1.77-7.87-1.77v-4.22l-2.25-3.18c-.65-.91-.97-1.36-1.01-1.86q-.03-.28.04-.56c.1-.49.49-.9 1.25-1.75L6.93 10l5.87-2.05 6.4 1.89 2.8 4.01z'
        fill='currentColor'
      />
      <path d='M13.53 6.62v3.24' stroke='currentColor' />
    </svg>
  )
}
