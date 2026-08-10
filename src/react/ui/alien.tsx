import type { Icon } from './types'

export const IconAlien: Icon = ({
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
      data-slot='alien'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.77 10.57c0 4.03-3.48 9.74-7.77 9.74-4.3 0-7.77-5.7-7.77-9.74S7.7 3.27 12 3.27s7.77 3.27 7.77 7.3m-9.23 1.4c-.23-.6-.66-1.44-1.36-1.8s-1.5-.19-2.05.02c-.27.1-.4.15-.48.34s-.01.35.1.65c.24.61.67 1.44 1.37 1.81s1.5.19 2.05-.02c.27-.1.4-.15.47-.34.08-.2.02-.35-.1-.66m4.34-1.8c-.7.36-1.12 1.2-1.36 1.8-.11.31-.17.46-.1.66.08.19.21.24.48.34.54.2 1.35.39 2.05.02s1.13-1.2 1.36-1.8c.12-.31.18-.46.1-.66s-.2-.24-.48-.34c-.53-.2-1.35-.39-2.05-.02'
        fill='currentColor'
      />
      <path
        d='M19.77 11.2c0 5.56-6.12 9.29-7.73 9.29S4.3 16.83 4.3 11.2c0-4.25 3.46-7.7 7.74-7.7a7.7 7.7 0 0 1 7.73 7.7Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M13.6 16.52s-.6.48-1.55.48-1.58-.48-1.58-.48'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M9.18 10.17c.7.36 1.13 1.2 1.36 1.8.12.3.18.46.1.66-.07.19-.2.24-.47.34-.54.2-1.35.39-2.05.02s-1.13-1.2-1.36-1.8c-.12-.31-.18-.46-.1-.66s.2-.24.47-.34c.54-.2 1.35-.39 2.05-.02Zm5.7 0c-.7.36-1.12 1.2-1.36 1.8-.11.3-.17.46-.1.66.08.19.21.24.48.34.54.2 1.35.39 2.05.02s1.13-1.2 1.36-1.8c.12-.31.18-.46.1-.66s-.2-.24-.48-.34c-.53-.2-1.35-.39-2.05-.02Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
