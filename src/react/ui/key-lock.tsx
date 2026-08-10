import type { Icon } from './types'

export const IconKeyLock: Icon = ({
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
      data-slot='key-lock'
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
        d='M12 20.28a8.28 8.28 0 1 0 0-16.56 8.28 8.28 0 0 0 0 16.56m-1.15-7.74-.67 2.11-.13.39c-.27.84-.42 1.3-.18 1.63.27.38.85.38 2 .38h.33c1.14 0 1.71 0 1.99-.38.22-.3.08-.7-.16-1.42l-.19-.59-.69-2.12c-.15-.47.11-.96.48-1.28A2.45 2.45 0 0 0 12 6.96a2.46 2.46 0 0 0-1.62 4.3c.36.32.62.81.47 1.28'
        fill='currentColor'
      />
      <path
        d='M20.28 12a8.28 8.28 0 1 1-16.56 0 8.28 8.28 0 0 1 16.56 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M10.32 11.21c.39.36.67.9.5 1.4l-.64 2.04c-.35 1.1-.59 1.64-.31 2.02s.85.38 2 .38h.33c1.14 0 1.71 0 1.99-.38.28-.37 0-.92-.35-2.01l-.66-2.05c-.17-.5.11-1.04.5-1.4A2.45 2.45 0 0 0 12 6.95a2.46 2.46 0 0 0-1.68 4.26Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
