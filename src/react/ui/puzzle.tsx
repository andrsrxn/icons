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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m14.68 6.21-.03.39c-.05.37.2.78.58.78 1.52 0 2.28 0 2.76.47.47.47.47 1.23.47 2.76 0 .49-.52.82-1.01.8h-.1a2.68 2.68 0 1 0 .6 5.3c.25-.06.51.1.51.36 0 1.52 0 2.28-.47 2.75-.48.48-1.24.48-2.76.48H8.77c-1.52 0-2.28 0-2.76-.48-.47-.47-.47-1.23-.47-2.75V10.6c0-1.53 0-2.29.47-2.76.48-.47 1.24-.47 2.76-.47.38 0 .63-.4.58-.78l-.03-.39a2.68 2.68 0 0 1 5.36 0'
        fill='currentColor'
      />
      <path
        clipRule='evenodd'
        d='m14.68 6.21-.03.39c-.05.37.2.78.58.78 1.52 0 2.28 0 2.76.47.47.47.47 1.23.47 2.76 0 .49-.52.82-1.01.8h-.1a2.68 2.68 0 1 0 .6 5.3c.25-.06.51.1.51.36 0 1.52 0 2.28-.47 2.75-.48.48-1.24.48-2.76.48H8.77c-1.52 0-2.28 0-2.76-.48-.47-.47-.47-1.23-.47-2.75V10.6c0-1.53 0-2.29.47-2.76.48-.47 1.24-.47 2.76-.47.38 0 .63-.4.58-.78l-.03-.39a2.68 2.68 0 0 1 5.36 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
