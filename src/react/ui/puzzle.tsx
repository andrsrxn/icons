import type { Icon } from './types'

export const IconPuzzle: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='puzzle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M14.68 6.212c0 .131-.01.26-.028.386-.054.374.2.778.578.778 1.523 0 2.285 0 2.758.473.473.473.473 1.235.473 2.758 0 .49-.522.825-1.01.809a2.68 2.68 0 1 0 .508 5.29c.242-.056.502.112.502.361 0 1.523 0 2.285-.473 2.758-.473.473-1.235.473-2.758.473H8.77c-1.523 0-2.285 0-2.758-.473-.473-.473-.473-1.235-.473-2.758v-6.46c0-1.523 0-2.285.473-2.758.473-.473 1.235-.473 2.758-.473.378 0 .632-.404.578-.778a2.68 2.68 0 1 1 5.33-.387Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.68 6.212c0 .131-.01.26-.028.386-.054.374.2.778.578.778 1.523 0 2.285 0 2.758.473.473.473.473 1.235.473 2.758 0 .49-.522.825-1.01.809a2.68 2.68 0 1 0 .508 5.29c.242-.056.502.112.502.361 0 1.523 0 2.285-.473 2.758-.473.473-1.235.473-2.758.473H8.77c-1.523 0-2.285 0-2.758-.473-.473-.473-.473-1.235-.473-2.758v-6.46c0-1.523 0-2.285.473-2.758.473-.473 1.235-.473 2.758-.473.378 0 .632-.404.578-.778a2.68 2.68 0 1 1 5.33-.387Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
