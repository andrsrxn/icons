import type { Icon } from './types'

export const IconHamburger: Icon = ({
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
      data-slot='ui-icon-hamburger'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.9 8.03c.68 1.28 1.01 1.92.43 2.88-.58.97-1.55.97-3.47.97H7.14c-1.92 0-2.89 0-3.47-.97-.58-.96-.25-1.6.42-2.88A8.9 8.9 0 0 1 12 3.35a8.9 8.9 0 0 1 7.9 4.68'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.54 14.55c-1.13-.98-1.7-1.47-1.71-1.9a1 1 0 0 1 .27-.72c.3-.32 1.04-.32 2.54-.32h1.44c1.38 0 2.08 0 2.36.53.28.54-.09 1.06-.81 2.1q-.35.5-.65.88c-.5.63-.75.94-1.17.98-.43.04-.76-.24-1.42-.81z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.8 19.72h12.1c.31 0 .47 0 .6-.02a1.5 1.5 0 0 0 1.21-1.22c.03-.13.03-.28.03-.6 0-.29 0-.44-.03-.57a1.5 1.5 0 0 0-1.18-1.21 4 4 0 0 0-.57-.04L16.38 16q-.4 0-.65.28a.8.8 0 0 1-.84.25l-1.11-.32h0l-.3-.08-.12-.02H5.8l-.54.01c-.64.1-1.14.6-1.24 1.25-.02.11-.02.25-.02.54 0 .28 0 .42.02.54.1.64.6 1.14 1.24 1.24.12.02.26.02.54.02Z'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.9 8.03c.68 1.28 1.01 1.92.43 2.88-.58.97-1.55.97-3.47.97H7.14c-1.92 0-2.89 0-3.47-.97-.58-.96-.25-1.6.42-2.88A8.9 8.9 0 0 1 12 3.35a8.9 8.9 0 0 1 7.9 4.68M9.65 11.88H4.4c-.33 0-.5 0-.63.02a1.5 1.5 0 0 0-1.2 1.2c-.03.14-.03.3-.03.63s0 .5.03.63c.11.6.59 1.08 1.2 1.2.13.02.3.02.63.02h8.8m3.86-3.7h2.54c.33 0 .5 0 .63.02.61.12 1.09.6 1.2 1.2.03.14.03.3.03.63s0 .5-.03.63a1.5 1.5 0 0 1-1.2 1.2c-.13.02-.3.02-.63.02H16m-12.3.34c0 1.24 0 1.85.17 2.35a3 3 0 0 0 1.8 1.8c.5.18 1.12.18 2.35.18h7.96c1.23 0 1.85 0 2.34-.18a3 3 0 0 0 1.8-1.8c.19-.5.19-1.11.19-2.35'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m8.48 11.88 4.78 3.73c.93.72 1.4 1.08 1.87.96.48-.11.71-.66 1.19-1.74l1.3-2.95'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
