import type { Icon } from './types'

export const IconMailMedal: Icon = ({
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
      data-slot='icon-ui-mail-medal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m16.63 20.82.35-1.17c.12-.41.18-.62.35-.72s.38-.06.8.03l.53.1.2.04.2-.03.6-.12c.42-.08.64-.12.8-.02s.23.32.35.74l.32 1.18c.23.83.34 1.24.12 1.45s-.63.05-1.43-.24l-.61-.23a1 1 0 0 0-.35-.1 1 1 0 0 0-.35.1l-.57.2c-.82.31-1.23.47-1.46.26-.22-.22-.1-.64.15-1.47'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M1.81 8.63c0-1.93 0-2.9.6-3.16.59-.27 1.3.38 2.74 1.67l5.67 5.1c.64.57.96.86 1.35.86.38 0 .7-.3 1.34-.88l5.39-4.94c1.43-1.32 2.15-1.97 2.75-1.71s.6 1.24.6 3.19v7.11l-1.86-1.83c-.6-.58-.89-.87-1.26-.9-.38-.02-.7.23-1.36.73l-1.01.78c-.55.41-.82.62-.91.92s0 .63.22 1.29L17.1 20l-9.32-.05c-2.81 0-4.22-.02-5.1-.9-.87-.87-.87-2.28-.87-5.1z'
        fill='currentColor'
      />
      <path
        d='M12.27 20H9.75c-3.77 0-5.65 0-6.83-1.17S1.75 15.77 1.75 12s0-5.66 1.17-6.83C4.1 4 5.98 4 9.75 4h5.91c2.42 0 3.62 0 4.53.5a4 4 0 0 1 1.55 1.56c.5.9.5 2.11.5 4.52'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path
        d='m17.24 18.78-.6 2.04c-.26.83-.38 1.25-.16 1.47.23.2.64.05 1.46-.25l.57-.21q.24-.1.35-.1a1 1 0 0 1 .35.1l.6.23h0c.81.3 1.21.44 1.44.24s.1-.62-.12-1.45l-.57-2.07'
        stroke='currentColor'
      />
      <path d='M21.8 16.13a2.95 2.95 0 1 1-5.9 0 2.95 2.95 0 0 1 5.9 0' stroke='currentColor' />
    </svg>
  )
}
