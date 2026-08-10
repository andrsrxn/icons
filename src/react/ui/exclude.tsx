import type { Icon } from './types'

export const IconExclude: Icon = ({
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
      data-slot='exclude'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.16 8.7H12.8c-1.87 0-2.8 0-3.39.57-.58.59-.58 1.52-.58 3.4v2.5h2.35c1.87 0 2.8 0 3.39-.59.58-.58.58-1.52.58-3.39z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.84 15.16h2.35c1.87 0 2.8 0 3.39-.58.58-.58.58-1.52.58-3.39V8.7H12.8c-1.87 0-2.8 0-3.39.58-.58.59-.58 1.52-.58 3.4z'
          fill='currentColor'
        />
      </g>
      <path
        d='M3.58 11.2c0 1.86 0 2.8.58 3.38s1.52.58 3.39.58h3.64c1.87 0 2.8 0 3.39-.58.58-.58.58-1.52.58-3.39V7.55c0-1.87 0-2.8-.58-3.38-.59-.58-1.52-.58-3.4-.58H7.56c-1.87 0-2.8 0-3.39.58-.58.58-.58 1.51-.58 3.38z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M8.84 16.3c0 1.87 0 2.8.58 3.39.59.58 1.52.58 3.4.58h3.63c1.87 0 2.8 0 3.39-.58.58-.58.58-1.52.58-3.39v-3.64c0-1.87 0-2.8-.58-3.39-.58-.58-1.52-.58-3.39-.58h-3.64c-1.87 0-2.8 0-3.39.58-.58.59-.58 1.52-.58 3.4z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
