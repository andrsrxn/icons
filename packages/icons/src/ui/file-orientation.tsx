import type { Icon } from './types'

export const IconFileOrientation: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-file-orientation'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.67 17.19c-1.88 0-2.82 0-3.41-.59-.59-.58-.59-1.52-.59-3.41V5.3c0-1.53 0-2.3.4-2.83a2 2 0 0 1 .39-.39c.53-.4 1.3-.41 2.82-.43h1.1c.53-.01.8-.02 1.02.03a2 2 0 0 1 1.52 1.5c.05.23.05.5.05 1.03s0 .8.05 1.01a2 2 0 0 0 1.5 1.51c.23.05.5.05 1.02.05.53 0 .8 0 1.02.05a2 2 0 0 1 1.5 1.5c.05.23.05.5.05 1.02v1.24H9.16l-2.49 2.1v4.5z'
        fill='currentColor'
      />
      <path
        d='M14.11 10.27V8.71c0-1.25 0-1.88-.23-2.44s-.69-1-1.58-1.86l-.46-.45-.64-.64h0A6 6 0 0 0 9.62 2l-.3-.13c-.48-.17-1.01-.17-2.06-.17-2.43 0-3.64 0-4.46.66a3 3 0 0 0-.47.46c-.66.83-.66 2.04-.66 4.46v4.98c0 1.81 0 2.72.38 3.4a3 3 0 0 0 1.16 1.16c.68.38 1.6.38 3.4.38'
        stroke='currentColor'
      />
      <path
        d='m19.98 12.7.64.61c.7.66 1.04.99 1.26 1.4a3 3 0 0 1 .23.54c.14.44.14.91.14 1.87 0 2.12 0 3.18-.51 3.94a3 3 0 0 1-.81.81c-.76.51-1.82.51-3.95.51h-4.3c-2.76 0-4.14 0-5-.83l-.1-.09c-.83-.87-.83-2.24-.83-5s0-4.13.84-5l.08-.09c.87-.84 2.25-.84 5-.84h2.65c1.2 0 1.81 0 2.36.23.54.22.97.64 1.84 1.48z'
        stroke='currentColor'
      />
      <path
        d='M8.82 2.08v.9c0 1.89 0 2.83.58 3.42.59.59 1.53.59 3.42.59h.9'
        stroke='currentColor'
      />
      <path d='M21.86 15.58h-.8c-1.94 0-2.9 0-3.5-.57s-.6-1.5-.6-3.33v-.78' stroke='currentColor' />
    </svg>
  )
}
