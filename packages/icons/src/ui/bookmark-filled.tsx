import type { Icon } from './types'

export const IconBookmarkFilled: Icon = ({
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
      data-slot='icon-ui-bookmark-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.75 6.6c0-1.88 0-2.82.58-3.4.59-.6 1.53-.6 3.42-.6h6.5c1.89 0 2.83 0 3.42.6.58.58.58 1.52.58 3.4v12.04c0 1.6 0 2.4-.51 2.69-.52.28-1.2-.14-2.55-1l-2.06-1.29c-1.04-.65-1.55-.97-2.13-.97s-1.1.32-2.13.97l-2.06 1.3c-1.35.85-2.03 1.27-2.55.99-.51-.29-.51-1.09-.51-2.69z'
        fill='currentColor'
      />
      <path
        d='M4.67 8.6c0-2.82 0-4.23.87-5.11.88-.88 2.3-.88 5.13-.88h2.66c2.83 0 4.25 0 5.13.88s.87 2.29.87 5.12v8.43c0 2.65 0 3.98-.79 4.4l-.15.07c-.84.33-1.85-.52-3.87-2.23-1.17-1-1.76-1.5-2.45-1.52h-.14c-.7.03-1.28.52-2.45 1.52-2.02 1.7-3.03 2.56-3.87 2.23l-.15-.07c-.8-.42-.8-1.75-.8-4.4z'
        stroke='currentColor'
      />
    </svg>
  )
}
