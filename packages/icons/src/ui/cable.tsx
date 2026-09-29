import type { Icon } from './types'

export const IconCable: Icon = ({
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
      data-slot='icon-ui-cable'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.13 21.5c-.22.1-.33.14-.42.15a1 1 0 0 1-1.17-.8c-.02-.09-.02-.2-.02-.45v-3.49c0-.22 0-.33.02-.42a1 1 0 0 1 1.15-.81q.12.02.4.12c.23.08.34.12.44.17a2 2 0 0 1 1.11 1.58c.02.11.02.23.02.47v1.27c0 .25 0 .37-.02.48a2 2 0 0 1-1.06 1.55z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.87 2.5c.22-.1.33-.14.42-.15a1 1 0 0 1 1.17.8c.02.09.02.2.02.45v3.49c0 .22 0 .33-.02.42a1 1 0 0 1-1.15.81q-.12-.02-.4-.12l-.44-.17a2 2 0 0 1-1.11-1.58c-.02-.11-.02-.23-.02-.47V4.71c0-.25 0-.37.02-.48a2 2 0 0 1 1.06-1.55c.1-.06.22-.1.45-.19'
        fill='currentColor'
      />
      <path
        d='M6.57 21.48c-.67.2-1 .31-1.27.25a1 1 0 0 1-.64-.46c-.14-.24-.14-.59-.14-1.29v-2.6c0-.7 0-1.05.14-1.29a1 1 0 0 1 .63-.46c.27-.07.6.04 1.26.24.39.12.58.18.72.3a1 1 0 0 1 .32.43c.07.17.07.37.07.77v2.61c0 .4 0 .6-.07.77a1 1 0 0 1-.32.43c-.14.11-.33.17-.7.3'
        stroke='currentColor'
      />
      <path
        d='M17.43 2.52c.67-.2 1-.31 1.27-.25a1 1 0 0 1 .64.46c.14.24.14.59.14 1.29v2.6c0 .7 0 1.05-.14 1.29a1 1 0 0 1-.63.46c-.27.07-.6-.04-1.26-.24a2 2 0 0 1-.72-.3 1 1 0 0 1-.32-.43c-.07-.17-.07-.37-.07-.77V4.02c0-.4 0-.6.07-.77a1 1 0 0 1 .32-.43c.14-.11.33-.17.7-.3'
        stroke='currentColor'
      />
      <path d='M4.52 20.16H2.44' stroke='currentColor' />
      <path d='M19.48 3.84h2.08' stroke='currentColor' />
      <path d='M4.52 17.2H2.44' stroke='currentColor' />
      <path d='M19.48 6.8h2.08' stroke='currentColor' />
      <path
        d='M7.76 18.72h8.44c.34 0 .5 0 .65-.02a3 3 0 0 0 2.7-2.74c.02-.14.01-.3 0-.65l-.01-.63a3 3 0 0 0-2.7-2.67L16.2 12H7.62l-.47-.01a3 3 0 0 1-2.8-2.82v-.48l.02-.46a3 3 0 0 1 2.79-2.75h8.94'
        stroke='currentColor'
      />
    </svg>
  )
}
