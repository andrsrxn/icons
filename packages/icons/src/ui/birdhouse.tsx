import type { Icon } from './types'

export const IconBirdhouse: Icon = ({
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
      data-slot='icon-ui-birdhouse'
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
        d='M16.83 5.82c1.23 1.14 1.85 1.7 2.1 2.47.24.76.06 1.58-.3 3.22l-.59 2.76c-.49 2.26-.73 3.4-1.56 4.06-.82.67-1.98.67-4.3.67h-.24c-2.35 0-3.52 0-4.35-.68S6.53 16.5 6.06 14.2l-.55-2.73c-.32-1.62-.49-2.43-.25-3.18.25-.74.85-1.3 2.06-2.42l.7-.65c1.93-1.77 2.9-2.66 4.06-2.66 1.17 0 2.13.88 4.07 2.65zM14.39 9.5a2.4 2.4 0 1 1-4.78 0 2.4 2.4 0 0 1 4.78 0'
        fill='currentColor'
      />
      <path d='m20.82 9.7-5.98-6c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2l-6 6' stroke='currentColor' />
      <path d='M4.5 19.02h15' stroke='currentColor' />
      <path d='M4.98 8 7 19' stroke='currentColor' />
      <path d='M19.02 8 17 19' stroke='currentColor' />
      <path d='M12 19.02v3.32' stroke='currentColor' />
      <circle cx='12' cy='9.49' r='2.54' stroke='currentColor' />
      <path
        d='M12 15.1a.4.4 0 1 1 0 .81.4.4 0 0 1 0-.8'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
