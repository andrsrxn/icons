import type { Icon } from './types'

export const IconEraser: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='eraser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M16.019 12.407 11.573 7.96a2 2 0 0 1-.009-2.82l.621-.628a2 2 0 0 1 2.838-.01l4.45 4.45a2 2 0 0 1 0 2.829l-.626.625a2 2 0 0 1-2.828 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m10.885 5.606-.094.095m0 0-.734.734m0 0L5.58 10.91c-1.314 1.315-1.97 1.973-1.97 2.79s.656 1.475 1.969 2.79l1.832 1.837c1.315 1.318 1.973 1.977 2.79 1.978.819 0 1.478-.658 2.795-1.974l4.48-4.478.734-.734c1.316-1.316 1.974-1.974 1.974-2.792 0-.818-.658-1.476-1.974-2.792l-1.835-1.834c-1.316-1.316-1.974-1.974-2.791-1.974-.818 0-1.476.658-2.792 1.974m-.734.734 7.418 7.418'
      />
    </svg>
  )
}
