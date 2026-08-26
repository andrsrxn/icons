import type { Icon } from './types'

export const IconFileLock: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-file-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.53 21.3c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V6.65c0-1.86 0-2.8.58-3.38s1.51-.6 3.38-.62l1.69-.01c1.02-.01 1.53-.02 1.93.16a2 2 0 0 1 1 1c.18.39.18.9.18 1.92 0 1.01 0 1.52.18 1.91a2 2 0 0 0 1 1c.4.18.9.18 1.92.18 1.03 0 1.55 0 1.95.18a2 2 0 0 1 .96.95c.2.4.2.9.22 1.93l.06 3.6-.53-.41a1.74 1.74 0 0 0-2.5.4l-.05.06q-.32.47-.89.62a1.53 1.53 0 0 0-.91 2.32l.22.34c.25.4.34.88.25 1.34l-.22 1.16z'
        fill='currentColor'
      />
      <path
        d='M19.47 11.2v-.59c0-1.25 0-1.87-.24-2.43s-.68-1-1.58-1.87l-.91-.89-.97-.97c-.87-.87-1.3-1.3-1.86-1.53-.55-.22-1.16-.22-2.38-.22h-1c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v6.6c0 2.83 0 4.25.88 5.13s2.3.87 5.12.87h1.01'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19m-2.2 5.89c.4-.77.6-1.15.9-1.15s.5.38.89 1.15l.34.67c.11.22.17.33.27.4s.22.09.46.13l.75.12c.84.13 1.27.2 1.36.49.1.3-.2.6-.81 1.2l-.54.53c-.17.18-.26.27-.3.38-.03.12-.01.24.02.49l.12.74c.14.84.2 1.27-.05 1.45-.24.18-.63-.02-1.39-.4l-.67-.35c-.22-.1-.33-.17-.45-.17s-.23.06-.46.17l-.67.34c-.76.4-1.14.59-1.39.4-.25-.17-.18-.6-.05-1.44l.12-.74c.04-.25.06-.37.02-.49s-.12-.2-.3-.38l-.53-.53c-.6-.6-.91-.9-.82-1.2s.52-.36 1.37-.5l.74-.11c.25-.04.37-.06.47-.13s.15-.18.26-.4z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
