import type { Icon } from './types'

export const IconBookBookmark: Icon = ({
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
      data-slot='icon-ui-book-bookmark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.46 4v-.34A2 2 0 0 0 5.6 1.8h-.68A2 2 0 0 0 3.1 3.66l-.01.33v10.46c0 1.89 0 2.83.59 3.41.58.6 1.52.6 3.41.6h9.84c1.89 0 2.83 0 3.41-.6.59-.58.59-1.52.59-3.4V5.7c0-1.8 0-2.69-.53-3.26l-.11-.11c-.57-.53-1.47-.53-3.26-.53h-1.47c-.4 0-.61 0-.78.03a2 2 0 0 0-1.63 1.62c-.03.17-.03.38-.03.79v2.53a1.24 1.24 0 0 1-2.03.96 1.24 1.24 0 0 0-1.59 0c-.8.67-2.03.1-2.03-.96z'
        fill='currentColor'
      />
      <path
        d='M3.08 7.8c0-2.82 0-4.24.88-5.12s2.3-.87 5.12-.87h5.84c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v4.64c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H3.08z'
        stroke='currentColor'
      />
      <path
        d='M3.08 18.45c0 1.64 0 2.46.45 3l.28.3c.56.44 1.38.44 3.01.44h8.8c1.63 0 2.45 0 3-.45a2 2 0 0 0 .29-.28c.45-.55.45-1.37.45-3'
        stroke='currentColor'
      />
      <path
        d='M7.45 2.25v5.12c0 .94 0 1.4.3 1.54.29.14.64-.17 1.35-.78l.63-.53c.32-.28.48-.42.68-.42.19 0 .34.15.65.45l.35.32c.72.68 1.08 1.02 1.38.9.3-.14.3-.63.3-1.63V2.25'
        stroke='currentColor'
      />
    </svg>
  )
}
