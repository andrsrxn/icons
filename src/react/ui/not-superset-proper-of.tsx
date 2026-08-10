import type { Icon } from './types'

export const IconNotSupersetProperOf: Icon = ({
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
      data-slot='not-superset-proper-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.03 2.97a.75.75 0 0 0-1.06 1.06l.53-.53zm15.94 18.06a.75.75 0 0 0 1.06-1.06l-.53.53zM5.61 4.86a.75.75 0 1 0 0 1.5zm7.6.75v-.75zm3.34 11.66-.4-.64zm-.23.14.4.64zm-3.4.98v-.75zm-8.04-.75a.75.75 0 0 0 0 1.5zM16.12 6.32l-.34.67zM3.5 3.5l-.53.53 17 17 .53-.53.53-.53-17-17zm2.1 2.1v.75h7.6v-1.5H5.6zm10.94 11.66-.4-.64-.22.15.4.63.39.64.23-.14zm-3.64 1.12v-.75H4.88v1.5h8.03zm3.41-.98-.4-.63a5.7 5.7 0 0 1-3 .86v1.5a7 7 0 0 0 3.8-1.09zm-3.1-11.8v.75q1.36 0 2.56.63l.34-.67.35-.67c-1-.52-2.12-.79-3.25-.79zm2.9.71-.34.67a5.56 5.56 0 0 1 .37 9.64l.4.64.4.64a7.06 7.06 0 0 0-.48-12.26z'
        fill='currentColor'
      />
    </svg>
  )
}
