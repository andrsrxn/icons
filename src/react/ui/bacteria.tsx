import type { Icon } from './types'

export const IconBacteria: Icon = ({
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
      data-slot='bacteria'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.64 7.18c-1.1-2.64-4.38-3.78-6.7-2.07A3.6 3.6 0 0 0 5.6 9.25c.56 1.48 1.44 3.4 2.75 5.18a22 22 0 0 0 4.13 4.16c1.3 1 3.06.9 4.37-.07 2.3-1.7 2.2-5.17 0-7-.84-.7-1.56-1.38-1.97-1.93a13 13 0 0 1-1.24-2.4m2.33 7.99a1.56 1.56 0 1 1-3.08-.47 1.56 1.56 0 0 1 3.08.47'
        fill='currentColor'
      />
      <path d='M9.85 7.67a.5.5 0 1 1-.54-.83.5.5 0 0 1 .54.83' fill='currentColor' />
      <path
        d='M9.85 7.67a.5.5 0 1 1-.54-.83.5.5 0 0 1 .54.83Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M9.73 10.8a.41.41 0 1 1-.45-.69.41.41 0 0 1 .45.7' fill='currentColor' />
      <path
        d='M9.73 10.8a.41.41 0 1 1-.45-.69.41.41 0 0 1 .45.7Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M5.48 8.94A3.6 3.6 0 0 1 6.5 5.09c2.33-2.19 6.14-1 7.22 2 .38 1.07.78 1.99 1.16 2.5s1.1 1.14 1.96 1.78c2.5 1.89 2.61 5.79-.06 7.45a3.6 3.6 0 0 1-4.12-.1 22 22 0 0 1-4.3-4.29 22 22 0 0 1-2.88-5.49Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M14.53 4 13 5.03m5.26 4.47L17 10.94m3.45 3.04-1.8.3m-6.61 4.62-1.29 1.58m-3.92-7.4-1.98 1.05M16 7.43 14.81 8m-5.45 8.21-.92 1m-3.17-7.8H3.53'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle
        cx='14.43'
        cy='14.94'
        r='1.56'
        transform='rotate(8.58 14.43 14.94)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
