import type { Icon } from './types'

export const IconSmileyHappy: Icon = ({
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
      data-slot='smiley-happy'
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
        d='M12 20.36a8.36 8.36 0 1 0 0-16.72 8.36 8.36 0 0 0 0 16.72m-4.05-6.81s.85 3 4.05 3 4.06-3 4.06-3z'
        fill='currentColor'
      />
      <path
        d='M9.91 9.49a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0m5.36 0a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
      />
      <path
        d='M7.95 13.55s.85 3 4.05 3 4.06-3 4.06-3m-8.06 0h8M20.37 12a8.36 8.36 0 1 1-16.72 0 8.36 8.36 0 0 1 16.72 0ZM9.9 9.49a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0Zm5.36 0a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
