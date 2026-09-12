import type { Icon } from './types'

export const IconMusicNotes: Icon = ({
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
      data-slot='icon-ui-music-notes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='3.97'
        height='11.92'
        rx='1'
        transform='scale(-1 1)rotate(-72.37 -6.06 17.17)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.46 19.07a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.48 17.28a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='currentColor'
      />
      <path
        d='M8.46 19.07a2.7 2.7 0 0 1-2.73 2.73 2.73 2.73 0 1 1 2.73-2.73'
        stroke='currentColor'
      />
      <path
        d='M20.48 17.28a2.7 2.7 0 0 1-2.73 2.73 2.73 2.73 0 1 1 2.73-2.73'
        stroke='currentColor'
      />
      <path
        d='M20.48 17.4V6.89c0-2.57 0-3.86-.85-4.45-.84-.6-2.05-.18-4.47.67l-2.68.94c-1.94.68-2.91 1.01-3.47 1.8-.55.77-.55 1.8-.55 3.86v9.18'
        stroke='currentColor'
      />
      <path d='m8.46 10.17 11.66-4.3' stroke='currentColor' />
    </svg>
  )
}
