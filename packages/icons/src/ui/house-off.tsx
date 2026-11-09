import type { Icon } from './types'

export const IconHouseOff: Icon = ({
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
      data-slot='icon-ui-house-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.24 18.72c-.02.74-.02 1.1.18 1.38s.56.38 1.27.58l1.2.35c1.15.32 1.72.49 2.12.2.4-.3.4-.9.43-2.08l.07-2.91c.02-.93.03-1.39.32-1.67s.75-.29 1.68-.29h1.52l1.43.03c.93.01 1.4.02 1.68.31.28.3.28.76.28 1.68v3.34c0 .69 0 1.03.14 1.27a1 1 0 0 0 .62.46c.27.07.6-.03 1.26-.23 1.18-.35 1.76-.52 2.2-.86a3 3 0 0 0 .98-1.3c.2-.52.2-1.13.2-2.36V9.88c0-.44 0-.66-.09-.85-.08-.2-.25-.34-.57-.64l-2.77-2.5c-2.54-2.3-3.82-3.45-5.36-3.45S9.22 3.6 6.67 5.9L4.08 8.23c-.32.29-.47.43-.56.62s-.09.4-.1.83z'
        fill='currentColor'
      />
      <path
        d='M8.62 21.43V18c0-1.88 0-2.83.58-3.41.59-.59 1.53-.59 3.42-.59h1.03'
        stroke='currentColor'
      />
      <path d='M15.38 15.58v5.85' stroke='currentColor' />
      <path d='m2.76 2.74 18.5 18.52' stroke='currentColor' />
      <path
        d='m6.13 6.38-.4.37C4.5 7.92 3.88 8.5 3.56 9.25c-.33.77-.33 1.61-.33 3.31v1.08c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.58c3.77 0 5.66 0 6.83-1.17q.15-.15.27-.31'
        stroke='currentColor'
      />
      <path
        d='m20.8 16.96.01-3.32v0-1.08c0-1.7 0-2.54-.32-3.3-.33-.76-.95-1.34-2.18-2.5L17.52 6c-2.6-2.46-3.9-3.7-5.5-3.7-1.04 0-1.96.54-3.2 1.6l-.45.42'
        stroke='currentColor'
      />
    </svg>
  )
}
