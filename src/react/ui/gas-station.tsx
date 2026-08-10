import type { Icon } from './types'

export const IconGasStation: Icon = ({
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
      data-slot='gas-station'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.37 8.7c.37.5.69.96.9 1.27.17.22.12.55-.12.68-.93.49-2.03.3-2.6-.5s-.43-1.97.27-2.79c.18-.2.5-.16.65.06zm-5.28-4.73H5.13v13.49h8.96zM9.6 10.16c-.55 0-.83 0-1.05-.08a1.4 1.4 0 0 1-.91-.91c-.08-.23-.08-.5-.08-1.05s0-.82.08-1.05c.14-.43.48-.77.91-.91.22-.08.5-.08 1.05-.08s.82 0 1.04.08c.44.14.78.48.92.91.07.23.07.5.07 1.05s0 .82-.07 1.05c-.14.43-.48.77-.92.91-.22.08-.5.08-1.04.08'
        fill='currentColor'
      />
      <path
        d='M14.17 17.46V7.73c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58H9.05c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v9.73'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='7.57'
        y='6.08'
        width='4.07'
        height='4.07'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='4.39'
        y='17.46'
        width='10.45'
        height='2.81'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m14.16 12.59.84 1.04c.3.37.45.56.61.7a2 2 0 0 0 1.74.38c.2-.05.42-.15.85-.36.36-.17.54-.26.69-.37a2 2 0 0 0 .8-1.36c.02-.18 0-.38-.02-.78l-.05-.98'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M17.57 5.01a.7.7 0 0 0-1.03-.11.8.8 0 0 0-.11 1.08L17 5.5zm.4 3a.7.7 0 0 0 1.02.12.8.8 0 0 0 .12-1.09l-.57.49zM17 5.5l-.57.48 1.54 2.03.57-.48.57-.49-1.54-2.03z'
        fill='currentColor'
      />
      <path
        d='M19.37 8.7c.37.5.69.96.9 1.27.17.22.12.55-.12.68-.93.49-2.03.3-2.6-.5s-.43-1.97.27-2.79c.18-.2.5-.16.65.06z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
