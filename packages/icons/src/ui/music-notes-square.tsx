import type { Icon } from './types'

export const IconMusicNotesSquare: Icon = ({
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
      data-slot='icon-ui-music-notes-square'
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
        d='M15.4 2.6c2.82 0 4.23 0 5.11.89.88.88.88 2.29.88 5.12v6.78c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88H8.61c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12V8.61c0-2.83 0-4.24.88-5.12S5.78 2.6 8.6 2.6zm2.09 12.78a1.84 1.84 0 1 1-3.68 0 1.84 1.84 0 0 1 3.68 0m-9.93 3.04a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68m3.97-8.75a1.38 1.38 0 1 1-.86-2.62l4.36-1.42a1.35 1.35 0 0 1 .85 2.57z'
        fill='currentColor'
      />
      <path
        d='M9.4 16.58a1.83 1.83 0 0 1-1.85 1.84 1.84 1.84 0 1 1 1.84-1.84'
        stroke='currentColor'
      />
      <path
        d='M17.48 15.38a1.83 1.83 0 0 1-1.83 1.84 1.84 1.84 0 1 1 1.83-1.84'
        stroke='currentColor'
      />
      <path
        d='M17.48 15.46v-6c0-1.86 0-2.79-.46-3.35a2 2 0 0 0-.83-.58c-.68-.26-1.56.05-3.32.67-1.41.5-2.12.74-2.6 1.23a3 3 0 0 0-.58.8c-.3.62-.3 1.37-.3 2.87v5.36'
        stroke='currentColor'
      />
      <path d='m9.4 10.59 7.84-2.9' stroke='currentColor' />
      <rect
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
      />
    </svg>
  )
}
