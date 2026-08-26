import type { Icon } from './types'

export const IconHeartBreak: Icon = ({
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
      data-slot='ui-icon-heart-break'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.13 4.01c2.36 0 4.1 1.68 4.77 2.65l.09.15.05.19.43 2.18q.05.22.04.32t-.12.3l-1.1 2.37c-.1.22-.16.33-.16.45s.06.22.17.44l1.33 2.53c.07.15.11.22.12.3q.02.1-.02.32l-.4 2.48c-.14.91-.21 1.37-.49 1.47-.27.1-.64-.2-1.38-.83-2.77-2.32-6.95-4.94-7.77-8.02C1.69 7.56 4.02 4 7.13 4'
        fill='currentColor'
      />
      <path
        d='M16.87 4.01a5.8 5.8 0 0 0-3.83 1.6c-.57.51-.85.77-1.04.77s-.47-.26-1.04-.77a5.8 5.8 0 0 0-3.83-1.6c-3.11 0-5.45 3.55-4.44 7.3.9 3.38 5.82 6.2 8.51 8.67.4.37.6.56.8.56s.4-.19.8-.56c2.69-2.48 7.6-5.3 8.51-8.67 1-3.75-1.33-7.3-4.44-7.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.22 5.85a8 8 0 0 1 1.44 2.27c.22.45.33.67.3.93 0 .27-.15.49-.44.93l-1 1.52c-.35.53-.52.8-.52 1.1s.17.56.53 1.1l1.03 1.57c.27.4.4.6.43.83s-.05.46-.2.91l-.84 2.48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
