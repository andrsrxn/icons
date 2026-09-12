import type { Icon } from './types'

export const IconFileLock: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-file-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.67 22.2c-1.88 0-2.82 0-3.4-.6-.6-.58-.6-1.52-.6-3.4V5.76c0-1.87 0-2.8.58-3.39.58-.58 1.52-.59 3.38-.6l2.22-.03c1.3-.02 1.96-.02 2.44.26a2 2 0 0 1 .69.69c.29.47.29 1.13.29 2.43 0 1.29 0 1.93.28 2.4a2 2 0 0 0 .69.69c.47.29 1.12.29 2.42.29s1.96 0 2.44.29a2 2 0 0 1 .65.64c.3.47.31 1.12.33 2.42l.07 3.93-.57-.44a1.9 1.9 0 0 0-2.75.43l-.05.07q-.36.53-.97.69a1.68 1.68 0 0 0-1 2.53l.24.38a2 2 0 0 1 .28 1.47l-.25 1.27H7.67'
        fill='currentColor'
      />
      <path
        d='M20.03 11.12v-.88c0-1.25 0-1.87-.24-2.43s-.68-1-1.57-1.87L17.04 4.8l-1.23-1.23c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.68c-2.82 0-4.24 0-5.12.88S3.67 5 3.67 7.81v8.38c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.68'
        stroke='currentColor'
      />
      <path
        d='M13.07 2.33v2.44c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.45'
        stroke='currentColor'
      />
      <path
        d='M17 15.05c.4-.76.59-1.14.9-1.14.3 0 .5.38.89 1.14l.42.83c.11.22.17.33.27.4s.22.1.46.13l.92.15c.85.13 1.27.2 1.36.5.1.28-.2.59-.81 1.2l-.66.65c-.17.18-.26.26-.3.38s-.02.24.02.48l.15.92c.13.85.2 1.27-.05 1.45s-.63-.01-1.4-.4l-.82-.42c-.22-.12-.34-.17-.45-.17-.12 0-.24.05-.46.17l-.83.42c-.76.39-1.14.58-1.39.4s-.18-.6-.05-1.45l.15-.92c.04-.24.06-.37.02-.48-.04-.12-.13-.2-.3-.38l-.66-.66c-.6-.6-.9-.9-.81-1.2.1-.3.51-.36 1.36-.5l.92-.14q.34-.04.47-.13c.13-.09.15-.18.26-.4z'
        stroke='currentColor'
      />
    </svg>
  )
}
