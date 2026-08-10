import type { Icon } from './types'

export const IconPip: Icon = ({
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
      data-slot='pip'
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
        d='M20.43 9.45c0-1.46 0-2.2-.37-2.7a2 2 0 0 0-.45-.46c-.52-.37-1.25-.37-2.71-.37H7.5c-1.85 0-2.77 0-3.35.58S3.57 8 3.57 9.86v4.28c0 1.86 0 2.78.58 3.36s1.5.58 3.36.58h3.55c.54 0 .8 0 1.03-.06.72-.17 1.3-.73 1.46-1.46.05-.22.05-.5.05-1.03 0-.54 0-.8.06-1.03.17-.73.74-1.3 1.46-1.46.22-.06.5-.06 1.03-.06h.87c1.35 0 2.02 0 2.51-.31q.35-.23.58-.58c.32-.5.32-1.17.32-2.52z'
        fill='currentColor'
      />
      <path
        d='M20.43 15.46v-5.6c0-1.86 0-2.78-.58-3.36s-1.5-.58-3.36-.58H7.51c-1.86 0-2.78 0-3.36.58S3.57 8 3.57 9.86v4.28c0 1.86 0 2.78.58 3.36s1.5.58 3.36.58h8.98m3.94-2.62c0 1.07 0 1.6-.27 1.98q-.15.22-.37.37c-.38.27-.91.27-1.98.27h-2.03c-1.07 0-1.6 0-1.99-.27q-.21-.15-.36-.37c-.27-.38-.27-.91-.27-1.98 0-1.08 0-1.61.27-2q.15-.2.36-.36c.38-.26.92-.26 1.99-.26h2.03c1.07 0 1.6 0 1.98.26q.22.16.37.37c.27.38.27.91.27 1.99Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
