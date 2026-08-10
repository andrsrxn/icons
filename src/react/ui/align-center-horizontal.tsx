import type { Icon } from './types'

export const IconAlignCenterHorizontal: Icon = ({
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
      data-slot='align-center-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M16 7.1c.9 0 1.35 0 1.69.18q.37.21.59.59c.18.34.18.79.18 1.68v4.9c0 .9 0 1.34-.18 1.68a1.5 1.5 0 0 1-.6.6c-.33.18-.78.18-1.68.18s-1.34 0-1.68-.19a1.5 1.5 0 0 1-.6-.6c-.18-.33-.18-.78-.18-1.67v-4.9c0-.9 0-1.34.19-1.68q.2-.37.59-.6c.34-.18.79-.18 1.68-.18M8 5.47c.9 0 1.35 0 1.69.18q.37.22.59.6c.18.33.18.78.18 1.68v8.14c0 .9 0 1.35-.18 1.68a1.5 1.5 0 0 1-.6.6c-.33.18-.78.18-1.68.18s-1.34 0-1.68-.18a1.5 1.5 0 0 1-.6-.6c-.18-.33-.18-.78-.18-1.68V7.93c0-.9 0-1.35.19-1.68q.2-.38.59-.6c.34-.18.79-.18 1.68-.18'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M20.26 12h-1.6m-5.62 0h-1.98M5.3 12H3.74m9.8-2.45v4.9c0 .9 0 1.34.19 1.68q.2.37.59.6c.34.18.79.18 1.68.18.9 0 1.35 0 1.69-.19q.37-.21.59-.6c.18-.33.18-.78.18-1.67v-4.9c0-.9 0-1.34-.18-1.68a1.5 1.5 0 0 0-.6-.6c-.33-.18-.78-.18-1.68-.18s-1.34 0-1.68.19a1.5 1.5 0 0 0-.6.59c-.18.34-.18.79-.18 1.68Zm-8-1.62v8.14c0 .9 0 1.35.19 1.68q.2.38.59.6c.34.18.79.18 1.68.18.9 0 1.35 0 1.69-.18q.37-.22.59-.6c.18-.33.18-.78.18-1.68V7.93c0-.9 0-1.35-.18-1.68a1.5 1.5 0 0 0-.6-.6c-.33-.18-.78-.18-1.68-.18s-1.34 0-1.68.18a1.5 1.5 0 0 0-.6.6c-.18.33-.18.78-.18 1.68Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
