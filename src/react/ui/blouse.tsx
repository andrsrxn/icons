import type { Icon } from './types'

export const IconBlouse: Icon = ({
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
      data-slot='blouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.39 6.65c-1.13 0-1.64-.7-1.87-1.32-.19-.52-.63-.98-1.18-.98h-1a1 1 0 0 0-.66.24L4 7.73a1 1 0 0 0-.32 1l.4 1.72a1 1 0 0 0 1.56.57L7.32 9.8a.5.5 0 0 1 .8.4v3.84a1 1 0 0 1-.05.31L6.99 17.7a1 1 0 0 0 .83 1.3l4.07.48h.22l4.18-.48a1 1 0 0 0 .84-1.29l-1.04-3.34a1 1 0 0 1-.05-.3v-3.83a.5.5 0 0 1 .8-.4l1.52 1.15a1 1 0 0 0 1.58-.57l.41-1.76a1 1 0 0 0-.25-.92l-2.89-3.06a1 1 0 0 0-.75-.3l-1.05.02c-.54 0-.97.46-1.16.97-.23.61-.74 1.3-1.86 1.3'
        fill='#000'
      />
      <path
        d='M12.39 6.65c-1.13 0-1.64-.7-1.87-1.32-.19-.52-.63-.98-1.18-.98h-1a1 1 0 0 0-.66.24l-3.64 3.1a1 1 0 0 0-.3 1.08l.7 2.15a1 1 0 0 0 1.68.38l1.34-1.4c.28-.29.75-.15.78.25.05.67.07 1.64-.13 2.67a31 31 0 0 1-1.48 4.63c-.17.43-.02.92.39 1.13.88.43 2.58 1.07 5.03 1.07 2.48 0 4.12-.66 4.93-1.1.38-.2.5-.63.37-1.04a39 39 0 0 1-1.3-4.7 11 11 0 0 1-.13-2.63c.03-.4.5-.55.78-.25l1.22 1.31a1 1 0 0 0 1.69-.38l.69-2.17a1 1 0 0 0-.23-1l-2.86-3.02a1 1 0 0 0-.75-.3l-1.05.02c-.54 0-.97.46-1.16.97-.23.61-.74 1.3-1.86 1.3'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
