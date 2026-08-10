import type { Icon } from './types'

export const IconTrafficCone: Icon = ({
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
      data-slot='traffic-cone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m11.36 13.09-1.3-.44a1.94 1.94 0 0 1 1.03-3.72l.5.1a2 2 0 0 0 .81.01l.7-.13a1.91 1.91 0 0 1 .99 3.69l-1.45.49a2 2 0 0 1-1.28 0m-7.71 2.69 3.8-2.02v2.34L12 17.93l4.32-1.83-.22-2.34 4.03 2.02.23 1.1-8.36 3.9-8.15-3.9z'
        fill='currentColor'
      />
      <path
        d='m7.36 14.05-.98.42c-1.82.78-2.73 1.17-2.73 1.84-.01.67.9 1.08 2.7 1.89l.66.3 3.43 1.6a4 4 0 0 0 1.56.45 5 5 0 0 0 1.65-.5l3.34-1.56.66-.29c1.8-.81 2.71-1.22 2.7-1.89s-.9-1.06-2.73-1.84l-.86-.42'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='m16.38 13.37-.54-1.84C14.28 6.19 13.49 3.52 12 3.52c-1.5 0-2.28 2.67-3.84 8.01l-.54 1.84c-.33 1.13-.5 1.69-.14 2.39.35.7.75.85 1.55 1.16a8.3 8.3 0 0 0 5.94 0c.8-.3 1.2-.46 1.55-1.16s.19-1.26-.14-2.39Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M15.85 11.98s-1.39 1.17-3.85 1.17-3.85-1.17-3.85-1.17m6.53-3.62s-.97.8-2.68.8-2.68-.8-2.68-.8'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
