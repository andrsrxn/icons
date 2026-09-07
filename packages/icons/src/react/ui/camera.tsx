import type { Icon } from './types'

export const IconCamera: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-camera'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'camera-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'camera-title'}>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.96 5.35a2.3 2.3 0 0 1-1.9 1h-.61a3 3 0 0 0-2.91 2.92v4.38c0 2.82 0 4.24.87 5.12.88.88 2.3.88 5.12.88h6.94c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.6l-.01-.47a3 3 0 0 0-2.79-2.78l-.47-.01h-.13c-.85 0-1.66-.36-2.22-1-.56-.63-1.37-1-2.22-1H9.87c-.76 0-1.48.38-1.91 1M12 16.53a3.7 3.7 0 1 1 0-7.4 3.7 3.7 0 0 1 0 7.4'
        fill='currentColor'
      />
      <path
        d='M2.53 9.37A2.85 2.85 0 0 1 5.4 6.52h.16c.9 0 1.75-.48 2.2-1.26A2.6 2.6 0 0 1 9.98 4H14c.92 0 1.76.48 2.23 1.26a2.6 2.6 0 0 0 2.23 1.26h.15a2.86 2.86 0 0 1 2.86 2.86v4.27c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.53c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        stroke='currentColor'
      />
      <path
        d='M18.65 9.69a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <circle cx='12' cy='12.83' r='3.7' transform='rotate(90 12 12.83)' stroke='currentColor' />
    </svg>
  )
}
