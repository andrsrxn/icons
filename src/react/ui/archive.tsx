import type { Icon } from './types'

export const IconArchive: Icon = ({
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
      data-slot='archive'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.99 12.55c0-1.88 0-2.82.58-3.4.59-.6 1.53-.6 3.42-.6h6c1.89 0 2.83 0 3.42.6.58.58.58 1.52.58 3.4v2.81c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H9c-1.89 0-2.83 0-3.42-.58C5 18.19 5 17.25 5 15.36z'
        fill='currentColor'
      />
      <path
        d='M19 8.54v6.82c0 1.89 0 2.83-.59 3.42s-1.53.58-3.41.58H9c-1.88 0-2.82 0-3.41-.58C5 18.19 5 17.25 5 15.36V8.54m14 0H5m14 0c.54-.13 1.12-.59 1.25-1.13.05-.17.05-.39.05-.81s0-.65-.05-.82a1.5 1.5 0 0 0-1.1-1.1c-.17-.04-.39-.04-.81-.04H5.66c-.42 0-.64 0-.81.04a1.5 1.5 0 0 0-1.1 1.1c-.05.17-.05.39-.05.82s0 .64.05.81c.13.54.71 1 1.25 1.13m3.74 2.95h6.52'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
