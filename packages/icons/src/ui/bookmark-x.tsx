import type { Icon } from './types'

export const IconBookmarkX: Icon = ({
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
      data-slot='icon-ui-bookmark-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m9.17 7.38 5.67 5.68' stroke='currentColor' />
      <path d='m9.16 13.06 5.67-5.68' stroke='currentColor' />
      <path
        opacity='.2'
        d='M4.62 6.41c0-1.88 0-2.83.58-3.41.6-.59 1.53-.59 3.42-.59h6.76c1.89 0 2.83 0 3.42.59.58.58.58 1.53.58 3.41v10.16c0 2.3 0 3.46-.52 4.03a2 2 0 0 1-1.31.65c-.77.06-1.69-.64-3.52-2.04-.77-.59-1.15-.88-1.58-.98a2 2 0 0 0-.87 0c-.43.1-.82.39-1.59.98-1.85 1.41-2.78 2.12-3.56 2.04a2 2 0 0 1-1.28-.63c-.53-.57-.53-1.74-.53-4.06z'
        fill='currentColor'
      />
      <path
        d='M13.72 18.84c-.68-.61-1.02-.92-1.41-1a2 2 0 0 0-.62 0c-.4.08-.73.39-1.41 1-2.04 1.83-3.06 2.75-3.94 2.66A2 2 0 0 1 5.2 21c-.65-.6-.65-1.97-.65-4.7V9.87c0-3.26 0-4.88.89-5.98a4 4 0 0 1 .6-.6c1.1-.89 2.72-.89 5.97-.89s4.88 0 5.98.9a4 4 0 0 1 .6.59c.88 1.1.88 2.72.88 5.98v6.4c0 2.74 0 4.11-.65 4.7a2 2 0 0 1-1.15.52c-.88.09-1.9-.83-3.94-2.66'
        stroke='currentColor'
      />
    </svg>
  )
}
