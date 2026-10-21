import type { Icon } from './types'

export const IconChampagne: Icon = ({
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
      data-slot='icon-ui-champagne'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.74 8.54c.36-.36.53-.54.61-.74a1 1 0 0 0 0-.7c-.08-.2-.25-.38-.6-.74l-1.2-1.19a3 3 0 0 0-.75-.62 1 1 0 0 0-.69 0c-.2.08-.39.26-.75.62l-.15.14a1 1 0 0 1-.3.18l-3.4 1.56c-1.05.48-1.57.72-1.69 1.19s.24.93.95 1.84l.52.68c.5.66.76 1 .74 1.37s-.32.67-.91 1.26l-2.36 2.36c-.58.58-.87.88-1.25.9-.37.03-.7-.22-1.36-.72l-1.33-1c-.66-.49-1-.74-1.37-.71s-.66.32-1.24.9l-.21.21c-.67.67-1 1-1 1.42s.33.74 1 1.41l3.86 3.87c.67.66 1 1 1.42 1s.74-.34 1.41-1l6.97-6.97q.19-.18.25-.28.08-.1.17-.34l2.34-5.42.08-.19.1-.14z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.93 14.79c-1.5 1.69-3.5 3.7-5.2 5.35-1.23 1.21-1.85 1.81-2.6 2.02a3 3 0 0 1-1.6-.01c-.76-.22-1.38-.84-2.63-2.09-1.22-1.22-1.84-1.83-2.05-2.58a3 3 0 0 1-.01-1.6c.2-.75.78-1.35 1.95-2.56A81 81 0 0 1 9.23 8.1c2.02-1.72 3.81-1.17 5.96-2.7.9-.64 1.9-1.63 2.72-2.5.53-.56.79-.84 1.04-.96q.62-.3 1.26-.02c.26.1.51.36 1.02.87s.76.77.88 1.02q.28.64-.02 1.26c-.12.25-.4.52-.97 1.04a20 20 0 0 0-2.5 2.72c-1.52 2.15-.93 3.98-2.7 5.96'
        stroke='currentColor'
      />
      <path
        d='m3.5 13.8.93.94c1.3 1.3 1.95 1.96 2.76 1.97h.07c.81-.01 1.46-.66 2.76-1.97 1.3-1.3 1.96-1.95 1.97-2.76v-.07c-.01-.8-.66-1.46-1.97-2.76l-.93-.94'
        stroke='currentColor'
      />
      <path d='M19.55 7.53 16.5 4.49' stroke='currentColor' />
      <path
        d='M13.5 2.01a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M22.5 10.22a.47.47 0 1 1-.95 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.28 14.72a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.63 3.34a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
