import type { Icon } from './types'

export const IconCameraOff: Icon = ({
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
      data-slot='icon-ui-camera-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.63 4.82A2.5 2.5 0 0 1 5.57 5.9h-.45c-.34 0-.5 0-.64.02a3 3 0 0 0-2.7 2.7c-.02.14-.02.3-.02.64v5.03c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h8.48c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.43c0-.49 0-.74-.03-.94a3 3 0 0 0-2.55-2.56c-.21-.03-.46-.03-.95-.03h-.33a3 3 0 0 1-2.22-1.08l-.12-.13a3 3 0 0 0-2.1-.95H9.7c-.83 0-1.6.4-2.07 1.08M12 16.92a4 4 0 1 1 0-8 4 4 0 0 1 0 8'
        fill='currentColor'
      />
      <path
        d='M1.76 9.17v-.15A3 3 0 0 1 4.69 6.1h.33a2.8 2.8 0 0 0 2.4-1.37A2.8 2.8 0 0 1 9.8 3.36h4.36c.99 0 1.9.52 2.4 1.36A2.9 2.9 0 0 0 19 6.1h.32a3 3 0 0 1 2.93 2.93v5.26c0 2.83 0 4.25-.88 5.13s-2.29.88-5.12.88H7.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        stroke='currentColor'
      />
      <path
        d='M19.2 9.51a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <circle cx='12' cy='12.91' r='4' transform='rotate(90 12 12.91)' stroke='currentColor' />
      <path d='m2.73 2.73 18.54 18.54' stroke='currentColor' />
    </svg>
  )
}
