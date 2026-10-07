import type { Icon } from './types'

export const IconMusicNote: Icon = ({
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
      data-slot='icon-ui-music-note'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M19.95 3.98 18.4 7.66l-6.7-1.33.76-4.49z' fill='currentColor' />
      <path
        opacity='.2'
        d='M11.58 18.56a3.76 3.76 0 1 1-7.53 0 3.76 3.76 0 0 1 7.53 0'
        fill='currentColor'
      />
      <path
        d='M11.57 18.56a3.75 3.75 0 0 1-3.76 3.76 3.76 3.76 0 1 1 3.76-3.76'
        stroke='currentColor'
      />
      <path
        d='m11.58 18.56.02-12.22m0 0V5.29c-.02-1.86-.02-2.79.59-3.24.6-.45 1.5-.19 3.27.35l3.6 1.09.06.02a1 1 0 0 1 .68.98v.34a3 3 0 0 1-3.68 2.78l-.33-.09z'
        stroke='currentColor'
      />
    </svg>
  )
}
