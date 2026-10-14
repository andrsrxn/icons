import type { Icon } from './types'

export const IconContainerCuboid: Icon = ({
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
      data-slot='icon-ui-container-cuboid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.75 16.77c.64-.24.96-.35 1.14-.61s.18-.6.18-1.27v-5.4c0-1.26 0-1.9-.42-2.2-.41-.3-1.02-.1-2.22.31L9.6 10.9c-.43.16-.65.23-.87.2s-.42-.14-.81-.38L4.84 8.83c-1.27-.78-1.91-1.17-2.42-.9-.5.26-.54 1-.62 2.5l-.25 4.72c-.03.56-.05.83.07 1.07s.34.39.8.7l5.44 3.67c.42.28.62.42.86.45s.48-.06.95-.23z'
        fill='currentColor'
      />
      <path
        d='M18.31 17.72c1.9-.7 2.86-1.05 3.4-1.82s.54-1.79.54-3.81v-1.6c0-1.67 0-2.5-.4-3.2-.39-.69-1.1-1.11-2.54-1.97l-1.87-1.1c-1.13-.68-1.7-1.02-2.33-1.1-.63-.07-1.26.13-2.51.52L5.75 5.76c-2.04.63-3.06.95-3.64 1.74-.59.8-.59 1.86-.59 4v1.65c0 1.54 0 2.3.34 2.95s.97 1.1 2.22 1.97l2 1.4c1.26.88 1.9 1.32 2.62 1.42s1.45-.17 2.9-.7z'
        stroke='currentColor'
      />
      <path d='M8.77 11.7 2.48 7.39' stroke='currentColor' />
      <path d='M8.77 20.67V11.7' stroke='currentColor' />
      <path d='M21.52 7.1 8.77 11.7' stroke='currentColor' />
      <path d='M12.16 13.79v3.14' stroke='currentColor' />
      <path d='M15.82 12.38v3.14' stroke='currentColor' />
      <path d='M19.24 11.2v3.14' stroke='currentColor' />
    </svg>
  )
}
