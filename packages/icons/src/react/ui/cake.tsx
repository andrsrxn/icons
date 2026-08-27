import type { Icon } from './types'

export const IconCake: Icon = ({
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
      data-slot='ui-icon-cake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.68 17.12c0-.7 0-1.05.09-1.33a2 2 0 0 1 1.33-1.34c.29-.08.64-.08 1.33-.08h.75c.42 0 .8-.2 1.05-.54a1.3 1.3 0 0 1 1.8-.29l.71.52.19.13a2 2 0 0 0 2.15.02l.19-.13.81-.57c.56-.4 1.34-.26 1.72.32.22.33.6.54 1.01.54h.8c.66 0 .99 0 1.26.07a2 2 0 0 1 1.37 1.38 5 5 0 0 1 .08 1.26v.2c0 .84 0 1.27-.13 1.6a2 2 0 0 1-1.17 1.18c-.34.13-.77.13-1.61.13H6.59c-.84 0-1.27 0-1.6-.13a2 2 0 0 1-1.18-1.17c-.13-.34-.13-.77-.13-1.61z'
        fill='currentColor'
      />
      <path
        d='M3.67 13.35s.37 1.3 2.17 1.3q.3 0 .57-.06c1.62-.38 2.43-.58 2.55-.57.12 0 .88.18 2.4.56a2.5 2.5 0 0 0 1.24 0c1.36-.36 2.04-.53 2.16-.54.11 0 1.03.19 2.88.56q.26.05.54.05c1.49 0 2.13-1.3 2.13-1.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.4 20.12v-5c0-2.82 0-4.24-.88-5.12s-2.29-.87-5.12-.87H9.6c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v4.99'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='12.13'
        cy='7.11'
        r='2.02'
        transform='rotate(90 12.13 7.1)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.13 5.09c0-.59.38-1.91 1.33-2.14M2 20.12h20'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
