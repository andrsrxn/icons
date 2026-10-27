import type { Icon } from './types'

export const IconContainerCuboidOff: Icon = ({
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
      data-slot='icon-ui-container-cuboid-off'
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
        d='m17.44 4.21 1.87 1.11c1.43.86 2.15 1.28 2.54 1.97.4.7.4 1.53.4 3.2v1.6c0 2.02 0 3.04-.54 3.81s-1.5 1.12-3.4 1.82L11.6 20.2c-1.45.53-2.17.8-2.9.7s-1.36-.54-2.61-1.42l-2-1.4c-1.26-.88-1.89-1.32-2.23-1.97s-.34-1.41-.34-2.95V11.5c0-2.13 0-3.2.59-3.99.58-.8 1.6-1.1 3.64-1.74l6.85-2.12c1.25-.4 1.88-.59 2.51-.51s1.2.41 2.33 1.08'
        stroke='currentColor'
      />
      <path d='M8.77 11.7 2.48 7.39' stroke='currentColor' />
      <path d='M8.77 20.67V11.7' stroke='currentColor' />
      <path d='M21.52 7.1 8.77 11.7' stroke='currentColor' />
      <path d='M12.16 13.79v3.14' stroke='currentColor' />
      <path d='M15.82 12.38v3.14' stroke='currentColor' />
      <path d='M19.24 11.2v3.14' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
