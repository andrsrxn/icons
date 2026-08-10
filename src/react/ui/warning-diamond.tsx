import type { Icon } from './types'

export const IconWarningDiamond: Icon = ({
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
      data-slot='warning-diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.57 4.79c.67-.7 1-1.03 1.43-1.03s.76.34 1.43 1.03l5.68 5.81c.65.66.97 1 .97 1.4s-.32.74-.97 1.4l-5.68 5.81c-.67.7-1 1.03-1.43 1.03s-.76-.34-1.43-1.03L4.89 13.4c-.65-.66-.97-1-.97-1.4s.32-.74.97-1.4z'
        fill='currentColor'
      />
      <path d='M12.41 15.74a.4.4 0 1 1-.78 0 .4.4 0 0 1 .78 0' fill='currentColor' />
      <path
        d='M12.02 12.74V8.28M4.89 13.4l5.68 5.81c.67.7 1 1.03 1.43 1.03s.76-.34 1.43-1.03l5.68-5.81c.65-.66.97-1 .97-1.4s-.32-.74-.97-1.4l-5.68-5.8c-.67-.7-1-1.03-1.43-1.03s-.76.34-1.43 1.03l-5.68 5.8c-.65.66-.97 1-.97 1.4s.32.74.97 1.4Zm7.52 2.34a.4.4 0 1 1-.78 0 .4.4 0 0 1 .78 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
