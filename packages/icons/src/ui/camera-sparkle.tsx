import type { Icon } from './types'

export const IconCameraSparkle: Icon = ({
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
      data-slot='icon-ui-camera-sparkle'
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
        d='m1.83 9.28.01-.6a3 3 0 0 1 2.73-2.72c.13-.02.29-.02.6-.02h.44c.82 0 1.58-.4 2.05-1.07A2.5 2.5 0 0 1 9.71 3.8h4.2a3 3 0 0 1 2.22 1.07l.11.12a3 3 0 0 0 2.28.95h.14c.47 0 .7 0 .9.03a3 3 0 0 1 2.58 2.58c.03.2.03.43.03.9v4.78c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.83c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12zm11.48 2.29a1.9 1.9 0 0 0-2.55.07l-.21.2a1.9 1.9 0 1 0 2.75 2.62l.19-.22c.69-.8.6-1.99-.18-2.68'
        fill='currentColor'
      />
      <path
        d='M1.83 9.2v-.12a3 3 0 0 1 2.95-2.95h.29c.97 0 1.88-.52 2.37-1.36s1.4-1.35 2.38-1.35h4.33c.98 0 1.9.51 2.4 1.35a2.8 2.8 0 0 0 2.4 1.36h.27a3 3 0 0 1 2.95 3.07v5.03c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.83c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        stroke='currentColor'
      />
      <path
        d='M19.15 9.53a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M7.8 13.11c2.02 0 4.2-2.19 4.2-4.2' stroke='currentColor' />
      <path d='M16.2 13.11c-2.01 0-4.2-2.18-4.2-4.2' stroke='currentColor' />
      <path d='M7.8 13.11c2.01 0 4.2 2.23 4.2 4.2' stroke='currentColor' />
      <path d='M16.2 13.11c-1.99 0-4.2 2.2-4.2 4.2' stroke='currentColor' />
    </svg>
  )
}
