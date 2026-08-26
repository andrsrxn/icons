import type { Icon } from './types'

export const IconVolcano: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-volcano'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m7.1 11.87 4.45-.56 2.43 1.18 2.6-.62 1.76 4.52 2.36 5.01H3.34l2.4-4.77z'
        fill='currentColor'
      />
      <path
        d='M16.65 11.76s-1.41.89-2.66.89c-1.38 0-2.2-1.05-3.56-1.05-1.52 0-3.28.8-3.28.8M12 1.88V4.8M7.52 1.79c.31.19.86.7 1.13 1.32.26.58.3 1.2.23 1.61m7.63-2.92c-.32.19-.87.68-1.16 1.3-.26.58-.3 1.2-.25 1.61'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.35 21.58h5.35c3.24 0 4.86 0 5.45-.93q0-.03.03-.05c.56-.95-.25-2.53-1.87-5.7h0a67 67 0 0 1-2.08-4.66c-.51-1.26-.77-1.89-1.28-2.23-.5-.34-1.17-.34-2.5-.34h-.84c-1.35 0-2.03 0-2.53.35-.51.34-.77.98-1.28 2.26a60 60 0 0 1-2.02 4.62c-1.6 3.15-2.41 4.72-1.89 5.66l.08.13c.6.89 2.2.89 5.38.89'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
