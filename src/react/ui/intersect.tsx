import type { Icon } from './types'

export const IconIntersect: Icon = ({
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
      data-slot='intersect'
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
          d='M4.28 14.54c-.58-.57-.58-1.5-.58-3.34V7.62c0-1.85 0-2.77.58-3.34.57-.57 1.5-.57 3.33-.57h3.6c1.83 0 2.76 0 3.33.57s.57 1.5.57 3.34v1.12H12.8c-1.84 0-2.77 0-3.34.57-.57.58-.57 1.5-.57 3.34v2.46H7.6c-1.84 0-2.76 0-3.33-.57'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.46 19.57c-.57-.57-.57-1.49-.57-3.33V15.1h2.31c1.84 0 2.77 0 3.34-.57s.57-1.5.57-3.34V8.74h1.28c1.84 0 2.76 0 3.33.57.58.58.58 1.5.58 3.34v3.59c0 1.84 0 2.76-.58 3.33-.57.58-1.5.58-3.33.58h-3.6c-1.83 0-2.76 0-3.33-.58'
          fill='currentColor'
        />
      </g>
      <path
        d='M3.7 11.2c0 1.85 0 2.77.58 3.34.57.57 1.5.57 3.33.57h3.6c1.83 0 2.76 0 3.33-.57s.57-1.5.57-3.34V7.62c0-1.85 0-2.77-.57-3.34s-1.5-.57-3.34-.57H7.61c-1.84 0-2.76 0-3.33.57s-.58 1.5-.58 3.34z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M8.89 16.24c0 1.84 0 2.76.57 3.33s1.5.58 3.34.58h3.59c1.84 0 2.76 0 3.33-.58.58-.57.58-1.49.58-3.33v-3.59c0-1.84 0-2.76-.58-3.34-.57-.57-1.5-.57-3.33-.57h-3.6c-1.83 0-2.76 0-3.33.57-.57.58-.57 1.5-.57 3.34z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
