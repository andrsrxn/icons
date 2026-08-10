import type { Icon } from './types'

export const IconAlignTop: Icon = ({
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
      data-slot='align-top'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.02 16.75c-.9 0-1.34 0-1.68-.18a1.5 1.5 0 0 1-.59-.6c-.19-.33-.19-.78-.19-1.68V9.4c0-.89 0-1.34.19-1.67q.21-.38.6-.6c.33-.18.78-.18 1.67-.18.9 0 1.35 0 1.69.18q.38.22.59.6c.18.33.18.78.18 1.68v4.9c0 .89 0 1.34-.18 1.67a1.5 1.5 0 0 1-.6.6c-.33.18-.78.18-1.68.18m8 3.24c-.9 0-1.34 0-1.68-.19a1.5 1.5 0 0 1-.59-.59c-.19-.33-.19-.78-.19-1.68V9.4c0-.9 0-1.35.19-1.68q.21-.38.6-.6c.33-.18.78-.18 1.67-.18.9 0 1.35 0 1.69.18q.38.22.59.6c.18.33.18.78.18 1.68v8.14c0 .9 0 1.35-.18 1.68a1.5 1.5 0 0 1-.6.6c-.33.18-.78.18-1.68.18'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M3.73 4h16.54m-9.79 10.3V9.4c0-.9 0-1.35-.18-1.68a1.5 1.5 0 0 0-.6-.6c-.33-.18-.78-.18-1.68-.18s-1.34 0-1.68.18a1.5 1.5 0 0 0-.59.6c-.19.33-.19.78-.19 1.68v4.9c0 .89 0 1.34.19 1.67q.21.38.6.6c.33.18.78.18 1.67.18.9 0 1.35 0 1.69-.18q.38-.22.59-.6c.18-.33.18-.78.18-1.68Zm8 3.24V9.4c0-.9 0-1.35-.18-1.68a1.5 1.5 0 0 0-.6-.6c-.33-.18-.78-.18-1.68-.18s-1.34 0-1.68.18a1.5 1.5 0 0 0-.59.6c-.19.33-.19.78-.19 1.68v8.14c0 .9 0 1.35.19 1.68q.21.38.6.6c.33.18.78.18 1.67.18.9 0 1.35 0 1.69-.19q.38-.2.59-.59c.18-.33.18-.78.18-1.68Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
