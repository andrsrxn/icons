import type { Icon } from './types'

export const IconHandReceivingStar: Icon = ({
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
      data-slot='icon-ui-hand-receiving-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.19' y='13.68' width='4.01' height='7.91' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M14.29 3.22c.39-.77.58-1.15.89-1.15.3 0 .5.38.89 1.15l.49.96c.11.22.17.33.27.4s.22.1.46.13l1.07.17c.84.13 1.27.2 1.36.5.1.28-.2.59-.81 1.2l-.76.76c-.18.17-.27.26-.3.38-.04.11-.02.23.02.48l.16 1.06c.14.85.2 1.27-.04 1.45s-.63-.01-1.4-.4l-.96-.49c-.22-.11-.33-.17-.45-.17s-.23.06-.45.17l-.97.5c-.76.38-1.14.57-1.39.4-.25-.19-.18-.6-.05-1.46l.17-1.06c.04-.25.06-.37.02-.48-.03-.12-.12-.2-.3-.38l-.76-.77c-.6-.6-.9-.9-.81-1.2s.51-.36 1.36-.49l1.06-.17c.25-.04.37-.06.47-.13s.15-.18.27-.4z'
        fill='currentColor'
      />
      <path
        d='M6.2 20.26s1.16.91 2.8 1.29c3.3.75 5 .54 7.92-.46 2.13-.73 3.81-2.69 4.66-3.86.4-.54.4-1.27.05-1.85a1.98 1.98 0 0 0-2.96-.44 27 27 0 0 1-3.72 2.7c-.77.44-2.39.35-3.92.35m3.92-.35c.64-1.57.45-2.82-.24-3.07a11 11 0 0 0-4.03-.62c-3.73 0-4.48.87-4.48.87'
        stroke='currentColor'
      />
      <rect x='2.19' y='13.68' width='4.01' height='7.91' rx='1' stroke='currentColor' />
      <path
        d='M14.29 3.22c.39-.77.58-1.15.89-1.15.3 0 .5.38.89 1.15l.49.96c.11.22.17.33.27.4s.22.1.46.13l1.07.17c.84.13 1.27.2 1.36.5.1.28-.2.59-.81 1.2l-.76.76c-.18.17-.27.26-.3.38-.04.11-.02.23.02.48l.16 1.06c.14.85.2 1.27-.04 1.45s-.63-.01-1.4-.4l-.96-.49c-.22-.11-.33-.17-.45-.17s-.23.06-.45.17l-.97.5c-.76.38-1.14.57-1.39.4-.25-.19-.18-.6-.05-1.46l.17-1.06c.04-.25.06-.37.02-.48-.03-.12-.12-.2-.3-.38l-.76-.77c-.6-.6-.9-.9-.81-1.2s.51-.36 1.36-.49l1.06-.17c.25-.04.37-.06.47-.13s.15-.18.27-.4z'
        stroke='currentColor'
      />
    </svg>
  )
}
