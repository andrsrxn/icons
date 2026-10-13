import type { Icon } from './types'

export const IconMailMedal: Icon = ({
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
      data-slot='icon-ui-mail-medal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m16.63 20.82.35-1.17c.12-.41.18-.62.35-.72s.38-.06.8.03l.53.1.2.04.2-.03.6-.12c.42-.08.64-.12.8-.02s.23.32.35.74l.32 1.18c.23.83.34 1.24.12 1.45s-.63.05-1.43-.24l-.61-.23a1 1 0 0 0-.35-.1 1 1 0 0 0-.35.1l-.57.2c-.82.31-1.23.47-1.46.26-.22-.22-.1-.64.15-1.47'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.09 8.55c0-1.87 0-2.81.58-3.08s1.3.34 2.72 1.56l5.48 4.68c.62.53.93.8 1.3.8s.68-.27 1.3-.8l5.48-4.68c1.42-1.22 2.13-1.83 2.72-1.56.58.27.58 1.2.58 3.08v7.8l-3.1-3.53-3.52 2.69L17.1 20h-9c-2.83 0-4.24 0-5.12-.88S2.1 16.82 2.1 14z'
        fill='currentColor'
      />
      <path
        d='M22.25 10.58V10c0-2.83 0-4.24-.88-5.12S19.07 4 16.25 4h-8.5c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v4c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.52'
        stroke='currentColor'
      />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path
        d='m20.56 18.78.57 2.07c.23.83.34 1.24.12 1.45s-.63.05-1.43-.24l-.61-.23a1 1 0 0 0-.35-.1 1 1 0 0 0-.35.1l-.57.2c-.82.31-1.23.47-1.46.26-.22-.22-.1-.64.15-1.47l.6-2.04'
        stroke='currentColor'
      />
      <path
        d='M21.8 16.13a2.94 2.94 0 0 0-2.94-2.95 2.95 2.95 0 1 0 2.94 2.95'
        stroke='currentColor'
      />
    </svg>
  )
}
