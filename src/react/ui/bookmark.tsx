import type { Icon } from './types'

export const IconBookmark: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-bookmark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.86 6.77c0-1.88 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59h6.28c1.89 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41V18.5c0 1.6 0 2.4-.52 2.68-.51.29-1.19-.14-2.54-.99l-1.95-1.22C13.09 18.32 12.58 18 12 18s-1.1.32-2.13.97l-1.95 1.22c-1.35.85-2.03 1.28-2.54.99s-.52-1.08-.52-2.68z'
        fill='currentColor'
      />
      <path
        d='M4.78 8.77c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h2.44c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.21c0 2.56 0 3.84-.75 4.27l-.25.12c-.81.29-1.79-.54-3.74-2.2-1.13-.95-1.7-1.43-2.37-1.47h-.22c-.67.04-1.24.52-2.37 1.48-1.95 1.65-2.93 2.48-3.74 2.19l-.25-.12c-.75-.43-.75-1.71-.75-4.27z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
