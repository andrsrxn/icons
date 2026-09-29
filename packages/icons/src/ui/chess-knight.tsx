import type { Icon } from './types'

export const IconChessKnight: Icon = ({
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
      data-slot='icon-ui-chess-knight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        width='3.27'
        height='14'
        rx='1.5'
        transform='matrix(0 1 1 0 4.55 18.97)'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M13.95 3.7c-.2-.76-.3-1.14-.6-1.35-.3-.2-.69-.18-1.47-.12l-3.02.21c-.36.03-.54.04-.7.11-.17.08-.3.2-.56.46L5.2 5.38c-.25.25-.38.37-.45.53-.08.15-.1.33-.13.67l-.5 4.48c-.04.28-.05.42-.03.55s.08.27.2.52l2.68 5.7c.26.55.39.83.63.99.25.15.56.15 1.18.15h4.56c1.65 0 2.47 0 2.75-.53s-.17-1.21-1.08-2.58l-.7-1.05-.17-.26-.1-.3-.13-.5c-.33-1.16-.5-1.75-.2-2.14s.9-.4 2.12-.4h1.29c.52 0 .78 0 1-.12s.36-.33.65-.76l.03-.03c.54-.8.8-1.2.72-1.6-.08-.42-.48-.68-1.3-1.2l-3.29-2.13c-.32-.2-.48-.31-.59-.46a2 2 0 0 1-.25-.7z'
        fill='currentColor'
      />
      <path
        d='M7.05 18.9c-.66-3.01-2.63-4.93-2.57-9.49.07-5.44 4.39-7.65 6.71-7.65h.63c.5 0 .76 0 .96.06.5.14.88.53 1.02 1.02.06.2.06.46.06.96 0 .3 0 .46.03.6q.1.5.5.85c.1.1.24.17.5.32L17.37 7c.74.42 1.1.63 1.3.93q.29.44.24.95c-.03.36-.25.72-.7 1.44-.25.41-.38.61-.55.76a2 2 0 0 1-.54.3c-.22.07-.46.07-.93.07h-2.57c-.71 0-1.06 0-1.4-.07a3 3 0 0 1-1.04-.47c-.28-.19-.51-.45-.99-.97'
        stroke='currentColor'
      />
      <path d='M16.57 18.97c0-.98-.74-2.4-1.94-3.74a4.4 4.4 0 0 1-1.2-3.6' stroke='currentColor' />
    </svg>
  )
}
