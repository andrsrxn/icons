import type { Icon } from './types'

export const IconCamping: Icon = ({
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
      data-slot='camping'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.67 13.83c-.59-1.27-.88-1.91-.58-2.37s1-.46 2.4-.46h5.85c.72 0 1.08 0 1.35.2.26.2.36.54.57 1.24l1.46 4.98c.33 1.12.5 1.68.22 2.08s-.87.42-2.03.48l-4.93.25c-.66.03-.99.05-1.25-.1-.26-.17-.4-.47-.67-1.07z'
        fill='#000'
      />
      <circle opacity='.2' cx='7.23' cy='6.04' r='2.04' fill='#000' />
      <path
        d='M6.1 13c.57-.97.85-1.46 1.32-1.73C7.88 11 8.44 11 9.57 11h5.6c1.35 0 2.01 0 2.53.36.51.35.75.98 1.22 2.23l.46 1.23c.92 2.45 1.39 3.68.79 4.54s-1.9.86-4.53.86H8.87c-3.08 0-4.61 0-5.2-1-.57-1 .2-2.33 1.73-4.99z'
        stroke='#000'
        strokeWidth='1.5'
      />
      <path
        d='M8.52 11.1a.76.76 0 0 0-.99-.4.74.74 0 0 0-.39.98l.7-.29zM11 20.51c.17.38.61.56 1 .4.38-.16.55-.6.39-.97l-.7.28zM7.83 11.4l-.69.29 3.85 8.83.7-.29.69-.28-3.86-8.84z'
        fill='#000'
      />
      <path
        d='M7.23 17.3v2.93M16.36 11V3.58m0 2.72 2.45-1.26m-2.45 2.8L13.9 6.58'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle cx='7.23' cy='6.04' r='2.04' stroke='#000' strokeWidth='1.5' />
    </svg>
  )
}
