import type { Icon } from './types'

export const IconFolderHeart: Icon = ({
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
      data-slot='icon-ui-folder-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.4 14.36a2.13 2.13 0 0 0-1.72 3.57l2.1 2.28H7.7c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V7.47c0-.66 0-.99.05-1.26a3 3 0 0 1 2.4-2.4c.27-.05.6-.05 1.25-.05h1.07c1.09 0 1.63 0 2.14.18.5.19.91.54 1.75 1.25l.4.34c.83.7 1.24 1.06 1.74 1.25s1.05.18 2.14.18h1.6c2.82 0 4.24 0 5.11.88s.88 2.3.88 5.12v1.22l-3.34.26h-.47z'
        fill='currentColor'
      />
      <path
        d='M22.23 10.92c0-.92 0-1.38-.1-1.76a3 3 0 0 0-2.12-2.13c-.38-.1-.85-.1-1.77-.1H14.2c-1.04 0-1.56 0-2.04-.17l-.22-.08c-.47-.2-.85-.56-1.61-1.27S9.18 4.35 8.72 4.14l-.22-.08c-.48-.17-1-.17-2.04-.17h-2.2A2.57 2.57 0 0 0 1.7 6.46v7.75c0 2.82 0 4.24.87 5.12.88.88 2.3.88 5.13.88h5'
        stroke='currentColor'
      />
      <path
        d='M20.59 13.96c-.98 0-1.7.74-1.92 1.1a2.4 2.4 0 0 0-1.93-1.1c-1.22 0-2.15 1.4-1.75 2.88s2.74 2.69 3.68 3.74c.93-1.05 3.28-2.26 3.67-3.74s-.52-2.88-1.75-2.88'
        stroke='currentColor'
      />
    </svg>
  )
}
