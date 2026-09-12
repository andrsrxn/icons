import type { Icon } from './types'

export const IconFence: Icon = ({
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
      data-slot='icon-ui-fence'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.16 7.14c0-.23 0-.34.03-.45s.07-.22.17-.42L5 4.96c.77-1.6 1.16-2.4 1.78-2.41.63 0 1.02.8 1.81 2.39l.66 1.32c.1.21.15.31.18.43q.02.13.02.46v12.22c0 .94 0 1.41-.29 1.7-.3.3-.76.3-1.7.3h-1.3c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.48 7.14c0-.23 0-.34.02-.45s.08-.22.18-.42l.63-1.31c.78-1.6 1.16-2.4 1.79-2.41.62 0 1.02.8 1.8 2.39l.66 1.32c.1.21.16.31.18.43q.04.13.03.46v12.22c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-1.3c-.93 0-1.4 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <path
        d='M4.16 7.14c0-.23 0-.34.03-.45s.07-.22.17-.42L5 4.96c.77-1.6 1.16-2.4 1.78-2.41.63 0 1.02.8 1.81 2.39l.66 1.32c.1.21.15.31.18.43q.02.13.02.46v12.22c0 .94 0 1.41-.29 1.7-.3.3-.76.3-1.7.3h-1.3c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        stroke='currentColor'
      />
      <path
        d='M14.55 7.14c0-.23 0-.34.02-.45s.08-.22.17-.42l.64-1.31c.77-1.6 1.16-2.4 1.78-2.41.63 0 1.02.8 1.81 2.39l.66 1.32c.1.21.15.31.18.43q.04.13.03.46v12.22c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-1.3c-.94 0-1.4 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        stroke='currentColor'
      />
      <path d='M1.76 9.65h1.9' stroke='currentColor' />
      <path d='M1.76 16.48h1.9' stroke='currentColor' />
      <path d='M20.33 9.65h1.91' stroke='currentColor' />
      <path d='M20.33 16.48h1.91' stroke='currentColor' />
      <path d='M9.45 9.65h5.03' stroke='currentColor' />
      <path d='M9.45 16.48h5.03' stroke='currentColor' />
    </svg>
  )
}
