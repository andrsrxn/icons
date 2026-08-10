import type { Icon } from './types'

export const IconPawPrint: Icon = ({
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
      data-slot='paw-print'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m7.19 14.19 1.22-.92c1.15-.86 1.72-1.3 2.34-1.5a4 4 0 0 1 2.54 0c.61.2 1.19.64 2.33 1.5l1.22.92a2.95 2.95 0 0 1-2.76 5.13l-.86-.31a3.6 3.6 0 0 0-2.4 0l-.88.3A2.95 2.95 0 0 1 7.2 14.2'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='4.77'
        cy='10.56'
        rx='1.38'
        ry='1.78'
        transform='rotate(-23.83 4.77 10.56)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='1.38'
        cy='1.78'
        rx='1.38'
        ry='1.78'
        transform='scale(-1 1)rotate(-23.83 11.88 55.02)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='9.04'
        cy='6.81'
        rx='1.53'
        ry='2.32'
        transform='rotate(-10.98 9.04 6.81)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='1.51'
        cy='2.29'
        rx='1.51'
        ry='2.29'
        transform='scale(-1 1)rotate(-10.98 16.79 90.32)'
        fill='currentColor'
      />
      <path
        d='m7.16 14.2 1.25-.93c1.15-.86 1.72-1.3 2.34-1.5a4 4 0 0 1 2.54 0c.61.2 1.19.64 2.33 1.5l1.25.94a2.87 2.87 0 0 1-3.04 4.85l-.38-.2a3.1 3.1 0 0 0-2.87 0l-.38.2a2.87 2.87 0 0 1-3.04-4.85Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <ellipse
        cx='4.84'
        cy='10.53'
        rx='1.46'
        ry='1.78'
        transform='rotate(-23.83 4.84 10.53)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <ellipse
        cx='1.47'
        cy='1.78'
        rx='1.47'
        ry='1.78'
        transform='scale(-1 1)rotate(-23.83 11.88 55.02)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <ellipse
        cx='9.16'
        cy='6.79'
        rx='1.66'
        ry='2.32'
        transform='rotate(-10.98 9.16 6.79)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <ellipse
        cx='1.58'
        cy='2.29'
        rx='1.58'
        ry='2.29'
        transform='scale(-1 1)rotate(-10.98 16.79 90.32)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
