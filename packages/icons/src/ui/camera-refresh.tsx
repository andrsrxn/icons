import type { Icon } from './types'

export const IconCameraRefresh: Icon = ({
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
      data-slot='icon-ui-camera-refresh'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.83 9.28.01-.6a3 3 0 0 1 2.73-2.72c.13-.02.29-.02.6-.02h.44c.82 0 1.58-.4 2.05-1.07A2.5 2.5 0 0 1 9.71 3.8h4.2a3 3 0 0 1 2.22 1.07l.11.12a3 3 0 0 0 2.28.95h.14c.47 0 .7 0 .9.03a3 3 0 0 1 2.58 2.58c.03.2.03.43.03.9v4.78c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.83c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12zM12 17.08a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12 3.42h2.15c.98 0 1.9.51 2.4 1.35a2.8 2.8 0 0 0 2.4 1.36h.27a3 3 0 0 1 2.95 2.94v5.16c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.83c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V9.08a3 3 0 0 1 2.95-2.95h.29c.97 0 1.88-.52 2.37-1.36s1.4-1.35 2.38-1.35z'
        stroke='currentColor'
      />
      <path d='M15.83 11.25C14.8 9.8 13.57 8.8 11.81 8.8q-2.63 0-3.85 2.28' stroke='currentColor' />
      <path d='M8.2 14.7c1.01 1.43 2.24 2.45 4 2.45q2.62 0 3.84-2.28' stroke='currentColor' />
      <path d='M16.27 8.88v.8c0 .95 0 1.42-.3 1.71-.29.3-.76.3-1.7.3h-.8' stroke='currentColor' />
      <path d='M7.74 17.08v-.81c0-.94 0-1.42.29-1.7.29-.3.76-.3 1.7-.3h.82' stroke='currentColor' />
    </svg>
  )
}
