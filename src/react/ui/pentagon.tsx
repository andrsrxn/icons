import type { Icon } from './types'

export const IconPentagon: Icon = ({
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
      data-slot='pentagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.73 4.5c.61-.45.92-.67 1.27-.67s.66.22 1.27.66L19.46 9c.61.45.92.67 1.03 1 .1.34-.01.7-.25 1.42l-2.36 7.27c-.23.72-.35 1.08-.64 1.29-.28.2-.66.2-1.41.2H8.17c-.75 0-1.13 0-1.41-.2s-.4-.57-.64-1.29l-2.36-7.27c-.24-.72-.35-1.08-.25-1.42.11-.33.42-.55 1.03-1z'
        fill='currentColor'
      />
      <path
        d='M10.73 4.5c.61-.45.92-.67 1.27-.67s.66.22 1.27.66L19.46 9c.61.45.92.67 1.03 1 .1.34-.01.7-.25 1.42l-2.36 7.27c-.23.72-.35 1.08-.64 1.29-.28.2-.66.2-1.41.2H8.17c-.75 0-1.13 0-1.41-.2s-.4-.57-.64-1.29l-2.36-7.27c-.24-.72-.35-1.08-.25-1.42.11-.33.42-.55 1.03-1z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
