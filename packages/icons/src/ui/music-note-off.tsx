import type { Icon } from './types'

export const IconMusicNoteOff: Icon = ({
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
      data-slot='icon-ui-music-note-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M19.95 3.98 18.4 7.66l-6.7-1.33.76-4.49z' fill='currentColor' />
      <path
        opacity='.2'
        d='M11.58 18.56a3.76 3.76 0 1 1-7.53 0 3.76 3.76 0 0 1 7.53 0'
        fill='currentColor'
      />
      <path d='M11.57 18.56a3.76 3.76 0 1 0-7.52 0 3.76 3.76 0 0 0 7.52 0' stroke='currentColor' />
      <path
        d='M11.6 6.34V5.29c-.02-1.86-.02-2.79.59-3.24.6-.45 1.5-.19 3.27.35l3.6 1.09h0l.06.02a1 1 0 0 1 .68.98v.34a3 3 0 0 1-3.68 2.78l-.33-.09zm0 0v1.95'
        stroke='currentColor'
      />
      <path d='M11.58 18.56v-6.8' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
