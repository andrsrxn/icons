import type { Icon } from './types'

export const IconRamMemory: Icon = ({
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
      data-slot='icon-ui-ram-memory'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.03 16.06a2.38 2.38 0 0 0 2.26-3.13l-.19-.54a6 6 0 0 1-.46-1.92c.01-.46.16-.9.46-1.8l.19-.54A2.38 2.38 0 0 0 20.03 5H3.93a2.35 2.35 0 0 0-2.2 3.16l.2.5c.3.82.44 1.22.48 1.65v.45c-.04.42-.19.82-.49 1.63l-.18.51a2.34 2.34 0 0 0 2.2 3.16z'
        fill='currentColor'
      />
      <path
        d='M20.4 16.06a2.01 2.01 0 0 0 1.52-3.33l-.42-.48-.1-.13a1 1 0 0 1-.2-.5v-2.2a1 1 0 0 1 .3-.65l.4-.43A2 2 0 0 0 20.4 5H3.52A1.93 1.93 0 0 0 2.2 8.34l.32.3q.3.3.31.72v2.18a1 1 0 0 1-.13.35l-.18.23-.48.62a2.05 2.05 0 0 0 1.61 3.32z'
        stroke='currentColor'
      />
      <path
        d='M21 16.06c0 1.36 0 2.03-.4 2.47l-.07.06c-.44.41-1.11.41-2.47.41H5.94c-1.36 0-2.03 0-2.47-.4l-.06-.07C3 18.09 3 17.42 3 16.06'
        stroke='currentColor'
      />
      <path d='M6.33 12.47v-3.8' stroke='currentColor' />
      <path d='M10.1 12.47v-3.8' stroke='currentColor' />
      <path d='M13.9 12.47v-3.8' stroke='currentColor' />
      <path d='M17.67 12.47v-3.8' stroke='currentColor' />
    </svg>
  )
}
