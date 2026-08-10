import type { Icon } from './types'

export const IconSpeaker: Icon = ({
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
      data-slot='speaker'
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
        d='M18 7.9c0-1.89 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-4c-1.89 0-2.83 0-3.41.59C6 5.07 6 6 6 7.9v8.5c0 1.9 0 2.84.59 3.42.58.59 1.52.59 3.41.59h4c1.89 0 2.83 0 3.41-.59.59-.58.59-1.53.59-3.41zm-3 6.6a3 3 0 1 1-6 0 3 3 0 0 1 6 0'
        fill='currentColor'
      />
      <rect
        x='6'
        y='3.9'
        width='12'
        height='16.51'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle cx='12' cy='14.5' r='3.17' stroke='currentColor' strokeWidth='1.5' />
      <path d='M12.42 14.5a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0' fill='currentColor' />
      <path
        d='M12.42 14.5a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M12.42 7.42a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0' fill='currentColor' />
      <path
        d='M12.42 7.42a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
