import type { Icon } from './types'

export const IconBaby: Icon = ({
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
      data-slot='baby'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M11.98 19.6c3.44 0 6.35-2.3 7.27-5.45 0 0 1.37-.23 1.37-2.14 0-1.82-1.4-2.16-1.4-2.16a7.57 7.57 0 0 0-14.5 0s-1.34.39-1.34 2.16c0 1.84 1.33 2.13 1.33 2.13a7.6 7.6 0 0 0 7.27 5.46'
        fill='currentColor'
      />
      <path
        d='m9.95 6.76-.69.29zm4.48 1.38a.75.75 0 0 0-.55-1.4l.28.7zm-3.53-3.6-.42-.63-.03.02-.26.21a4 4 0 0 0-.55.6 2.3 2.3 0 0 0-.38 2.3l.7-.28.68-.3q-.15-.37.2-.83a2 2 0 0 1 .49-.48zm-.95 2.22-.69.29c.63 1.49 2.17 1.63 3.17 1.55a8 8 0 0 0 2-.46l-.27-.7-.28-.7-.02.01-.45.14c-.3.09-.7.18-1.1.21q-1.35.13-1.67-.63z'
        fill='currentColor'
      />
      <path
        d='M11.98 19.6c3.44 0 6.35-2.3 7.27-5.45 0 0 1.38-.24 1.38-2.15 0-1.82-1.4-2.15-1.4-2.15a7.57 7.57 0 0 0-14.5 0s-1.34.37-1.34 2.14c0 1.84 1.32 2.15 1.32 2.15a7.6 7.6 0 0 0 7.27 5.46Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='M10.13 11.58a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0' fill='currentColor' />
      <path
        d='M10.13 11.58a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M14.76 11.58a.44.44 0 1 1-.89 0 .44.44 0 0 1 .89 0' fill='currentColor' />
      <path
        d='M14.76 11.58a.44.44 0 1 1-.89 0 .44.44 0 0 1 .89 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M9.42 15.13s.8 1.02 2.58 1.02c1.79 0 2.58-1.02 2.58-1.02'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
