import type { Icon } from './types'

export const IconBookOpen: Icon = ({
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
      data-slot='icon-ui-book-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.13 3.44c2.04 0 3.43.4 4.25.73.36.16.54.23.7.48.18.25.18.5.18.99v12.13c0 1.26 0 1.9-.35 2.2s-1.03.2-2.4-.01a16 16 0 0 0-4.77 0c-1.36.2-2.05.3-2.4 0-.34-.3-.34-.93-.34-2.19V5.64c0-.5 0-.74.17-.99s.35-.32.71-.48c.82-.33 2.2-.73 4.25-.73'
        fill='currentColor'
      />
      <path
        d='M6.87 3.12c2.2 0 3.65.59 4.43 1.03.28.16.43.24.56.48s.14.44.14.86v12.25c0 1.27 0 1.9-.37 2.2s-1.04.17-2.38-.1c-.77-.16-1.6-.28-2.38-.28s-1.6.12-2.38.27c-1.34.28-2.01.41-2.38.11s-.37-.93-.37-2.2V6.35c0-.82 0-1.24.34-1.74s.6-.62 1.14-.83a10 10 0 0 1 3.65-.66'
        stroke='currentColor'
      />
      <path
        d='M17.13 3.12c2.2 0 3.64.59 4.42 1.03.3.16.44.24.57.48.14.23.14.44.14.86v12.25c0 1.27 0 1.9-.37 2.2s-1.04.17-2.38-.1c-.77-.16-1.61-.28-2.38-.28s-1.61.12-2.38.27c-1.34.28-2.01.41-2.38.11s-.37-.93-.37-2.2V6.35c0-.82 0-1.24.34-1.74s.6-.62 1.13-.83a10 10 0 0 1 3.66-.66'
        stroke='currentColor'
      />
    </svg>
  )
}
