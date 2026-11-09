import type { Icon } from './types'

export const IconRelocateLeft: Icon = ({
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
      data-slot='icon-ui-relocate-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.18 16.96c0 1.73 0 2.6-.4 3.22a3 3 0 0 1-.73.72c-.62.41-1.49.41-3.22.41s-2.6 0-3.22-.4a3 3 0 0 1-.72-.73c-.4-.62-.4-1.49-.4-3.22s0-2.6.4-3.22q.3-.43.72-.72c.63-.4 1.5-.4 3.22-.4s2.6 0 3.22.4q.44.3.72.72c.41.63.41 1.5.41 3.22'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.52 16.96c0 1.73 0 2.6-.41 3.22a3 3 0 0 1-.72.72c-.63.41-1.5.41-3.22.41s-2.6 0-3.22-.4a3 3 0 0 1-.72-.73c-.41-.62-.41-1.49-.41-3.22s0-2.6.4-3.22q.3-.43.73-.72c.62-.4 1.49-.4 3.22-.4s2.6 0 3.22.4q.43.3.72.72c.4.63.4 1.5.4 3.22'
        fill='currentColor'
      />
      <path
        d='M17.83 12.61c-1.73 0-2.6 0-3.22.41a3 3 0 0 0-.72.72c-.4.63-.4 1.5-.4 3.22v0c0 1.73 0 2.6.4 3.22q.3.44.72.72c.63.41 1.5.41 3.22.41v0c1.73 0 2.6 0 3.22-.4q.44-.3.72-.73c.41-.62.41-1.49.41-3.22v0c0-1.73 0-2.6-.4-3.22a3 3 0 0 0-.73-.72c-.62-.4-1.49-.4-3.22-.4'
        stroke='currentColor'
      />
      <path
        d='M6.17 12.61c-1.73 0-2.6 0-3.22.41a3 3 0 0 0-.72.72c-.41.63-.41 1.5-.41 3.22v0c0 1.73 0 2.6.4 3.22q.3.44.73.72c.62.41 1.49.41 3.22.41v0c1.73 0 2.6 0 3.22-.4q.43-.3.72-.73c.4-.62.4-1.49.4-3.22v0c0-1.73 0-2.6-.4-3.22a3 3 0 0 0-.72-.72c-.63-.4-1.5-.4-3.22-.4'
        stroke='currentColor'
      />
      <path
        d='M4.05 7.37C5.35 8.67 6 9.32 6.81 9.34h.07c.81-.02 1.46-.67 2.77-1.97'
        stroke='currentColor'
      />
      <path
        d='M6.85 8.97V8.3c0-2.44 0-3.66.67-4.49a3 3 0 0 1 .44-.44c.83-.67 2.05-.67 4.49-.67h.24c2.2 0 3.32 0 4.1.55a3 3 0 0 1 .7.71c.56.78.56 1.89.56 4.1h0'
        stroke='currentColor'
      />
    </svg>
  )
}
